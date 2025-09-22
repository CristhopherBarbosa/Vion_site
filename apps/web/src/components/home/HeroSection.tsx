import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Versão estática para SSR sem hooks ou componentes client-side
const StaticHeroSection: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Tecnologia Humana para a Saúde.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
                Integração de gestão clínica e IA para revolucionar o atendimento e a eficiência em hospitais e operadoras.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contato#demo" 
                  className="btn btn-primary text-center py-3 px-6 text-lg shadow-lg shadow-primary-500/20"
                >
                  Solicitar Demonstração Gratuita
                </Link>
                
                <Link 
                  href="/#solucoes" 
                  className="btn btn-outline text-center py-3 px-6 text-lg"
                >
                  Conheça nossas soluções
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-600">
                Parceira de mais de 500 operadoras e hospitais, incluindo Unimed e Amil.
              </div>
            </div>
          </div>
          
          {/* Right content - hero image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] sm:h-[500px]">
              <Image
                src="/images/hero-image.svg"
                alt="Vion - Tecnologia para saúde"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Versão estática do indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Descubra mais</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-1" />
        </div>
      </div>
    </section>
  );
};

// Versão dinâmica para cliente com hooks e animações
const DynamicHeroSection = dynamic(
  () => import('./HeroSectionInteractive'),
  { ssr: false }
);

// Componente principal que decide qual versão renderizar
const HeroSection: React.FC = () => {
  return <DynamicHeroSection />;
};

export default HeroSection;
