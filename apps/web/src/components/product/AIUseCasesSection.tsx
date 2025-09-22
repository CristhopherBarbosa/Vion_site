import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface UseCaseProps {
  title: string;
  description: string;
  image: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const UseCase: React.FC<UseCaseProps> = ({ title, description, image, index, isActive, onClick }) => {
  return (
    <div 
      className={`rounded-lg p-5 cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-primary-50 border-2 border-primary-500 shadow-lg' 
          : 'bg-white border border-gray-200 hover:border-primary-300'
      }`}
      onClick={onClick}
    >
      <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-primary-600' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AIUseCasesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const useCases = [
    {
      title: "Agendamento automatizado",
      description: "Permita que pacientes agendem consultas 24/7 diretamente pelo WhatsApp com verificação automática de disponibilidade.",
      image: "/images/products/vion-ia/usecase-agendamento.jpg"
    },
    {
      title: "Confirmação e lembretes",
      description: "Reduza faltas com confirmações e lembretes automáticos de consultas, permitindo reagendamentos sem intervenção humana.",
      image: "/images/products/vion-ia/usecase-confirmacao.jpg"
    },
    {
      title: "Triagem inicial",
      description: "Colete informações preliminares sobre sintomas, histórico e convênio antes mesmo da consulta, otimizando o atendimento médico.",
      image: "/images/products/vion-ia/usecase-triagem.jpg"
    },
    {
      title: "Qualificação de leads",
      description: "Capture e qualifique leads 24h por dia, coletando informações relevantes e direcionando para as especialidades adequadas.",
      image: "/images/products/vion-ia/usecase-leads.jpg"
    },
    {
      title: "FAQ inteligente",
      description: "Responda automaticamente dúvidas frequentes sobre procedimentos, preparo para exames, localização e horários de atendimento.",
      image: "/images/products/vion-ia/usecase-faq.jpg"
    },
    {
      title: "Pós-consulta e follow-up",
      description: "Envie automaticamente instruções pós-consulta, resultados de exames e avaliações de satisfação para melhorar a experiência do paciente.",
      image: "/images/products/vion-ia/usecase-followup.jpg"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Casos de uso da Vion.IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a inteligência artificial pode transformar diferentes aspectos do seu atendimento e gestão de pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Imagem do caso de uso */}
          <motion.div 
            key={`usecase-image-${activeIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image 
                src={useCases[activeIndex].image} 
                alt={useCases[activeIndex].title} 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{useCases[activeIndex].title}</h3>
                  <p>{useCases[activeIndex].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Lista de casos de uso */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <UseCase
                    title={useCase.title}
                    description={useCase.description}
                    image={useCase.image}
                    index={index}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            A Vion.IA se adapta completamente às necessidades específicas do seu negócio
          </p>
          <a 
            href="/contato" 
            className="btn btn-primary py-3 px-6 inline-block"
          >
            Solicite uma solução personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIUseCasesSection;
