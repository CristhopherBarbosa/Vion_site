import React from 'react';

interface ResultsFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ResultsFilter: React.FC<ResultsFilterProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'todos', label: 'Todos os casos' },
    { id: 'hospital', label: 'Hospitais' },
    { id: 'clinica', label: 'Clínicas' },
    { id: 'operadora', label: 'Operadoras' },
    { id: 'vion-med', label: 'Vion Med' },
    { id: 'vion-ia', label: 'Vion.IA' },
    { id: 'enterprise', label: 'Vion Enterprise' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="text-gray-700 font-medium mr-4 mb-2">Filtrar por:</div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-1 text-sm rounded-full transition-colors ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-current={activeFilter === filter.id ? 'page' : undefined}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResultsFilter;
