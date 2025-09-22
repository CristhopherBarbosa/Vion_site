import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Result {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  product: string;
  shortDescription: string;
  results: Result[];
  image: string;
  logo: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  category,
  product,
  shortDescription,
  results,
  image,
  logo
}) => {
  const categoryLabels: Record<string, string> = {
    'hospital': 'Hospital',
    'clinica': 'Clínica',
    'operadora': 'Operadora',
  };
  
  const productLabels: Record<string, string> = {
    'vion-med': 'Vion Med',
    'vion-ia': 'Vion.IA',
    'enterprise': 'Vion Enterprise',
  };
  
  const productColors: Record<string, string> = {
    'vion-med': 'bg-blue-100 text-blue-800',
    'vion-ia': 'bg-green-100 text-green-800',
    'enterprise': 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Imagem da capa */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 flex justify-between items-end w-full">
            <div>
              <span className="bg-white text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {categoryLabels[category] || category}
              </span>
            </div>
            <div className="w-16 h-16 bg-white rounded-md p-1 shadow-md flex items-center justify-center">
              <div className="relative w-12 h-12">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${productColors[product]}`}>
            {productLabels[product] || product}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{shortDescription}</p>
        
        {/* Resultados */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {results.map((result, idx) => (
            <div key={idx} className="text-center bg-gray-50 rounded-lg p-2">
              <div className="text-xl font-bold text-primary-600">{result.value}</div>
              <div className="text-xs text-gray-600">{result.label}</div>
            </div>
          ))}
        </div>
        
        <Link
          href={`/casos-de-sucesso/${id}`}
          className="block w-full text-center py-2 px-4 bg-white border border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors rounded-md"
        >
          Ver Case Completo
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
