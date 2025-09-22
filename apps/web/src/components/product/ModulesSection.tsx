import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ModuleProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const Module: React.FC<ModuleProps> = ({ id, title, description, features, image, isActive, onClick }) => {
  return (
    <div 
      className={`border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 cursor-pointer ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}
      onClick={onClick}
    >
      <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-primary-600' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className="text-gray-600 mb-3">{description}</p>
      
      {isActive && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2 pl-5 text-gray-600"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

interface ModulesSectionProps {
  modules: {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
  }[];
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ modules }) => {
  const [activeModuleId, setActiveModuleId] = useState(modules[0]?.id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const activeModule = modules.find(module => module.id === activeModuleId) || modules[0];

  return (
    <section id="modules" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Módulos integrados para sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução completa que cobre todo o fluxo operacional, clínico e financeiro da sua clínica ou consultório.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-soft-md border border-gray-100 h-full">
              {modules.map((module) => (
                <Module
                  key={module.id}
                  id={module.id}
                  title={module.title}
                  description={module.description}
                  features={module.features}
                  image={module.image}
                  isActive={module.id === activeModuleId}
                  onClick={() => setActiveModuleId(module.id)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              key={activeModuleId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200"
            >
              <Image
                src={activeModule.image}
                alt={activeModule.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{activeModule.title}</h3>
                  <p className="text-white/90">{activeModule.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
