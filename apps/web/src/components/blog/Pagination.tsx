import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Função para gerar os itens de paginação com elipses quando necessário
  const getPageItems = () => {
    const items = [];
    
    // Sempre mostrar a primeira página
    items.push(1);
    
    // Adicionar elipses se houver muitas páginas antes da página atual
    if (currentPage > 3) {
      items.push('...');
    }
    
    // Mostrar páginas ao redor da página atual
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        items.push(i);
      }
    }
    
    // Adicionar elipses se houver muitas páginas depois da página atual
    if (currentPage < totalPages - 2) {
      items.push('...');
    }
    
    // Sempre mostrar a última página se houver mais de uma
    if (totalPages > 1) {
      items.push(totalPages);
    }
    
    return items;
  };
  
  // Retornar null se houver apenas uma página
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center space-x-1">
      {/* Botão "Anterior" */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Página anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Números de página */}
      {getPageItems().map((item, index) => (
        typeof item === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(item)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === item
                ? 'bg-primary-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        ) : (
          <span key={index} className="px-2">
            {item}
          </span>
        )
      ))}
      
      {/* Botão "Próxima" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Próxima página"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
