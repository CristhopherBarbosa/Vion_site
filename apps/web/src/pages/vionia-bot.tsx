import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

const VionIABotPage: React.FC = () => {
  return (
    <MainLayout 
      title="VionIA Bot | Chatbot Inteligente para Saúde"
      description="VionIA Bot é um chatbot especializado para área da saúde, integrado com WhatsApp e preparado para qualificar leads e automatizar atendimentos 24/7."
      keywords="chatbot saúde, automação atendimento médico, WhatsApp saúde, qualificação de leads saúde, IA para saúde"
    >
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
                VionIA Bot
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-primary-600 mb-6">
                Chatbot especializado para área da saúde
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Automatize o atendimento e qualifique leads 24/7 com o VionIA Bot, um chatbot inteligente integrado ao WhatsApp e especializado para o setor de saúde.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contato#demo" 
                  className="btn btn-primary text-center py-3 px-6 text-lg shadow-lg shadow-primary-500/20"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] sm:h-[500px]">
                <Image
                  src="/images/vionia-bot-hero.svg"
                  alt="VionIA Bot - Chatbot especializado para saúde"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos do Chatbot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Recursos Inteligentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O VionIA Bot é equipado com tecnologia de ponta para oferecer o melhor em automação de atendimento para a área da saúde.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft-lg border border-gray-100">
              <div className="h-14 w-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integração com WhatsApp</h3>
              <p className="text-gray-600">
                Conexão direta com a API oficial do WhatsApp Business, permitindo interações naturais e imediatas com seus potenciais clientes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft-lg border border-gray-100">
              <div className="h-14 w-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Qualificação de Leads</h3>
              <p className="text-gray-600">
                Filtra e prioriza automaticamente os potenciais clientes com base em critérios personalizáveis, otimizando o processo de vendas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft-lg border border-gray-100">
              <div className="h-14 w-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Respostas Específicas</h3>
              <p className="text-gray-600">
                Alimentado com conhecimento especializado do setor de saúde, oferecendo respostas precisas e personalizadas para as necessidades do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Como o VionIA Bot Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e eficiente para automatizar seu atendimento e converter mais leads.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Integração</h3>
              <p className="text-gray-600">
                Rápida configuração com seu número WhatsApp Business e personalização do bot conforme suas necessidades.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Automação</h3>
              <p className="text-gray-600">
                O bot atende seus clientes 24/7, qualificando leads com perguntas estratégicas e coletando dados relevantes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Qualificação</h3>
              <p className="text-gray-600">
                Leads são avaliados e classificados automaticamente com base nas respostas e comportamento durante a interação.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Conversão</h3>
              <p className="text-gray-600">
                Leads qualificados são direcionados para sua equipe ou integrados com seu CRM, aumentando sua taxa de conversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Benefícios do VionIA Bot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossa solução pode transformar seu atendimento e aumentar seus resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Atendimento 24/7</h3>
                <p className="text-gray-600">
                  Nunca mais perca uma oportunidade de negócio, mesmo fora do horário comercial ou durante picos de demanda.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Redução de Custos</h3>
                <p className="text-gray-600">
                  Diminua significativamente os custos operacionais com atendimento automatizado para questões recorrentes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Aumento na Conversão</h3>
                <p className="text-gray-600">
                  Melhore suas taxas de conversão com leads já pré-qualificados e prontos para a abordagem da sua equipe de vendas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Experiência Personalizada</h3>
                <p className="text-gray-600">
                  Ofereça um atendimento personalizado e consistente, melhorando a satisfação dos clientes e fortalecendo sua marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar seu atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite uma demonstração gratuita e descubra como o VionIA Bot pode transformar o seu negócio na área da saúde.
          </p>
          <Link 
            href="/contato#demo" 
            className="btn bg-white text-primary-600 hover:bg-gray-100 text-center py-3 px-8 text-lg inline-block"
          >
            Solicitar Demonstração Gratuita
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default VionIABotPage;
