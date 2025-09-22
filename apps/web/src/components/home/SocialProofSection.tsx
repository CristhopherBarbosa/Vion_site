import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// Componente para o carrossel de logos
const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-[scroll_30s_linear_infinite] items-center">
        {/* Duplicamos os logos para criar efeito infinito */}
        {[...Array(2)].map((_, dupeIndex) => (
          <div key={dupeIndex} className="flex shrink-0 items-center justify-around gap-8 md:justify-between">
            {[
              { name: 'Unimed', image: '/images/partners/unimed-logo.svg' },
              { name: 'Amil', image: '/images/partners/amil-logo.svg' },
              { name: 'Prevent Senior', image: '/images/partners/prevent-senior.svg' },
              { name: 'Hospital Sírio Libanês', image: '/images/partners/sirio-libanes.svg' },
              { name: 'Hospital Albert Einstein', image: '/images/partners/einstein.svg' },
              { name: 'Hospital das Clínicas', image: '/images/partners/hc.svg' }
            ].map((client, index) => (
              <div
                key={`${dupeIndex}-${index}`}
                className="mx-8 flex w-[120px] items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente para os depoimentos
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-lg p-6 shadow-soft-md border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={image} alt={author} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
      <div className="relative">
        <svg className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-2.209 0-4 1.791-4 4v12h12v-12h-6c0-1.105 0.895-2 2-2h2v-4h-2c-1.105 0-2-0.895-2-2zM24 8c-2.209 0-4 1.791-4 4v12h12v-12h-6c0-1.105 0.895-2 2-2h2v-4h-2c-1.105 0-2-0.895-2-2z"></path>
        </svg>
        <p className="text-gray-700 pl-4">{quote}</p>
      </div>
    </motion.div>
  );
};

const SocialProofSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "A Vion revolucionou nossa operação. O sistema integrado nos permitiu reduzir custos administrativos em 30% e melhorar significativamente a experiência dos pacientes.",
      author: "Mariana Costa",
      role: "Coordenadora de Operações",
      company: "Hospital São Luiz",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "O VionIA Bot qualificou nossos leads com eficiência impressionante, aumentando nossa taxa de conversão em 45%. A integração com o WhatsApp foi perfeita.",
      author: "Ana Paula Silveira",
      role: "Gerente de Marketing",
      company: "Clínica Integrada",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Como operadora, precisávamos de uma solução que integrasse nossos sistemas legados sem interrupções. A Vion Enterprise entregou isso com excelência e segurança.",
      author: "Carlos Eduardo Santos",
      role: "CTO",
      company: "Amil Assistência Médica",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Quem confia em nós.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parceiros que transformaram seus negócios com nossas soluções tecnológicas para a área da saúde.
          </p>
        </motion.div>

        <LogoCarousel />

        <div className="mt-16 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={testimonial.author}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center bg-blue-50 px-6 py-4 rounded-lg">
            <Image 
              src="/images/badges/lgpd-badge.svg" 
              alt="Conformidade LGPD" 
              width={40} 
              height={40}
              className="mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">Conformidade LGPD</p>
              <p className="text-sm text-gray-600">Proteção de dados garantida</p>
            </div>
          </div>
          
          <div className="flex items-center bg-blue-50 px-6 py-4 rounded-lg">
            <Image 
              src="/images/badges/security-badge.svg" 
              alt="Segurança de Dados" 
              width={40} 
              height={40}
              className="mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">ISO 27001</p>
              <p className="text-sm text-gray-600">Segurança da Informação</p>
            </div>
          </div>

          <div className="flex items-center bg-blue-50 px-6 py-4 rounded-lg">
            <Image 
              src="/images/badges/hipaa-badge.svg" 
              alt="Compatível com HIPAA" 
              width={40} 
              height={40}
              className="mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">Padrões HIPAA</p>
              <p className="text-sm text-gray-600">Privacidade e segurança</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
