import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { motion } from 'framer-motion';

// Componentes específicos da página
import BlogPostCard from '@/components/blog/BlogPostCard';
import FeaturedPostCard from '@/components/blog/FeaturedPostCard';
import BlogCategories from '@/components/blog/BlogCategories';
import SearchBar from '@/components/blog/SearchBar';
import Pagination from '@/components/blog/Pagination';

// Tipo para os dados do blog
type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  category: string;
  tags: string[];
  isFeatured?: boolean;
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9;
  
  // Dados simulados do blog
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Como a Inteligência Artificial está revolucionando a telemedicina',
      slug: 'ia-revolucionando-telemedicina',
      excerpt: 'Descubra como os avanços em IA estão permitindo diagnósticos mais precisos e melhorando a experiência do paciente em consultas remotas.',
      image: '/images/blog/telemedicine-ai.jpg',
      date: '15 de Setembro, 2025',
      author: {
        name: 'Dr. Ricardo Almeida',
        image: '/images/authors/ricardo-almeida.jpg',
        role: 'Diretor de Tecnologia'
      },
      category: 'tecnologia',
      tags: ['telemedicina', 'ia', 'saúde digital'],
      isFeatured: true
    },
    {
      id: '2',
      title: 'LGPD na Saúde: O que hospitais precisam saber',
      slug: 'lgpd-saude-hospitais',
      excerpt: 'Um guia completo sobre como implementar as práticas da Lei Geral de Proteção de Dados em instituições de saúde sem comprometer a eficiência.',
      image: '/images/blog/lgpd-health.jpg',
      date: '28 de Agosto, 2025',
      author: {
        name: 'Dra. Ana Paula Ferreira',
        image: '/images/authors/ana-paula.jpg',
        role: 'Especialista em Compliance'
      },
      category: 'compliance',
      tags: ['lgpd', 'privacidade', 'dados de saúde']
    },
    {
      id: '3',
      title: '5 Estratégias para melhorar a gestão financeira de clínicas',
      slug: 'estrategias-gestao-financeira-clinicas',
      excerpt: 'Aprenda como otimizar processos administrativos, reduzir inadimplência e aumentar a lucratividade da sua clínica ou consultório.',
      image: '/images/blog/financial-management.jpg',
      date: '10 de Agosto, 2025',
      author: {
        name: 'Carlos Eduardo Santos',
        image: '/images/authors/carlos-santos.jpg',
        role: 'Consultor Financeiro'
      },
      category: 'gestão',
      tags: ['finanças', 'gestão clínica', 'inadimplência'],
      isFeatured: true
    },
    {
      id: '4',
      title: 'O futuro do prontuário eletrônico com blockchain',
      slug: 'futuro-prontuario-eletronico-blockchain',
      excerpt: 'Como a tecnologia blockchain está sendo utilizada para criar prontuários eletrônicos mais seguros, acessíveis e interoperáveis.',
      image: '/images/blog/blockchain-ehr.jpg',
      date: '05 de Agosto, 2025',
      author: {
        name: 'Dr. Marcos Oliveira',
        image: '/images/authors/marcos-oliveira.jpg',
        role: 'Especialista em Blockchain'
      },
      category: 'tecnologia',
      tags: ['prontuário eletrônico', 'blockchain', 'segurança']
    },
    {
      id: '5',
      title: 'Telemedicina no Brasil: regulamentação e boas práticas',
      slug: 'telemedicina-brasil-regulamentacao',
      excerpt: 'Um panorama da regulamentação da telemedicina no Brasil após 2023 e as melhores práticas para implementação em hospitais e clínicas.',
      image: '/images/blog/telemedicine-regulation.jpg',
      date: '25 de Julho, 2025',
      author: {
        name: 'Dra. Julia Mendes',
        image: '/images/authors/julia-mendes.jpg',
        role: 'Advogada especialista em Saúde'
      },
      category: 'compliance',
      tags: ['telemedicina', 'regulamentação', 'cfm']
    },
    {
      id: '6',
      title: 'NPS na saúde: como medir e melhorar a satisfação dos pacientes',
      slug: 'nps-saude-satisfacao-pacientes',
      excerpt: 'Guia prático sobre como implementar a metodologia NPS para medir e melhorar a satisfação dos pacientes em clínicas e hospitais.',
      image: '/images/blog/patient-satisfaction.jpg',
      date: '15 de Julho, 2025',
      author: {
        name: 'Fernanda Lima',
        image: '/images/authors/fernanda-lima.jpg',
        role: 'Especialista em Experiência do Cliente'
      },
      category: 'gestão',
      tags: ['nps', 'satisfação', 'experiência do paciente'],
      isFeatured: true
    },
    {
      id: '7',
      title: 'Inteligência artificial no diagnóstico médico: benefícios e limitações',
      slug: 'ia-diagnostico-medico',
      excerpt: 'Uma análise dos benefícios e limitações da IA no auxílio ao diagnóstico médico, com exemplos práticos e perspectivas futuras.',
      image: '/images/blog/ai-diagnostics.jpg',
      date: '08 de Julho, 2025',
      author: {
        name: 'Dr. Roberto Campos',
        image: '/images/authors/roberto-campos.jpg',
        role: 'Médico e Pesquisador em IA'
      },
      category: 'tecnologia',
      tags: ['ia', 'diagnóstico', 'medicina']
    },
    {
      id: '8',
      title: 'Transformação digital em hospitais: por onde começar',
      slug: 'transformacao-digital-hospitais',
      excerpt: 'Um guia prático sobre como iniciar o processo de transformação digital em hospitais, focando em resultados rápidos e sustentáveis.',
      image: '/images/blog/digital-transformation.jpg',
      date: '01 de Julho, 2025',
      author: {
        name: 'Rafael Costa',
        image: '/images/authors/rafael-costa.jpg',
        role: 'Consultor em Transformação Digital'
      },
      category: 'gestão',
      tags: ['transformação digital', 'hospital', 'tecnologia']
    },
    {
      id: '9',
      title: 'Como reduzir o no-show em clínicas médicas',
      slug: 'reduzir-no-show-clinicas',
      excerpt: 'Estratégias eficientes para reduzir as faltas de pacientes em consultas, aumentando a produtividade e rentabilidade da clínica.',
      image: '/images/blog/no-show.jpg',
      date: '25 de Junho, 2025',
      author: {
        name: 'Luiza Souza',
        image: '/images/authors/luiza-souza.jpg',
        role: 'Gestora de Operações Clínicas'
      },
      category: 'gestão',
      tags: ['no-show', 'agendamento', 'produtividade']
    },
    {
      id: '10',
      title: 'Segurança da informação em clínicas e hospitais: riscos e soluções',
      slug: 'seguranca-informacao-clinicas-hospitais',
      excerpt: 'Os principais riscos de segurança da informação em ambientes de saúde e como implementar soluções eficazes para proteger dados sensíveis.',
      image: '/images/blog/cybersecurity-healthcare.jpg',
      date: '18 de Junho, 2025',
      author: {
        name: 'André Santos',
        image: '/images/authors/andre-santos.jpg',
        role: 'Especialista em Segurança da Informação'
      },
      category: 'tecnologia',
      tags: ['segurança', 'dados', 'cybersecurity']
    },
    {
      id: '11',
      title: 'Integração de sistemas de saúde: desafios e soluções',
      slug: 'integracao-sistemas-saude',
      excerpt: 'Uma análise dos principais desafios na integração de sistemas de saúde e soluções práticas para garantir a interoperabilidade.',
      image: '/images/blog/systems-integration.jpg',
      date: '10 de Junho, 2025',
      author: {
        name: 'Paulo Martins',
        image: '/images/authors/paulo-martins.jpg',
        role: 'Arquiteto de Sistemas'
      },
      category: 'tecnologia',
      tags: ['integração', 'interoperabilidade', 'sistemas']
    },
    {
      id: '12',
      title: 'Marketing digital para clínicas e hospitais',
      slug: 'marketing-digital-clinicas-hospitais',
      excerpt: 'Estratégias de marketing digital específicas para o setor de saúde, respeitando aspectos éticos e regulamentações.',
      image: '/images/blog/healthcare-marketing.jpg',
      date: '01 de Junho, 2025',
      author: {
        name: 'Mariana Costa',
        image: '/images/authors/mariana-costa.jpg',
        role: 'Especialista em Marketing para Saúde'
      },
      category: 'marketing',
      tags: ['marketing digital', 'aquisição de pacientes', 'branding']
    }
  ];

  // Categorias únicas do blog
  const categories = ['todos', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Posts em destaque
  const featuredPosts = blogPosts.filter(post => post.isFeatured);

  // Filtragem de posts com base na categoria e busca
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Paginação
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Manipuladores de eventos
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll para o topo quando mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainLayout
      title="Blog - Conteúdo para profissionais de saúde"
      description="Artigos, guias e insights para ajudar você a ficar atualizado e gerenciar melhor sua clínica ou operadora de saúde."
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
              Conteúdo para profissionais de saúde
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-700 mb-8"
            >
              Artigos, guias e insights para ajudar você a ficar atualizado e gerenciar melhor sua clínica ou operadora.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <SearchBar onSearch={handleSearch} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !searchQuery && activeCategory === 'todos' && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Artigos em Destaque</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeaturedPostCard post={post} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Categorias</h3>
                <BlogCategories 
                  categories={categories} 
                  activeCategory={activeCategory} 
                  onCategoryChange={handleCategoryChange} 
                />
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-soft-md border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Receba novos artigos e conteúdos exclusivos diretamente no seu e-mail.
                  </p>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      className="form-input w-full mb-3"
                    />
                    <button className="btn btn-primary w-full">
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {searchQuery && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Resultados para "{searchQuery}"
                  </h2>
                  <p className="text-gray-600">
                    Encontramos {filteredPosts.length} artigos
                  </p>
                </div>
              )}
              
              {activeCategory !== 'todos' && !searchQuery && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 capitalize">
                    {activeCategory}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPosts.length} artigos nesta categoria
                  </p>
                </div>
              )}
              
              {currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <BlogPostCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-soft-sm">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tente ajustar sua busca ou explorar outras categorias.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveCategory('todos');
                      setSearchQuery('');
                    }} 
                    className="text-primary-600 font-medium hover:text-primary-700"
                  >
                    Ver todos os artigos
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="mt-12">
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transforme sua gestão com as soluções Vion
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Descubra como nossas tecnologias podem otimizar processos, reduzir custos e melhorar a experiência do paciente.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contato#demo" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 py-3 px-8 text-lg"
            >
              Solicitar Demonstração
            </a>
            <a 
              href="/contato" 
              className="btn bg-primary-500 hover:bg-primary-400 text-white border border-white py-3 px-8 text-lg"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
