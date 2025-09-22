import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Componentes específicos da página
import CaseStudyCard from '@/components/cases/CaseStudyCard';
import TestimonialCard from '@/components/cases/TestimonialCard';
import ResultsFilter from '@/components/cases/ResultsFilter';

const CasesDeSuccessoPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  
  // Lista de cases de sucesso
  const caseStudies = [
    {
      id: 'unimed-bh',
      title: 'Unimed BH',
      category: 'operadora',
      product: 'vion-med',
      shortDescription: 'Redução de 30% em custos operacionais com implementação do Vion Med.',
      results: [
        { label: 'Redução de custos', value: '30%' },
        { label: 'Aumento na eficiência', value: '45%' },
        { label: 'ROI no primeiro ano', value: '3.5x' }
      ],
      image: '/images/cases/unimed-bh.jpg',
      logo: '/images/logos/unimed-bh.svg'
    },
    {
      id: 'hospital-sirio-libanes',
      title: 'Hospital Sírio Libanês',
      category: 'hospital',
      product: 'vion-ia',
      shortDescription: 'Implementação de chatbot reduziu em 65% o tempo de espera para atendimento.',
      results: [
        { label: 'Redução do tempo de espera', value: '65%' },
        { label: 'Conversas automatizadas', value: '78%' },
        { label: 'Satisfação do paciente', value: '4.8/5' }
      ],
      image: '/images/cases/sirio-libanes.jpg',
      logo: '/images/logos/sirio-libanes.svg'
    },
    {
      id: 'amil',
      title: 'Amil',
      category: 'operadora',
      product: 'enterprise',
      shortDescription: 'Plataforma personalizada para integração de sistemas legados e novos.',
      results: [
        { label: 'Sistemas integrados', value: '12' },
        { label: 'Processos automatizados', value: '84%' },
        { label: 'Redução de tickets de suporte', value: '40%' }
      ],
      image: '/images/cases/amil.jpg',
      logo: '/images/logos/amil.svg'
    },
    {
      id: 'clinica-einstein',
      title: 'Clínica Einstein',
      category: 'clinica',
      product: 'vion-med',
      shortDescription: 'Transformação digital completa do fluxo de atendimento médico.',
      results: [
        { label: 'Redução de no-shows', value: '37%' },
        { label: 'Aumento na produtividade', value: '28%' },
        { label: 'Economia anual', value: 'R$ 1.2M' }
      ],
      image: '/images/cases/einstein.jpg',
      logo: '/images/logos/einstein.svg'
    },
    {
      id: 'prevent-senior',
      title: 'Prevent Senior',
      category: 'operadora',
      product: 'vion-ia',
      shortDescription: 'Automação do atendimento ao beneficiário com integração multicanal.',
      results: [
        { label: 'Atendimentos automatizados', value: '85%' },
        { label: 'Aumento na satisfação', value: '32%' },
        { label: 'Redução de custo por interação', value: '58%' }
      ],
      image: '/images/cases/prevent-senior.jpg',
      logo: '/images/logos/prevent-senior.svg'
    },
    {
      id: 'hospital-santa-joana',
      title: 'Hospital Santa Joana',
      category: 'hospital',
      product: 'vion-med',
      shortDescription: 'Implementação de prontuário eletrônico integrado com equipamentos médicos.',
      results: [
        { label: 'Redução de erros médicos', value: '24%' },
        { label: 'Tempo ganho por consulta', value: '12 min' },
        { label: 'Satisfação dos médicos', value: '4.7/5' }
      ],
      image: '/images/cases/santa-joana.jpg',
      logo: '/images/logos/santa-joana.svg'
    }
  ];

  // Filtragem dos cases com base no filtro ativo
  const filteredCases = activeFilter === 'todos' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeFilter || cs.product === activeFilter);

  // Depoimentos em destaque
  const featuredTestimonials = [
    {
      quote: "A implementação da Vion.IA superou nossas expectativas. Conseguimos automatizar 85% dos nossos atendimentos iniciais e nossos pacientes relatam maior satisfação com o processo de agendamento.",
      author: "Dra. Carla Mendes",
      role: "Diretora de Tecnologia",
      company: "Prevent Senior",
      image: "/images/testimonials/carla-mendes.jpg",
      logo: "/images/logos/prevent-senior.svg"
    },
    {
      quote: "O Vion Med transformou completamente nosso fluxo de trabalho. Os médicos conseguem dedicar mais tempo aos pacientes e menos à burocracia, enquanto nossa gestão financeira se tornou muito mais eficiente.",
      author: "Dr. Ricardo Santos",
      role: "Diretor Clínico",
      company: "Hospital Santa Joana",
      image: "/images/testimonials/ricardo-santos.jpg",
      logo: "/images/logos/santa-joana.svg"
    },
    {
      quote: "A solução Enterprise da Vion foi a única capaz de integrar nossos diversos sistemas legados sem interrupção de serviço. O projeto foi entregue no prazo e dentro do orçamento, algo raro em projetos de TI desta complexidade.",
      author: "Paulo Martins",
      role: "CIO",
      company: "Amil",
      image: "/images/testimonials/paulo-martins.jpg",
      logo: "/images/logos/amil.svg"
    }
  ];

  return (
    <MainLayout
      title="Cases de Sucesso"
      description="Conheça histórias reais de empresas que transformaram seu negócio com as soluções da Vion."
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
              Transformando a Saúde com Tecnologia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-700 mb-8"
            >
              Histórias reais de clientes que revolucionaram seus processos, reduziram custos e melhoraram a experiência do paciente com nossas soluções tecnológicas.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {/* Logos dos principais clientes */}
            {['unimed-bh', 'sirio-libanes', 'amil', 'einstein', 'prevent-senior', 'santa-joana'].map((logo) => (
              <div key={logo} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/images/logos/${logo}.svg`}
                  alt={logo.replace('-', ' ')}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ResultsFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseStudyCard 
                  id={caseStudy.id}
                  title={caseStudy.title}
                  category={caseStudy.category}
                  product={caseStudy.product}
                  shortDescription={caseStudy.shortDescription}
                  results={caseStudy.results}
                  image={caseStudy.image}
                  logo={caseStudy.logo}
                />
              </motion.div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-600">Tente ajustar seus filtros para encontrar mais casos de sucesso.</p>
              <button 
                onClick={() => setActiveFilter('todos')} 
                className="mt-4 text-primary-600 font-medium hover:text-primary-700"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos de gestores e profissionais que transformaram suas operações com as soluções Vion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  image={testimonial.image}
                  logo={testimonial.logo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para ser nosso próximo caso de sucesso?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Entre em contato hoje mesmo e descubra como nossas soluções podem transformar sua operação de saúde.
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

export default CasesDeSuccessoPage;
