import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Types para eventos de analytics
 */
type EventType = 'page_view' | 'click' | 'form_submit' | 'conversion' | 'engagement';

interface AnalyticsEvent {
  type: EventType;
  name: string;
  value?: string | number;
  properties?: Record<string, any>;
}

/**
 * Hook para rastreamento de eventos e métricas no site
 * Pode ser facilmente integrado com Google Analytics, Plausible, ou outras ferramentas
 */
const useAnalytics = () => {
  const router = useRouter();
  
  // Rastreia mudanças de página
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Rastreamento de visualização de página
      trackEvent({
        type: 'page_view',
        name: 'page_view',
        properties: {
          path: url,
          title: document.title,
        },
      });
      
      // Nota: as métricas web-vitals são reportadas separadamente através da função reportWebVitals
    };

    // Escuta eventos de mudança de rota no Next.js
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Rastreia visualização inicial da página
    if (typeof window !== 'undefined') {
      trackEvent({
        type: 'page_view',
        name: 'page_view',
        properties: {
          path: router.asPath,
          title: document.title,
        },
      });
    }

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Função para rastrear eventos
  const trackEvent = (event: AnalyticsEvent) => {
    // Garante que estamos no cliente
    if (typeof window === 'undefined') return;

    try {
      // Log de debug durante desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', event);
      }

      // Implementação para Google Analytics (gtag)
      if ('gtag' in window && typeof (window as any).gtag === 'function') {
        const { type, name, properties } = event;
        
        if (type === 'page_view') {
          (window as any).gtag('config', 'YOUR-GA-MEASUREMENT-ID', {
            page_path: properties?.path,
          });
        } else {
          (window as any).gtag('event', name, properties);
        }
      }

      // Implementação para outros serviços de analytics aqui
      // Exemplos: Meta Pixel, Plausible, etc.

    } catch (error) {
      console.error('Error tracking analytics event:', error);
    }
  };


  // Rastreia cada métrica Core Web Vital
  const trackWebVital = (name: string, value: number) => {
    trackEvent({
      type: 'engagement',
      name: `web_vital_${name.toLowerCase()}`,
      value,
      properties: {
        metric_name: name,
        metric_value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_rating: getRating(name, value),
      },
    });
  };

  // Determina classificação das métricas conforme limites do Google
  const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    switch (name) {
      case 'CLS':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'FID':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'LCP':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'FCP':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'TTFB':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'needs-improvement';
    }
  };

  return {
    trackEvent,
  };
};

export default useAnalytics;
