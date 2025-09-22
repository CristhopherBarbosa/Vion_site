import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, linkedin, index }) => {
  const memberRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(memberRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={memberRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-soft-md border border-gray-100"
    >
      <div className="relative h-72 w-full">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover object-center"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-primary-600">{role}</p>
          </div>
          
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800"
              aria-label={`LinkedIn de ${name}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
        
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const executives = [
    {
      name: "Dr. Carlos Silva",
      role: "CEO & Co-Fundador",
      image: "/images/team/ceo.jpg",
      bio: "Ex-consultor da Philips com mais de 20 anos de experiência em TI para saúde. Formado em Engenharia pela USP com MBA pelo Insper.",
      linkedin: "https://linkedin.com/in/carlossilva"
    },
    {
      name: "Dra. Roberta Mendes",
      role: "CTO & Co-Fundadora",
      image: "/images/team/cto.jpg",
      bio: "Especialista em IA e machine learning aplicados à saúde. PhD em Ciência da Computação pela UNICAMP e pós-doutorado pelo MIT.",
      linkedin: "https://linkedin.com/in/robertamendes"
    },
    {
      name: "André Santos",
      role: "COO",
      image: "/images/team/coo.jpg",
      bio: "Líder operacional com ampla experiência em gestão de empresas de tecnologia. MBA em Gestão de Negócios pela FGV.",
      linkedin: "https://linkedin.com/in/andresantos"
    }
  ];
  
  const directors = [
    {
      name: "Juliana Costa",
      role: "Diretora de Produto",
      image: "/images/team/product-director.jpg",
      bio: "Especialista em UX e desenvolvimento de produto com foco no usuário. Mais de 10 anos de experiência em produtos digitais para saúde.",
      linkedin: "https://linkedin.com/in/julianacosta"
    },
    {
      name: "Ricardo Almeida",
      role: "Diretor de Tecnologia",
      image: "/images/team/tech-director.jpg",
      bio: "Arquiteto de software com experiência em sistemas críticos e alta disponibilidade. Especialista em segurança de dados na saúde.",
      linkedin: "https://linkedin.com/in/ricardoalmeida"
    },
    {
      name: "Ana Paula Ferreira",
      role: "Diretora de Marketing",
      image: "/images/team/marketing-director.jpg",
      bio: "Estrategista de marketing digital especializada no setor de saúde. Ampla experiência em gestão de marca e aquisição de clientes.",
      linkedin: "https://linkedin.com/in/anapaulaferreira"
    },
    {
      name: "Marcos Oliveira",
      role: "Diretor Comercial",
      image: "/images/team/sales-director.jpg",
      bio: "Especialista em vendas B2B para o setor de saúde. Mais de 15 anos de experiência em desenvolvimento de negócios.",
      linkedin: "https://linkedin.com/in/marcosoliveira"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Conheça Nosso Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos líderes combinam profunda experiência técnica com paixão por transformar a saúde através da tecnologia.
          </p>
        </motion.div>
        
        {/* Equipe Executiva */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-gray-900"
          >
            Equipe Executiva
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Diretores */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold mb-8 text-gray-900"
          >
            Diretores
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Mensagem sobre a equipe completa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa equipe completa conta com mais de 120 profissionais talentosos e dedicados, incluindo engenheiros de software, 
            especialistas em UX/UI, profissionais de saúde, cientistas de dados e especialistas em suporte ao cliente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
