import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Versão estática do cartão para SSR
const StaticSolutionCard: React.FC<{
  title: string;
  description: string;
  image: string;
  href: string;
}> = ({ title, description, image, href }) => {
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-soft-lg border border-gray-100 hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={href} className="text-primary-600 font-medium flex items-center hover:text-primary-700">
          Saiba Mais
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Versão estática para SSR
const StaticSolutionsSection: React.FC = () => {
  
  const solutions = [
    {
      title: "Vion Med: Gestão Clínica Completa",
      description: "Software que unifica agendamento, prontuário eletrônico e faturamento, permitindo mais tempo para o cuidado com o paciente.",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/vion-med"
    },
    {
      title: "VionIA Bot: Atendimento Inteligente 24/7",
      description: "Chatbot especializado em saúde para qualificação de leads, agendamento de consultas e automação de processos, integrado com a API Oficial da Meta.",
      image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/vionia-bot"
    },
    {
      title: "Vion Enterprise: Soluções personalizadas",
      description: "Integração de sistemas legados e desenvolvimento de APIs seguras para grandes operadoras e hospitais.",
      image: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/enterprise"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Soluções completas para cada necessidade.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma integrada oferece soluções modulares que se adaptam ao seu negócio, 
            da gestão clínica básica aos sistemas enterprise mais complexos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <StaticSolutionCard 
              key={solution.title} 
              {...solution} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/contato" 
            className="btn btn-primary inline-block py-3 px-8 text-lg"
          >
            Encontre a solução ideal para você
          </Link>
        </div>
      </div>
    </section>
  );
};

// Versão dinâmica carregada apenas no cliente
const DynamicSolutionsSection = dynamic(
  () => import('./SolutionsSectionInteractive'),
  { ssr: false }
);

// Componente principal
const SolutionsSection: React.FC = () => {
  return <DynamicSolutionsSection />;
};

export default SolutionsSection;
