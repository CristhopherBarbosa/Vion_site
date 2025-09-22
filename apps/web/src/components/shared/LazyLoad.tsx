import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  placeholderHeight?: string;
  placeholderClassName?: string;
  onVisible?: () => void;
}

/**
 * Componente para carregamento lazy de elementos da página,
 * melhorando a performance e as métricas Core Web Vitals como LCP e FID
 */
const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '200px 0px',
  className = '',
  placeholderHeight = 'auto',
  placeholderClassName = '',
  onVisible,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Pula observação se já estiver visível ou no SSR
    if (!currentRef || hasBeenVisible || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }

    // Configuração do observer para detectar quando o elemento entra na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          
          // Callback quando elemento se torna visível
          if (onVisible) {
            onVisible();
          }
          
          // Desconecta o observer após detectar visibilidade
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, onVisible, hasBeenVisible]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        <div 
          className={`bg-gray-100 ${placeholderClassName}`} 
          style={{ height: placeholderHeight }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LazyLoad;
