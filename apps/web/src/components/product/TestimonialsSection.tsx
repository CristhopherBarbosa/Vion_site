import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  productImage?: string;
  rating: number;
}

const testimonialsData: Record<string, TestimonialProps[]> = {
  'vion-med': [
    {
      quote: "O Vion Med mudou completamente a forma como gerenciamos nossa clínica. Temos muito mais controle sobre agendamentos e menos faltas, além do prontuário ser extremamente intuitivo e completo.",
      author: "Dra. Ana Carolina Mendes",
      role: "Diretora Clínica",
      company: "Clínica Saúde Integrada",
      image: "/images/testimonials/testimonial-med-1.jpg",
      productImage: "/images/products/vion-med/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "Nosso faturamento aumentou 22% após implementarmos o Vion Med. A redução de inadimplência e a otimização do faturamento de convênios fizeram toda diferença para nós.",
      author: "Dr. Ricardo Oliveira",
      role: "Gestor Administrativo",
      company: "Centro Médico São Lucas",
      image: "/images/testimonials/testimonial-med-2.jpg",
      productImage: "/images/products/vion-med/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "A migração para o Vion Med foi muito mais simples do que imaginávamos. A equipe de suporte é excepcional e sempre disponível para resolver qualquer dúvida rapidamente.",
      author: "Carla Soares",
      role: "Secretária Clínica",
      company: "Consultório Dr. Paulo Menezes",
      image: "/images/testimonials/testimonial-med-3.jpg",
      productImage: "/images/products/vion-med/testimonial-3.jpg",
      rating: 4
    }
  ],
  'vion-ia': [
    {
      quote: "O chatbot da Vion.IA gerou um aumento de 35% nos agendamentos online e reduziu drasticamente as ligações para nossa central de atendimento.",
      author: "Marina Costa",
      role: "Gestora de Marketing",
      company: "Hospital Santa Mônica",
      image: "/images/testimonials/testimonial-ia-1.jpg",
      productImage: "/images/products/vion-ia/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "A integração com WhatsApp foi um diferencial incrível. Nossos pacientes podem marcar consultas 24 horas por dia, sem precisar ligar ou acessar o site.",
      author: "João Paulo Ferreira",
      role: "Diretor de Operações",
      company: "Clínica MultEspecialidades",
      image: "/images/testimonials/testimonial-ia-2.jpg",
      productImage: "/images/products/vion-ia/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "O painel de análise de conversas nos permite entender exatamente o que nossos pacientes estão buscando e otimizar nossos serviços com base nesses dados.",
      author: "Dra. Fernanda Lima",
      role: "CEO",
      company: "Rede VitaSaúde",
      image: "/images/testimonials/testimonial-ia-3.jpg",
      productImage: "/images/products/vion-ia/testimonial-3.jpg",
      rating: 5
    }
  ],
  'enterprise': [
    {
      quote: "A solução personalizada da Vion permitiu integrar nossos sistemas legados sem interrupção de serviço, um feito incrível considerando nossa complexidade.",
      author: "Paulo Mendonça",
      role: "CIO",
      company: "Hospital Albert Einstein",
      image: "/images/testimonials/testimonial-enterprise-1.jpg",
      productImage: "/images/products/enterprise/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "A API desenvolvida pela Vion nos permitiu criar uma experiência digital consistente para nossos beneficiários em todos os canais de atendimento.",
      author: "Luciana Martins",
      role: "Diretora de Tecnologia",
      company: "Amil",
      image: "/images/testimonials/testimonial-enterprise-2.jpg",
      productImage: "/images/products/enterprise/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "A segurança e conformidade com LGPD implementada pela Vion em nossa solução personalizada foi fundamental para obtermos as certificações necessárias.",
      author: "Roberto Campos",
      role: "CISO",
      company: "Unimed Nacional",
      image: "/images/testimonials/testimonial-enterprise-3.jpg",
      productImage: "/images/products/enterprise/testimonial-3.jpg",
      rating: 4
    }
  ]
};

interface TestimonialsSectionProps {
  product: 'vion-med' | 'vion-ia' | 'enterprise';
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const testimonials = testimonialsData[product] || [];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de profissionais e clínicas que transformaram seus negócios com nossas soluções.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem do produto em uso */}
          {activeTestimonial.productImage && (
            <motion.div
              key={`image-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image 
                src={activeTestimonial.productImage} 
                alt={`${product} em uso por ${activeTestimonial.company}`} 
                fill
                className="object-cover"
              />
            </motion.div>
          )}
          
          {/* Depoimento */}
          <div>
            <motion.div
              key={`testimonial-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-soft-md border border-gray-100"
            >
              {/* Aspas */}
              <div className="mb-6 text-primary-200">
                <svg width="45" height="36" className="fill-current" viewBox="0 0 45 36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.415.043c6.607 0 11.96 5.338 11.96 11.928 0 6.59-5.353 11.927-11.96 11.927-6.606 0-11.959-5.336-11.959-11.927C1.457 5.38 6.809.043 13.415.043zM0 34.756C2.603 30.67 8.863 27.3 13.415 27.3c-6.606 0-11.959-5.337-11.959-11.928 0-6.59 5.353-11.927 11.96-11.927C20.015 3.446 25.368 8.783 25.368 15.373c0 6.59-5.353 11.927-11.959 11.927-4.552 0-10.812 3.37-13.415 7.456h.006z" />
                </svg>
              </div>
              
              {/* Texto do depoimento */}
              <p className="text-xl text-gray-700 mb-6 italic">
                "{activeTestimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image 
                      src={activeTestimonial.image} 
                      alt={activeTestimonial.author} 
                      width={56} 
                      height={56}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900">{activeTestimonial.author}</h4>
                  <p className="text-sm text-gray-600">{activeTestimonial.role}, {activeTestimonial.company}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < activeTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navegação do carrossel */}
            <div className="flex justify-center mt-8 space-x-2">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                aria-label="Depoimento anterior"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                aria-label="Próximo depoimento"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
