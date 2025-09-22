import type { NextWebVitalsMetric } from 'next/app';

/**
 * Função para reportar métricas Web Vitals conforme recomendação da Vercel
 * https://nextjs.org/docs/advanced-features/measuring-performance
 */
export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Desestruturando as propriedades da métrica
  const { name, value, id } = metric;
  
  // Log durante desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Web Vital: ${name} (ID: ${id})`, value);
  }

  // Implementação para Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', name, {
      event_category: 'web-vitals',
      event_label: name,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }

  // Outros sistemas de analytics podem ser adicionados aqui
}
