import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <div ref={itemRef} className="relative">
      {/* Linha vertical do timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />
      
      {/* Ponto do timeline */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 z-10 border-2 border-white"
      />
      
      {/* Conteúdo */}
      <div className={`flex items-center justify-between mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -20 : 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="w-5/12"
        >
          <div className={`p-5 bg-white rounded-lg shadow-soft-md border border-gray-100 ${isLeft ? 'text-right' : 'text-left'}`}>
            <div className="text-primary-600 font-bold mb-1">{year}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </motion.div>
        
        <div className="w-5/12" /> {/* Espaço vazio para o outro lado */}
      </div>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const timelineItems = [
    {
      year: "2006",
      title: "Fundação da Vion",
      description: "Fundada por ex-consultores da Philips, a Vion nasce com o propósito de criar soluções tecnológicas para a área da saúde no Brasil."
    },
    {
      year: "2008",
      title: "Primeiro sistema de gestão",
      description: "Lançamento da primeira versão do Vion Med, sistema de gestão para clínicas e consultórios médicos."
    },
    {
      year: "2012",
      title: "Expansão para hospitais",
      description: "Desenvolvimento de módulos específicos para hospitais e operadoras de saúde, expandindo nossa base de clientes."
    },
    {
      year: "2015",
      title: "Certificação SBIS",
      description: "O Vion Med recebe a certificação da Sociedade Brasileira de Informática em Saúde, consolidando nossa excelência técnica."
    },
    {
      year: "2018",
      title: "Internacionalização",
      description: "Início das operações em Portugal e América Latina, levando nossa tecnologia além das fronteiras brasileiras."
    },
    {
      year: "2021",
      title: "Lançamento da Vion.IA",
      description: "Entrada no mercado de inteligência artificial com chatbots especializados para o setor de saúde."
    },
    {
      year: "2025",
      title: "Unificação da marca",
      description: "Consolidação das marcas Vion Med e Vion.IA sob a mesma identidade visual e estratégia de mercado."
    }
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma trajetória de inovação e dedicação para transformar a saúde com tecnologia.
          </p>
        </motion.div>
        
        <div className="relative">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
