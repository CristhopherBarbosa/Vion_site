import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  index: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, image, date, category, slug, index }) => {
  const postRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(postRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={postRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-soft-md border border-gray-100 hover:shadow-soft-lg transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="block relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center mt-auto">
          Ler mais
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const BlogSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Blog posts de exemplo (simulando dados que viriam de uma API ou CMS)
  const blogPosts = [
    {
      title: "Como a Inteligência Artificial está revolucionando a telemedicina",
      excerpt: "Descubra como os avanços em IA estão permitindo diagnósticos mais precisos e melhorando a experiência do paciente em consultas remotas.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "15 de Setembro, 2025",
      category: "Tecnologia",
      slug: "ia-revolucionando-telemedicina"
    },
    {
      title: "LGPD na Saúde: O que hospitais precisam saber",
      excerpt: "Um guia completo sobre como implementar as práticas da Lei Geral de Proteção de Dados em instituições de saúde sem comprometer a eficiência.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "28 de Agosto, 2025",
      category: "Compliance",
      slug: "lgpd-saude-hospitais"
    },
    {
      title: "5 Estratégias para melhorar a gestão financeira de clínicas",
      excerpt: "Aprenda como otimizar processos administrativos, reduzir inadimplência e aumentar a lucratividade da sua clínica ou consultório.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "10 de Agosto, 2025",
      category: "Gestão",
      slug: "estrategias-gestao-financeira-clinicas"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Conteúdo para profissionais de saúde.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos, guias e insights para ajudar você a ficar atualizado e gerenciar melhor sua clínica ou operadora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={post.slug} {...post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/blog" 
            className="btn btn-outline inline-block py-3 px-6"
          >
            Ver Todos os Artigos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
