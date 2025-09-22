import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const WhyVionSectionInteractive: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative w-full h-[400px]">
              <Image 
                src="/images/vion-animation.svg" 
                alt="Vion - União de gestão clínica com IA" 
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVionSectionInteractive;
