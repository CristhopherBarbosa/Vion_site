import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 py-4 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQSectionProps {
  product: 'vion-med' | 'vion-ia' | 'enterprise';
}

const FAQSection: React.FC<FAQSectionProps> = ({ product }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: Record<string, { question: string; answer: string }[]> = {
    'vion-med': [
      {
        question: "Como funciona a migração dos dados do meu sistema atual?",
        answer: "Nosso processo de migração é completo e supervisionado por especialistas. Extraímos os dados do seu sistema atual, convertemos para o formato do Vion Med e validamos toda a informação antes de finalizar a migração. Todo o processo é feito com segurança e sigilo, garantindo a integridade das informações dos pacientes."
      },
      {
        question: "O Vion Med é compatível com quais convênios médicos?",
        answer: "O Vion Med é compatível com todos os principais convênios médicos do Brasil, incluindo Unimed, Amil, SulAmérica, Bradesco Saúde, entre outros. Nosso sistema gera guias TISS no padrão CONTISS mais recente e possui integração direta para envio eletrônico com várias operadoras. Verifique com nosso time comercial as integrações específicas disponíveis para sua região."
      },
      {
        question: "É necessário instalar algum software ou o sistema é totalmente online?",
        answer: "O Vion Med é 100% baseado em nuvem, não sendo necessário instalar nenhum software específico no seu computador. Você precisa apenas de um navegador moderno (Chrome, Firefox, Safari ou Edge) e acesso à internet. Para acesso em dispositivos móveis, disponibilizamos aplicativos nativos para iOS e Android que podem ser baixados nas respectivas lojas."
      },
      {
        question: "Como o Vion Med garante a segurança e privacidade dos dados dos pacientes?",
        answer: "A segurança e privacidade dos dados são nossas prioridades. Utilizamos criptografia de ponta a ponta, autenticação em dois fatores, controle granular de permissões por usuário e registros detalhados de auditoria. Nossa infraestrutura está em conformidade com a LGPD, HIPAA e outras regulamentações de segurança de dados médicos. Realizamos auditorias de segurança periódicas e backups automáticos dos dados."
      },
      {
        question: "Posso usar o Vion Med em tablets e smartphones?",
        answer: "Sim! O Vion Med foi desenvolvido com responsividade completa e funciona perfeitamente em tablets e smartphones. Além disso, oferecemos aplicativos nativos para iOS e Android que permitem acesso offline a algumas funcionalidades, como visualização de agenda e informações básicas de pacientes."
      },
      {
        question: "Qual o tempo médio de implementação do sistema?",
        answer: "O tempo de implementação varia conforme o tamanho da clínica e a complexidade da operação. Em média, para clínicas pequenas, o processo completo leva de 1 a 2 semanas. Para clínicas de médio e grande porte, o tempo varia de 3 a 6 semanas. Este período inclui migração de dados, configuração, personalização e treinamento da equipe."
      }
    ],
    'vion-ia': [
      {
        question: "A Vion.IA funciona com qualquer número de WhatsApp?",
        answer: "Sim, a Vion.IA funciona com qualquer número de WhatsApp empresarial. Para volumes maiores, recomendamos a API oficial do WhatsApp Business, com a qual somos parceiros homologados. Nossa equipe pode auxiliar em todo o processo de configuração e homologação junto à Meta."
      },
      {
        question: "É possível personalizar as respostas e fluxos de conversa do chatbot?",
        answer: "Totalmente! A Vion.IA permite personalização completa dos fluxos de conversa, mensagens de resposta e árvores de decisão. Você pode criar fluxos específicos para diferentes necessidades, como agendamento, informações sobre especialidades, verificação de resultados de exames, entre outros. Nossa IA aprende continuamente com as interações para melhorar as respostas."
      },
      {
        question: "Como é feita a integração com sistemas de agendamento existentes?",
        answer: "A Vion.IA possui conectores prontos para os principais sistemas de gestão médica do mercado, incluindo o próprio Vion Med. Para outros sistemas, utilizamos nossa API robusta ou desenvolvemos integrações específicas. A integração permite que o chatbot tenha acesso à agenda em tempo real, possibilitando agendamentos, confirmações e reagendamentos automáticos."
      },
      {
        question: "Existe alguma limitação de horário para o funcionamento do chatbot?",
        answer: "Não, a Vion.IA funciona 24 horas por dia, 7 dias por semana, sem interrupções. Você pode configurar mensagens específicas para horários fora do expediente da clínica, mas o atendimento automatizado continua disponível para triagem e captura de dados dos pacientes mesmo durante a noite ou finais de semana."
      },
      {
        question: "Como é feita a transição de um atendimento automatizado para um humano?",
        answer: "O sistema possui detecção inteligente de necessidade de atendimento humano baseada em gatilhos configuráveis, como palavras-chave, sentimentos negativos detectados ou solicitação explícita do paciente. Quando ativado, o sistema notifica a equipe de atendimento e mantém o contexto completo da conversa para que o atendente humano possa continuar de onde o bot parou, sem que o paciente precise repetir informações."
      },
      {
        question: "Quais métricas e relatórios o sistema fornece?",
        answer: "O painel analítico da Vion.IA oferece métricas completas de atendimento, incluindo volume de conversas, taxa de resolução automática, tempo médio de resposta, assuntos mais frequentes, sentimentos detectados, horários de pico, taxa de conversão para agendamentos e muito mais. Todos os dados podem ser exportados e filtrados por período, canal de atendimento e operador."
      }
    ],
    'enterprise': [
      {
        question: "Como funciona o processo de desenvolvimento de uma solução personalizada?",
        answer: "Nosso processo de desenvolvimento segue metodologia ágil e começa com um diagnóstico completo das necessidades e desafios específicos da sua operação. Elaboramos então um plano detalhado com sprints de desenvolvimento, validações periódicas e entregas incrementais. Todo o processo é transparente, com reuniões regulares de acompanhamento e um portal de projeto exclusivo para sua equipe."
      },
      {
        question: "A Vion oferece integração com sistemas legados ou proprietários?",
        answer: "Sim, somos especialistas em integração com sistemas legados e proprietários do setor de saúde. Utilizamos diversas abordagens, desde APIs REST até conectores específicos para sistemas antigos. Nossa equipe técnica possui vasta experiência em integração com os principais sistemas utilizados por operadoras e hospitais no Brasil."
      },
      {
        question: "É possível hospedar as soluções Vion Enterprise em ambiente próprio?",
        answer: "Sim, oferecemos flexibilidade de implantação. As soluções Vion Enterprise podem ser hospedadas em nuvem pública (AWS, Azure, GCP), em nuvem privada ou em infraestrutura on-premise do cliente. Nossa equipe trabalha em conjunto com seu time de TI para garantir a melhor arquitetura considerando requisitos de segurança, desempenho e conformidade."
      },
      {
        question: "Qual o nível de conformidade com LGPD e outras regulamentações do setor de saúde?",
        answer: "Todas as nossas soluções são desenvolvidas com conformidade regulatória em seu núcleo. Seguimos os princípios de Privacy by Design e Security by Design. Implementamos todos os requisitos técnicos da LGPD, incluindo criptografia, minimização de dados, controles de acesso, auditorias e mecanismos para atender a direitos dos titulares. Além disso, atendemos requisitos específicos do setor de saúde como HIPAA, SBIS/CFM e outras normas aplicáveis."
      },
      {
        question: "Quais tipos de SLA a Vion oferece para projetos Enterprise?",
        answer: "Nossos SLAs para projetos Enterprise são customizados de acordo com a criticidade dos sistemas e necessidades do cliente. Tipicamente oferecemos garantias de uptime de 99,9%, tempo de resposta para incidentes críticos em até 15 minutos, resolução de problemas críticos em até 4 horas, e suporte 24/7. Todos os detalhes são formalizados em contrato e monitorados por meio de ferramentas especializadas."
      },
      {
        question: "A Vion oferece suporte pós-implementação e evolução contínua do sistema?",
        answer: "Absolutamente. Nosso modelo de parceria prevê não apenas o suporte técnico pós-implementação, mas também a evolução contínua da solução. Estabelecemos comitês regulares de inovação com nossos clientes Enterprise para identificar oportunidades de melhorias, novas funcionalidades e otimizações. Trabalhamos com roadmaps de desenvolvimento de médio e longo prazo alinhados com seus objetivos estratégicos."
      }
    ]
  };

  const faqs = faqData[product] || [];

  return (
    <section className="py-16 bg-white" ref={sectionRef} id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respostas para as dúvidas mais comuns sobre o {product === 'vion-med' ? 'Vion Med' : product === 'vion-ia' ? 'Vion.IA' : 'Vion Enterprise'}.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Ainda tem dúvidas? Entre em contato com nossa equipe.
            </p>
            <a 
              href="/contato" 
              className="text-primary-600 font-medium hover:underline mt-1 inline-block"
            >
              Fale conosco
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
