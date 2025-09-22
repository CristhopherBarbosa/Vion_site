import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface DemoSectionProps {
  product: 'vion-med' | 'vion-ia' | 'enterprise';
}

const DemoSection: React.FC<DemoSectionProps> = ({ product }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const productData = {
    'vion-ia': {
      title: "Veja a Vion.IA em ação",
      description: "Assista como nosso chatbot especializado em saúde automatiza agendamentos, responde dúvidas e qualifica leads em tempo real.",
      videoThumbnail: "/images/products/vion-ia/demo-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/embed/demo-vion-ia",
    },
    'vion-med': {
      title: "Conheça o Vion Med",
      description: "Veja como nossa plataforma integrada facilita a gestão completa da sua clínica, do agendamento ao faturamento.",
      videoThumbnail: "/images/products/vion-med/demo-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/embed/demo-vion-med",
    },
    'enterprise': {
      title: "Soluções Enterprise em ação",
      description: "Conheça casos reais de como nossas soluções personalizadas transformaram grandes operadoras e hospitais.",
      videoThumbnail: "/images/products/enterprise/demo-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/embed/demo-enterprise",
    }
  };

  const demoData = productData[product];

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {demoData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {demoData.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative pb-[56.25%] h-0">
            <Image
              src={demoData.videoThumbnail}
              alt={`Demonstração ${product === 'vion-ia' ? 'Vion.IA' : product === 'vion-med' ? 'Vion Med' : 'Vion Enterprise'}`}
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
                aria-label="Iniciar vídeo"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
