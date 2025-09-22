import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Componentes específicos da página Sobre
import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import TimelineSection from '@/components/about/TimelineSection';

const AboutPage = () => {
  return (
    <MainLayout
      title="Sobre Nós"
      description="Conheça nossa história, missão e a equipe por trás da Vion. Uma empresa com mais de 19 anos de experiência em tecnologia para a saúde."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Humanizando a tecnologia na saúde
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Somos apaixonados por criar soluções tecnológicas que resolvem problemas reais para operadoras, 
                  hospitais e profissionais de saúde em todo o Brasil.
                </p>
                <p className="text-gray-600">
                  Desde 2006, desenvolvemos sistemas intuitivos que permitem que nossos clientes foquem 
                  no que realmente importa: cuidar das pessoas.
                </p>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative h-[400px]"
              >
                <Image 
                  src="/images/about/team-photo.jpg" 
                  alt="Equipe Vion" 
                  fill 
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <ValuesSection />

      {/* Nossa História/Timeline */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Quer fazer parte dessa história?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Estamos sempre em busca de talentos que compartilham nosso propósito de transformar 
            a saúde através da tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/carreiras" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 py-3 px-8 text-lg"
            >
              Ver Vagas Abertas
            </a>
            <a 
              href="/contato" 
              className="btn bg-primary-500 hover:bg-primary-400 text-white border border-white py-3 px-8 text-lg"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
