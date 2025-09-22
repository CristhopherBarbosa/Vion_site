import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Versão estática para SSR (sem hooks ou animações)
const StaticWhyVionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px]">
              <Image 
                src="/images/vion-animation.svg" 
                alt="Vion - União de gestão clínica com IA" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Transformamos tecnologia em cuidado.
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Com mais de 19 anos de experiência na área de TI para a saúde, nossos fundadores, ex-consultores da Philips, 
                uniram conhecimento técnico e prático para criar soluções que realmente impactam o ecossistema de saúde brasileiro.
              </p>
              
              <p className="text-lg">
                Nossa missão é desenvolver tecnologia com propósito humano, focada em trazer mais eficiência para operadoras e 
                hospitais, e mais tempo para o que realmente importa: o cuidado com o paciente.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">19+</div>
                  <div className="text-gray-700">Anos de experiência</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-gray-700">Clientes satisfeitos</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">99.8%</div>
                  <div className="text-gray-700">Uptime de serviço</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Versão dinâmica com animações e hooks carregada apenas no cliente
const DynamicWhyVionSection = dynamic(
  () => import('./WhyVionSectionInteractive'),
  { ssr: false }
);

// Componente principal que escolhe qual versão renderizar
const WhyVionSection: React.FC = () => {
  return <DynamicWhyVionSection />;
};

export default WhyVionSection;
