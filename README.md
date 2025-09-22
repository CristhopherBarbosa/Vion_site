# Vion - Site Unificado

Site institucional unificado para a marca Vion, integrando Vion Med e Vion.IA em uma única presença digital. Desenvolvido com foco em alto desempenho, SEO otimizado e experiência de usuário excepcional.

## 🚀 Tecnologias

- **Next.js 14**: Framework React com otimizações de performance
- **React 18**: Biblioteca para construção de interfaces
- **TypeScript**: Tipagem estática para código mais seguro
- **Tailwind CSS**: Estilização utilitária e responsiva
- **Framer Motion**: Animações suaves
- **Turborepo**: Gerenciamento de monorepo

## 📁 Estrutura do Projeto

O projeto usa uma estrutura de monorepo com Turborepo:

```
site-vion/
├── apps/
│   └── web/                # Aplicação Next.js principal
│       ├── public/         # Arquivos estáticos
│       └── src/
│           ├── components/ # Componentes React
│           ├── hooks/      # React hooks personalizados
│           ├── layouts/    # Layouts reutilizáveis
│           ├── pages/      # Páginas do Next.js
│           └── styles/     # Estilos globais
├── packages/
│   ├── ui/                 # Biblioteca de componentes reutilizáveis
│   ├── tsconfig/          # Configurações TypeScript compartilhadas
│   └── config/            # Configurações compartilhadas
└── instrucoes/            # Documentação e planejamento
```

## 🏗️ Arquitetura

- **Pages Router**: Implementação do Pages Router do Next.js para melhor SEO
- **Design System**: Sistema de design compartilhado entre aplicações
- **Performance**: Otimização de imagens, lazy loading, e outras técnicas para Core Web Vitals
- **SEO**: Meta tags, sitemap.xml e robots.txt configurados para indexação otimizada

## 📋 Páginas Principais

- **Home**: Página inicial com seções de destaque
- **Sobre Nós**: História e valores da empresa
- **Vion Med**: Detalhes do produto de gestão clínica
- **Vion.IA**: Detalhes do produto de inteligência artificial
- **Cases de Sucesso**: Estudos de caso e depoimentos
- **Blog**: Artigos e conteúdo para profissionais de saúde
- **Contato**: Formulário e informações de contato

## 🧩 Componentes

### Componentes Base
- **Button**: Botão com múltiplas variantes e estados
- **Card**: Cartões para exibição de conteúdo
- **Section**: Seções com estilos consistentes
- **Container**: Containers com larguras predefinidas

### Componentes de Layout
- **Header**: Barra de navegação principal
- **Footer**: Rodapé com links e informações
- **MainLayout**: Layout principal usado em todas as páginas

### Componentes Avançados
- **SEO**: Otimização de meta tags
- **LazyLoad**: Carregamento lazy de componentes
- **OptimizedImage**: Componente de imagem otimizado

## 🛠️ Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em desenvolvimento:**
```bash
npm run dev
```

3. **Construir para produção:**
```bash
npm run build
```

4. **Iniciar em modo produção:**
```bash
npm run start
```

## 🧪 Ambiente de Desenvolvimento

Para desenvolvimento, existem ferramentas adicionais:

- **ResponsiveHelper**: Componente para visualizar breakpoints durante desenvolvimento
- **Página de teste responsivo**: Disponível em `/dev/responsive-test` em ambiente de desenvolvimento

## 🔍 SEO & Performance

O projeto inclui várias otimizações:

- **Meta tags** otimizadas para cada página
- **Core Web Vitals** (LCP, FID, CLS) otimizados
- **Imagens** com lazy loading e formatos otimizados
- **sitemap.xml** e **robots.txt** para indexação
- **Web Manifest** para PWA

## 📚 Documentação Adicional

- [Guia de Componentes](./packages/ui/README.md)
- [Plano de Trabalho](./instrucoes/plan-site-vion-unificado.md)

## 📱 Responsividade

O site é totalmente responsivo, com otimizações para:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🔐 Licença

Proprietary - © 2025 Vion
