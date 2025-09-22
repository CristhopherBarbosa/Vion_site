import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  once?: boolean;
}

/**
 * Hook para detectar quando um elemento está visível na viewport
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    rootMargin = '0px',
    root = null,
    once = false,
  }: UseIntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Se a opção "once" estiver ativada e o elemento estiver visível, 
        // desconecta o observer após detectar a primeira interseção
        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, root, once]);

  return isIntersecting;
}
