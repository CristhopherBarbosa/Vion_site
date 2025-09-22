import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlight: boolean;
  badge?: string;
}

interface PricingSectionProps {
  product: 'vion-med' | 'vion-ia' | 'enterprise';
}

const PricingSection: React.FC<PricingSectionProps> = ({ product }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const pricingData: Record<string, PricingTier[]> = {
    'vion-med': [
      {
        name: "Básico",
        description: "Para profissionais autônomos e consultórios pequenos.",
        price: billingPeriod === 'monthly' ? "R$199" : "R$1.990",
        period: billingPeriod === 'monthly' ? "/mês" : "/ano",
        features: [
          "Até 1 profissional",
          "Agenda inteligente",
          "Prontuário eletrônico básico",
          "Faturamento particular",
          "Suporte por e-mail",
          "Integrações limitadas",
          "1GB de armazenamento"
        ],
        cta: "Começar Gratuitamente",
        ctaLink: "/contato",
        highlight: false
      },
      {
        name: "Pro",
        description: "Ideal para clínicas em crescimento e múltiplos profissionais.",
        price: billingPeriod === 'monthly' ? "R$399" : "R$3.990",
        period: billingPeriod === 'monthly' ? "/mês" : "/ano",
        features: [
          "Até 5 profissionais",
          "Agenda com confirmação automática",
          "Prontuário eletrônico completo",
          "Faturamento particular e convênios",
          "Gestão financeira",
          "Suporte prioritário",
          "10GB de armazenamento",
          "Integrações com WhatsApp",
          "Painéis e relatórios"
        ],
        cta: "Solicitar Demonstração",
        ctaLink: "/contato#demo",
        highlight: true,
        badge: "Mais popular"
      },
      {
        name: "Enterprise",
        description: "Para clínicas e hospitais com necessidades avançadas.",
        price: "Personalizado",
        period: "",
        features: [
          "Profissionais ilimitados",
          "Agenda com recursos personalizáveis",
          "Prontuário eletrônico avançado",
          "Faturamento completo",
          "Gestão financeira avançada",
          "Suporte 24/7 dedicado",
          "Armazenamento ilimitado",
          "Integrações personalizadas",
          "Painéis personalizados",
          "SLA garantido",
          "Ambiente dedicado"
        ],
        cta: "Falar com Consultor",
        ctaLink: "/contato",
        highlight: false
      }
    ],
    'vion-ia': [
      {
        name: "Starter",
        description: "Para clínicas menores iniciando na automação.",
        price: billingPeriod === 'monthly' ? "R$249" : "R$2.490",
        period: billingPeriod === 'monthly' ? "/mês" : "/ano",
        features: [
          "Até 500 conversas/mês",
          "Chatbot com IA",
          "Integração WhatsApp",
          "Painel de análise básico",
          "Suporte por e-mail",
          "1 número de WhatsApp"
        ],
        cta: "Começar Agora",
        ctaLink: "/contato",
        highlight: false
      },
      {
        name: "Growth",
        description: "Para clínicas em crescimento que precisam escalar o atendimento.",
        price: billingPeriod === 'monthly' ? "R$499" : "R$4.990",
        period: billingPeriod === 'monthly' ? "/mês" : "/ano",
        features: [
          "Até 2.000 conversas/mês",
          "Chatbot com IA avançada",
          "Integração WhatsApp e site",
          "Integração com agendamento",
          "Painel de análise completo",
          "Suporte prioritário",
          "Até 3 números de WhatsApp"
        ],
        cta: "Solicitar Demonstração",
        ctaLink: "/contato#demo",
        highlight: true,
        badge: "Mais popular"
      },
      {
        name: "Scale",
        description: "Para grandes clínicas e hospitais com alto volume de atendimento.",
        price: "Personalizado",
        period: "",
        features: [
          "Conversas ilimitadas",
          "IA personalizada para seu negócio",
          "Integrações avançadas",
          "API dedicada",
          "Dashboards personalizados",
          "Suporte 24/7",
          "WhatsApp Enterprise",
          "SLA garantido"
        ],
        cta: "Falar com Consultor",
        ctaLink: "/contato",
        highlight: false
      }
    ],
    'enterprise': [
      {
        name: "Consultoria",
        description: "Consultoria especializada em tecnologia para saúde.",
        price: "A partir de R$10.000",
        period: "",
        features: [
          "Diagnóstico de sistemas",
          "Mapeamento de processos",
          "Recomendações estratégicas",
          "Plano de implementação",
          "Análise de segurança e LGPD",
          "Consultores especialistas em saúde"
        ],
        cta: "Agendar Reunião",
        ctaLink: "/contato",
        highlight: false
      },
      {
        name: "Desenvolvimento",
        description: "Desenvolvimento de soluções personalizadas.",
        price: "Sob medida",
        period: "",
        features: [
          "Equipe dedicada",
          "Design de solução personalizada",
          "Desenvolvimento ágil",
          "Testes rigorosos",
          "Implementação supervisionada",
          "Documentação completa",
          "Treinamento de equipes"
        ],
        cta: "Iniciar Projeto",
        ctaLink: "/contato",
        highlight: true,
        badge: "Recomendado"
      },
      {
        name: "Parceria",
        description: "Parceria estratégica de longo prazo.",
        price: "Personalizado",
        period: "",
        features: [
          "Roadmap tecnológico dedicado",
          "Inovação contínua",
          "Equipe estendida",
          "Suporte premium",
          "Reuniões estratégicas periódicas",
          "Prioridade em novas features",
          "SLA diferenciado"
        ],
        cta: "Conversar sobre Parceria",
        ctaLink: "/contato",
        highlight: false
      }
    ]
  };

  const tiers = pricingData[product] || [];

  const handleToggleBilling = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef} id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Planos flexíveis para todas as necessidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidades da sua clínica ou operadora.
          </p>

          {/* Toggle para período de cobrança */}
          {(product === 'vion-med' || product === 'vion-ia') && (
            <div className="flex items-center justify-center mt-8">
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Mensal
              </span>
              <button
                onClick={handleToggleBilling}
                className="relative inline-flex h-6 w-12 mx-3 items-center rounded-full border-2 border-transparent bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-pressed={billingPeriod === 'annual'}
              >
                <span className="sr-only">Alternar período de cobrança</span>
                <span
                  className={`${
                    billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
              <span className={`text-sm ${billingPeriod === 'annual' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Anual
                <span className="ml-1 text-primary-600 font-medium">
                  (2 meses grátis)
                </span>
              </span>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden ${
                tier.highlight
                  ? 'border-2 border-primary-500 shadow-lg shadow-primary-100'
                  : 'border border-gray-200 shadow-soft-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {tier.badge}
                </div>
              )}
              
              <div className={`p-6 ${tier.highlight ? 'bg-primary-50' : 'bg-white'}`}>
                <h3 className={`text-2xl font-bold mb-1 ${tier.highlight ? 'text-primary-600' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                
                <Link
                  href={tier.ctaLink}
                  className={`block w-full py-3 px-4 text-center rounded-md font-medium ${
                    tier.highlight
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-white border border-primary-500 text-primary-600 hover:bg-primary-50'
                  } transition-colors`}
                >
                  {tier.cta}
                </Link>
              </div>
              
              <div className="bg-white p-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900 mb-4">O que está incluído:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${tier.highlight ? 'text-primary-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Precisa de um plano personalizado?{' '}
            <Link href="/contato" className="text-primary-600 font-medium hover:underline">
              Entre em contato
            </Link>{' '}
            para uma proposta sob medida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
