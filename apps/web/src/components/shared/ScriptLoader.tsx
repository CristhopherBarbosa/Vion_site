import React, { useEffect } from 'react';

interface ScriptLoaderProps {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
}

/**
 * Componente para carregamento dinâmico de scripts com diferentes estratégias
 * para melhorar a performance do site
 */
const ScriptLoader: React.FC<ScriptLoaderProps> = ({
  src,
  id,
  async = true,
  defer = true,
  onLoad,
  strategy = 'afterInteractive',
}) => {
  useEffect(() => {
    if (strategy === 'beforeInteractive') {
      // Scripts que precisam ser carregados antes de a página ser interativa
      // já devem estar incluídos no _document.tsx
      return;
    }

    // Verifica se o script já existe
    const existingScript = document.getElementById(id || src);
    if (existingScript) return;

    const handleLoad = () => {
      if (onLoad) onLoad();
    };

    // Para scripts que devem ser carregados depois que a página estiver interativa
    if (strategy === 'afterInteractive') {
      const script = document.createElement('script');
      script.src = src;
      if (id) script.id = id;
      script.async = async;
      script.defer = defer;
      script.onload = handleLoad;
      document.body.appendChild(script);
      
      return () => {
        if (document.getElementById(id || src)) {
          document.body.removeChild(script);
        }
      };
    }

    // Para scripts que podem ser carregados de forma lazy (baixa prioridade)
    if (strategy === 'lazyOnload') {
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = src;
        if (id) script.id = id;
        script.async = async;
        script.defer = defer;
        script.onload = handleLoad;
        document.body.appendChild(script);
      };

      // Usar requestIdleCallback (ou fallback para setTimeout) para carregar
      // o script quando o navegador estiver ocioso
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadScript);
      } else {
        window.setTimeout(loadScript, 1500);
      }

      return () => {
        const script = document.getElementById(id || src);
        if (script) document.body.removeChild(script);
      };
    }
  }, [src, id, async, defer, onLoad, strategy]);

  return null;
};

export default ScriptLoader;
