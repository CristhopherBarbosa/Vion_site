import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  breakpoint: Breakpoint;
  width: number;
  height: number;
}

/**
 * Hook personalizado para detectar o tamanho da tela e fornecer 
 * informações úteis para desenvolvimento responsivo
 */
const useResponsive = (): ResponsiveReturn => {
  // Valores padrão para SSR
  const defaultReturn: ResponsiveReturn = {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLargeDesktop: false,
    breakpoint: 'lg',
    width: 1024,
    height: 768,
  };

  // No SSR, retorna os valores padrão
  if (typeof window === 'undefined') {
    return defaultReturn;
  }

  // Estado para armazenar as dimensões da tela
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Listener para atualizar dimensões quando a tela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o listener
    window.addEventListener('resize', handleResize);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define o breakpoint atual
  let breakpoint: Breakpoint = 'xs';
  if (dimensions.width >= 1536) {
    breakpoint = '2xl';
  } else if (dimensions.width >= 1280) {
    breakpoint = 'xl';
  } else if (dimensions.width >= 1024) {
    breakpoint = 'lg';
  } else if (dimensions.width >= 768) {
    breakpoint = 'md';
  } else if (dimensions.width >= 640) {
    breakpoint = 'sm';
  }

  // Retorna dados úteis para o desenvolvimento responsivo
  return {
    isMobile: dimensions.width < 768,
    isTablet: dimensions.width >= 768 && dimensions.width < 1024,
    isDesktop: dimensions.width >= 1024 && dimensions.width < 1280,
    isLargeDesktop: dimensions.width >= 1280,
    breakpoint,
    width: dimensions.width,
    height: dimensions.height,
  };
};

export default useResponsive;
