import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Componentes específicos da página
import FeaturesSection from '@/components/product/FeaturesSection';
import TestimonialsSection from '@/components/product/TestimonialsSection';
import PricingSection from '@/components/product/PricingSection';
import FAQSection from '@/components/product/FAQSection';
import AIUseCasesSection from '@/components/product/AIUseCasesSection';
import DemoSection from '@/components/product/DemoSection';

const VionIAPage = () => {
  // Características da Vion.IA
  const features = [
    {
      icon: 'chat',
      title: 'Chatbot especializado',
      description: 'Chatbot com IA treinada especificamente para o setor de saúde, com compreensão de terminologias médicas.'
    },
    {
      icon: 'whatsapp',
      title: 'Integração WhatsApp',
      description: 'Integração oficial com a API do WhatsApp Business para atendimento no canal preferido dos pacientes.'
    },
    {
      icon: 'automation',
      title: 'Automação inteligente',
      description: 'Automatize agendamentos, confirmações, cancelamentos e reagendamentos sem intervenção humana.'
    },
    {
      icon: 'dashboard',
      title: 'Dashboard avançado',
      description: 'Painel completo com métricas de atendimento, conversão, tempos de resposta e satisfação.'
    },
    {
      icon: 'integration',
      title: 'Integrações completas',
      description: 'Conexão com sistema de agendamento, CRM e outras plataformas já utilizadas pela clínica.'
    },
    {
      icon: 'human',
      title: 'Transição para humanos',
      description: 'Detecção inteligente para transferir o atendimento para um humano quando necessário.'
    }
  ];

  return (
    <MainLayout
      title="Vion.IA - Atendimento Inteligente 24/7"
      description="Chatbot especializado em saúde para qualificação de leads, agendamento de consultas e automação de processos, integrado com a API Oficial da Meta."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 mb-12 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Vion.IA: Atendimento<br />Inteligente 24/7
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Chatbot especializado em saúde para qualificação de leads, agendamento de consultas e 
                automação de processos, integrado com a API Oficial da Meta.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contato#demo" 
                  className="btn btn-primary py-3 px-6 text-lg shadow-lg shadow-primary-500/20"
                >
                  Solicitar Demonstração
                </Link>
                
                <a 
                  href="#cases" 
                  className="btn btn-outline py-3 px-6 text-lg"
                >
                  Ver Casos de Uso
                </a>
              </div>
              
              <div className="mt-8 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center text-gray-600 text-sm">
                  <div className="flex mr-3">
                    {'★'.repeat(5)}
                  </div>
                  <div>
                    <span className="font-semibold">97% de resolução</span> sem intervenção humana
                  </div>
                </div>
                <div className="mt-2 text-gray-600 text-sm">
                  Redução de <span className="font-semibold">35% nas faltas</span> com confirmação automática
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[500px] md:h-[600px] w-full max-w-[320px] mx-auto">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 w-[280px] h-[560px] z-10">
                  <div className="h-12 bg-gray-100 flex items-center px-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M13.07 1.757c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 16.47c-3.56 0-6.47-2.91-6.47-6.47s2.91-6.47 6.47-6.47 6.47 2.91 6.47 6.47-2.9 6.47-6.47 6.47z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Vion.IA</div>
                      <div className="text-xs text-green-500">Online</div>
                    </div>
                  </div>
                  
                  <div className="h-[498px] bg-gray-50 overflow-hidden relative p-3">
                    <Image
                      src="/images/products/vion-ia/chat-screen.jpg"
                      alt="Chat da Vion.IA"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute right-0 top-[100px] bg-blue-100 rounded-lg p-3 shadow-md w-[180px]">
                  <div className="text-sm">
                    <div className="font-semibold">Automação completa</div>
                    <div className="text-xs text-gray-600">Agendamentos e confirmações sem intervenção humana</div>
                  </div>
                </div>
                
                <div className="absolute left-0 bottom-[150px] bg-green-100 rounded-lg p-3 shadow-md w-[180px]">
                  <div className="text-sm">
                    <div className="font-semibold">Integração oficial</div>
                    <div className="text-xs text-gray-600">Com API do WhatsApp Business</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Características/Features */}
      <FeaturesSection features={features} />

      {/* Casos de Uso da IA */}
      <AIUseCasesSection />

      {/* Demo/Video Section */}
      <DemoSection product="vion-ia" />

      {/* Testimonials */}
      <TestimonialsSection product="vion-ia" />

      {/* Pricing */}
      <PricingSection product="vion-ia" />

      {/* FAQ */}
      <FAQSection product="vion-ia" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar seu atendimento?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Automatize seu atendimento, qualifique leads e aumente seus agendamentos com a Vion.IA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contato#demo" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 py-3 px-8 text-lg"
            >
              Solicitar Demonstração
            </Link>
            <Link 
              href="/contato" 
              className="btn bg-primary-500 hover:bg-primary-400 text-white border border-white py-3 px-8 text-lg"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VionIAPage;
