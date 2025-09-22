import React, { useState } from 'react';

/**
 * Componente para auxiliar no desenvolvimento responsivo
 * Mostra o breakpoint atual (apenas visível em ambiente de desenvolvimento)
 */
const ResponsiveHelper: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Apenas renderiza em ambiente de desenvolvimento
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return isVisible ? (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-xs font-mono">
        <div className="sm:hidden">xs (320px)</div>
        <div className="hidden sm:block md:hidden">sm (640px)</div>
        <div className="hidden md:block lg:hidden">md (768px)</div>
        <div className="hidden lg:block xl:hidden">lg (1024px)</div>
        <div className="hidden xl:block 2xl:hidden">xl (1280px)</div>
        <div className="hidden 2xl:block">2xl (1536px)</div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
        aria-label="Fechar"
      >
        ×
      </button>
    </div>
  ) : null;
};

export default ResponsiveHelper;
