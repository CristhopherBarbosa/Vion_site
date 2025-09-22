import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Componentes específicos da página
import ContactForm from '@/components/contact/ContactForm';
import DemoRequestForm from '@/components/contact/DemoRequestForm';
import ContactInfo from '@/components/contact/ContactInfo';

const ContatoPage = () => {
  const [activeForm, setActiveForm] = useState<'contato' | 'demo'>('contato');
  
  return (
    <MainLayout
      title="Contato"
      description="Entre em contato com a Vion para conhecer nossas soluções e agendar uma demonstração gratuita."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Como podemos ajudar você?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-700 mb-12"
            >
              Estamos prontos para auxiliá-lo a encontrar a melhor solução para sua clínica, hospital ou operadora.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => setActiveForm('contato')}
                className={`px-6 py-3 rounded-md font-medium ${
                  activeForm === 'contato'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Contato Geral
              </button>
              <button
                onClick={() => setActiveForm('demo')}
                className={`px-6 py-3 rounded-md font-medium ${
                  activeForm === 'demo'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                id="demo"
              >
                Solicitar Demonstração
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-soft-lg border border-gray-100 overflow-hidden"
              >
                {activeForm === 'contato' ? (
                  <ContactForm />
                ) : (
                  <DemoRequestForm />
                )}
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Onde estamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visite nossa sede ou entre em contato pelos canais digitais
            </p>
          </div>
          
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg relative">
            {/* Aqui seria inserido um mapa interativo, mas por questões de simplicidade, 
                 vamos utilizar uma imagem estática simulando um mapa */}
            <div className="absolute inset-0 bg-gray-200">
              <Image 
                src="/images/map.jpg"
                alt="Mapa de localização da Vion"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Marcador do mapa */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-primary-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="font-medium">Vion Tecnologia</div>
                  <div className="text-sm">São Paulo, SP</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Endereço:</strong> Av. Paulista, 1000, Bela Vista, São Paulo - SP, 01310-100<br />
              <strong>Horário de atendimento:</strong> Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respostas rápidas para dúvidas comuns
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-soft-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Quanto tempo leva para implementar as soluções Vion?
                </h3>
                <p className="text-gray-600">
                  O tempo de implementação varia conforme a complexidade da sua operação e a solução escolhida. 
                  Para clínicas pequenas, a implementação do Vion Med pode levar de 1 a 2 semanas. Para grandes 
                  hospitais e operadoras, o processo completo pode levar de 4 a 12 semanas. Nossa equipe trabalhará 
                  com você para criar um cronograma personalizado.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Como funciona o suporte técnico?
                </h3>
                <p className="text-gray-600">
                  Todos os nossos planos incluem suporte técnico. Oferecemos diferentes níveis de SLA conforme o plano 
                  contratado, com opções que vão desde suporte por e-mail em horário comercial até suporte 24/7 com 
                  atendimento prioritário. Nosso time de especialistas está sempre disponível para auxiliar em qualquer 
                  questão técnica ou operacional.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  As soluções da Vion estão em conformidade com a LGPD?
                </h3>
                <p className="text-gray-600">
                  Sim, todas as nossas soluções são desenvolvidas seguindo os princípios de Privacy by Design e em total 
                  conformidade com a Lei Geral de Proteção de Dados. Implementamos controles rigorosos de segurança, 
                  criptografia de dados sensíveis, políticas de acesso granular e ferramentas para atender aos direitos 
                  dos titulares de dados conforme exigido pela legislação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContatoPage;
