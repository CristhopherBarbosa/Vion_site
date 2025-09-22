import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Componentes específicos da página
import FeaturesSection from '@/components/product/FeaturesSection';
import ModulesSection from '@/components/product/ModulesSection';
import TestimonialsSection from '@/components/product/TestimonialsSection';
import PricingSection from '@/components/product/PricingSection';
import FAQSection from '@/components/product/FAQSection';

const VionMedPage = () => {
  // Módulos do Vion Med para passar ao componente ModulesSection
  const modules = [
    {
      id: 'agenda',
      title: 'Agenda Inteligente',
      description: 'Otimize o agendamento de consultas com lembretes automáticos, confirmações via WhatsApp e visão completa da agenda.',
      features: [
        'Agendamento online para pacientes',
        'Lembretes automáticos por WhatsApp/SMS/Email',
        'Gerenciamento de disponibilidade de profissionais',
        'Visão por dia, semana e mês',
        'Confirmação automática de consultas'
      ],
      image: '/images/products/vion-med/agenda.jpg'
    },
    {
      id: 'prontuario',
      title: 'Prontuário Eletrônico',
      description: 'Um prontuário eletrônico completo e certificado SBIS que otimiza o registro clínico e mantém o histórico completo do paciente.',
      features: [
        'Certificado SBIS/CFM',
        'Anamnese estruturada e personalizável',
        'Prescrição eletrônica',
        'Atestados e receituários personalizados',
        'Histórico completo do paciente'
      ],
      image: '/images/products/vion-med/prontuario.jpg'
    },
    {
      id: 'financeiro',
      title: 'Gestão Financeira',
      description: 'Controle completo das finanças da clínica, com relatórios detalhados, controle de recebíveis e integração com sistemas contábeis.',
      features: [
        'Dashboard financeiro em tempo real',
        'Controle de recebíveis e inadimplência',
        'Relatórios gerenciais detalhados',
        'Integração com sistemas contábeis',
        'Gestão de comissões médicas'
      ],
      image: '/images/products/vion-med/financeiro.jpg'
    },
    {
      id: 'faturamento',
      title: 'Faturamento',
      description: 'Sistema completo para faturamento de convênios, com geração de guias TISS, envio de lotes eletrônicos e controle de glosas.',
      features: [
        'Geração automática de guias TISS',
        'Envio eletrônico de lotes',
        'Gestão e contestação de glosas',
        'Controle de pagamentos por convênio',
        'Relatórios por procedimento/convênio'
      ],
      image: '/images/products/vion-med/faturamento.jpg'
    }
  ];

  // Características gerais do produto
  const features = [
    {
      icon: 'cloud',
      title: '100% na nuvem',
      description: 'Acesse de qualquer lugar, em qualquer dispositivo, sem se preocupar com infraestrutura ou backups.'
    },
    {
      icon: 'shield',
      title: 'Segurança total',
      description: 'Criptografia de ponta a ponta, controle de acesso por níveis e conformidade com LGPD e HIPAA.'
    },
    {
      icon: 'devices',
      title: 'Multi-dispositivos',
      description: 'Funciona perfeitamente em desktops, tablets e smartphones, com apps nativos para iOS e Android.'
    },
    {
      icon: 'bolt',
      title: 'Alto desempenho',
      description: 'Interface rápida e responsiva, mesmo em conexões de internet instáveis.'
    },
    {
      icon: 'integration',
      title: 'Integrações',
      description: 'Conecta-se a outros sistemas e equipamentos médicos através de nossa API robusta.'
    },
    {
      icon: 'chart',
      title: 'Análises avançadas',
      description: 'Dashboards e relatórios personalizados para tomada de decisões baseadas em dados.'
    }
  ];

  return (
    <MainLayout
      title="Vion Med - Gestão Clínica Completa"
      description="Software que unifica agendamento, prontuário eletrônico e faturamento, permitindo mais tempo para o cuidado com o paciente."
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
                Vion Med: Gestão Clínica Completa
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Software que unifica agendamento, prontuário eletrônico e faturamento, permitindo 
                que você dedique mais tempo ao que realmente importa: o cuidado com o paciente.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contato#demo" 
                  className="btn btn-primary py-3 px-6 text-lg shadow-lg shadow-primary-500/20"
                >
                  Solicitar Demonstração
                </Link>
                
                <a 
                  href="#modules" 
                  className="btn btn-outline py-3 px-6 text-lg"
                >
                  Explorar Módulos
                </a>
              </div>
              
              <div className="mt-12 flex items-center">
                <div className="mr-6">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={`/images/avatars/user-${i + 1}.jpg`}
                          alt="Usuário"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">+2.500 profissionais</div>
                  <div className="text-yellow-500 flex">
                    {'★'.repeat(5)}
                    <span className="text-gray-600 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/products/vion-med/dashboard.jpg"
                  alt="Vion Med Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Badges flutuantes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-4 -bottom-6 bg-white p-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Conforme LGPD</div>
                    <div className="text-gray-500 text-xs">Dados protegidos</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute right-4 -top-6 bg-white p-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Certificado SBIS</div>
                    <div className="text-gray-500 text-xs">Prontuário seguro</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Characteristics/Features */}
      <FeaturesSection features={features} />

      {/* Modules */}
      <ModulesSection modules={modules} />

      {/* Testimonials */}
      <TestimonialsSection product="vion-med" />

      {/* Pricing */}
      <PricingSection product="vion-med" />

      {/* FAQ */}
      <FAQSection product="vion-med" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua clínica?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais que economizam tempo, reduzem custos e melhoram a experiência do paciente com o Vion Med.
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
              Falar com Consultor
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VionMedPage;
