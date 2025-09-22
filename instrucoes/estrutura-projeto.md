# Estrutura do Projeto Site Vion

## Visão Geral

Este documento detalha a estrutura completa do projeto monorepo Vion, explicando cada diretório e suas responsabilidades.

## Estrutura Principal

```
site-vion/
├── apps/              # Aplicações independentes do monorepo
│   └── web/           # Aplicação principal Next.js
├── packages/          # Pacotes compartilhados entre aplicações
│   ├── ui/            # Design system e componentes reutilizáveis
│   ├── tsconfig/      # Configurações TypeScript compartilhadas
│   └── config/        # Outras configurações compartilhadas
├── instrucoes/        # Documentação e planejamento
├── package.json       # Configuração principal do monorepo
└── turbo.json         # Configurações do Turborepo
```

## Apps/Web - Estrutura da Aplicação Next.js

```
apps/web/
├── public/            # Arquivos estáticos acessíveis publicamente
│   ├── images/        # Imagens estáticas
│   ├── icons/         # Ícones e favicons
│   ├── robots.txt     # Configuração para crawlers de busca
│   ├── sitemap.xml    # Sitemap para indexação de busca
│   └── site.webmanifest # Configuração para PWA
├── src/               # Código fonte da aplicação
│   ├── components/    # Componentes React específicos da aplicação
│   │   ├── about/     # Componentes da página Sobre
│   │   ├── blog/      # Componentes do Blog
│   │   ├── cases/     # Componentes de Cases de Sucesso
│   │   ├── contact/   # Componentes de Contato
│   │   ├── home/      # Componentes da Homepage
│   │   ├── product/   # Componentes das páginas de produtos
│   │   └── shared/    # Componentes compartilhados
│   ├── hooks/         # React hooks personalizados
│   │   ├── useAnalytics.ts    # Hook para rastreamento de eventos
│   │   └── useResponsive.ts   # Hook para responsividade
│   ├── layouts/       # Layouts reutilizáveis
│   │   └── MainLayout.tsx     # Layout principal do site
│   ├── pages/         # Rotas e páginas do Next.js
│   │   ├── _app.tsx           # Configuração global do App
│   │   ├── _document.tsx      # Configuração do documento HTML
│   │   ├── index.tsx          # Homepage
│   │   ├── sobre.tsx          # Página Sobre Nós
│   │   ├── vion-med.tsx       # Página do Vion Med
│   │   ├── vion-ia.tsx        # Página do Vion.IA
│   │   ├── casos-de-sucesso.tsx  # Página de Cases de Sucesso
│   │   ├── contato.tsx        # Página de Contato
│   │   ├── blog/
│   │   │   ├── index.tsx      # Listagem do Blog
│   │   │   └── [slug].tsx     # Página de artigo individual (dinâmica)
│   │   └── dev/
│   │       └── responsive-test.tsx  # Ferramenta de teste de responsividade
│   └── styles/        # Estilos globais
│       └── globals.css         # Estilos CSS globais com Tailwind
├── next.config.js     # Configuração do Next.js
├── tailwind.config.js # Configuração do Tailwind CSS
├── postcss.config.js  # Configuração do PostCSS
└── tsconfig.json      # Configuração do TypeScript para a aplicação
```

## Pacote UI - Estrutura da Biblioteca de Componentes

```
packages/ui/
├── src/
│   ├── components/    # Componentes base reutilizáveis
│   │   ├── button.tsx     # Botão com variantes
│   │   ├── card.tsx       # Componente de cartão
│   │   ├── container.tsx  # Container responsivo
│   │   └── section.tsx    # Seção com espaçamentos padronizados
│   ├── hooks/        # Hooks reutilizáveis
│   │   └── use-intersection.ts   # Hook de detecção de interseção
│   ├── layouts/      # Layouts reutilizáveis
│   │   └── section-layout.tsx    # Layout de seção com título
│   └── types/        # Tipos TypeScript compartilhados
│       └── index.ts           # Definições de tipos
├── index.tsx         # Ponto de entrada do pacote
└── package.json      # Configuração do pacote
```

## Pacotes de Configuração

```
packages/tsconfig/
├── base.json         # Configuração TypeScript base
├── nextjs.json       # Configuração TypeScript para Next.js
└── react-library.json # Configuração para bibliotecas React

packages/config/
└── package.json      # Configurações compartilhadas
```

## Fluxo de Desenvolvimento

1. **Desenvolvimento de Componentes Base**:
   - Novos componentes reutilizáveis são criados no pacote `ui`
   - Exportados via `index.tsx` para uso nas aplicações

2. **Desenvolvimento de Páginas**:
   - Páginas são criadas em `apps/web/src/pages/`
   - Utilizam o `MainLayout` que inclui Header, Footer e SEO
   - Componentes específicos de página são criados em `apps/web/src/components/`

3. **Responsividade**:
   - Todas as páginas são responsivas utilizando Tailwind CSS
   - O hook `useResponsive` e o componente `ResponsiveHelper` auxiliam no desenvolvimento responsivo
   - A página `/dev/responsive-test` permite testar diferentes tamanhos de tela

4. **Otimização de Performance**:
   - Imagens são otimizadas usando `next/image` e o componente `OptimizedImage`
   - Scripts externos são carregados com estratégias otimizadas usando `ScriptLoader`
   - O componente `LazyLoad` é usado para carregar componentes sob demanda

5. **SEO**:
   - Meta tags são gerenciadas pelo componente `SEO`
   - O site inclui `sitemap.xml` e `robots.txt` para indexação adequada
   - Cada página tem meta tags específicas para compartilhamento social

## Convenções de Código

- **Nomenclatura**:
  - Componentes: PascalCase (ex: `Button.tsx`)
  - Hooks: camelCase com prefixo "use" (ex: `useResponsive.ts`)
  - Funções auxiliares: camelCase

- **Estilos**:
  - Preferencialmente usar classes Tailwind
  - Estilos específicos podem ser criados com CSS Modules

- **TypeScript**:
  - Todas as props devem ser tipadas usando interfaces
  - Exportar tipos/interfaces usados externamente
  - Usar tipagem estrita

- **Componentes**:
  - Componentes funcionais com hooks
  - Props documentadas com comentários JSDoc quando complexas
  - Componentes modulares e reutilizáveis
