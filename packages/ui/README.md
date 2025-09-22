# Vion UI - Biblioteca de Componentes

Biblioteca de componentes reutilizáveis para o site da Vion, desenvolvida com React, TypeScript e Tailwind CSS. Este pacote contém todos os componentes de UI compartilhados entre as diferentes aplicações do monorepo.

## Componentes Disponíveis

### Componentes Base

#### Button
```tsx
import { Button } from 'ui';

<Button 
  variant="primary" 
  size="md"
  onClick={() => console.log('Clicado')}
>
  Clique Aqui
</Button>
```

**Propriedades:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'text'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `isLoading`: boolean
- `icon`: React.ReactNode
- + todas as propriedades nativas do botão HTML

#### Card
```tsx
import { Card } from 'ui';

<Card 
  title="Título do Card"
  description="Descrição do card"
  image="/images/card-image.jpg"
  variant="default"
  footer={<Button>Ação</Button>}
>
  Conteúdo adicional do card
</Card>
```

**Propriedades:**
- `variant`: 'default' | 'highlight' | 'feature'
- `title`: string
- `description`: string
- `image`: string
- `imageAlt`: string
- `footer`: React.ReactNode
- `hoverEffect`: boolean

#### Section
```tsx
import { Section } from 'ui';

<Section 
  variant="default"
  spacing="lg"
  fullWidth={false}
>
  Conteúdo da seção
</Section>
```

**Propriedades:**
- `variant`: 'default' | 'alternate' | 'dark'
- `as`: React.ElementType
- `fullWidth`: boolean
- `spacing`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `containerClassName`: string

#### Container
```tsx
import { Container } from 'ui';

<Container 
  maxWidth="xl" 
  centered={true}
>
  Conteúdo do container
</Container>
```

**Propriedades:**
- `maxWidth`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
- `centered`: boolean
- `as`: React.ElementType

### Layouts

#### SectionLayout
```tsx
import { SectionLayout } from 'ui';

<SectionLayout 
  title="Título da Seção"
  subtitle="Subtítulo da seção com mais detalhes"
  align="center"
>
  Conteúdo da seção
</SectionLayout>
```

**Propriedades:**
- `title`: string
- `subtitle`: string
- `align`: 'left' | 'center' | 'right'
- `titleAs`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `titleClassName`: string
- `subtitleClassName`: string
- `contentClassName`: string

### Hooks

#### useIntersection
Hook para detectar quando um elemento está visível na viewport, útil para animações e lazy loading.

```tsx
import { useIntersectionObserver } from 'ui';

const MyComponent = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { 
    threshold: 0.5,
    once: true 
  });
  
  return (
    <div ref={ref}>
      {isInView ? 'Elemento visível' : 'Elemento não visível'}
    </div>
  );
};
```

**Opções:**
- `threshold`: number | number[]
- `rootMargin`: string
- `root`: Element | null
- `once`: boolean

## Guia de Uso

### Instalação

O pacote UI já está instalado como dependência interna no monorepo. Se você estiver desenvolvendo um novo app no monorepo, adicione-o como dependência:

```json
"dependencies": {
  "ui": "workspace:*"
}
```

### Uso Básico

```tsx
// Em seu componente React
import { Button, Card, Section } from 'ui';

const MyComponent = () => {
  return (
    <Section variant="alternate" spacing="lg">
      <Card title="Meu Cartão">
        Conteúdo do cartão
        <Button variant="primary">Clique Aqui</Button>
      </Card>
    </Section>
  );
};
```

### Uso com TypeScript

O pacote UI exporta todas as interfaces de tipos necessárias:

```tsx
import { Button, ButtonProps } from 'ui';

// Você pode usar ButtonProps como tipo
const CustomButton = (props: ButtonProps) => {
  return <Button {...props} className="custom-class" />;
};
```

## Desenvolvimento de Novos Componentes

Para adicionar novos componentes ao pacote UI:

1. Crie o componente dentro da pasta `src/components/`
2. Exporte o componente no arquivo `index.tsx` principal
3. Adicione tipos TypeScript adequados
4. Documente o componente neste README

## Princípios de Design

Os componentes seguem princípios consistentes:

- **Acessibilidade**: Todos os componentes são acessíveis seguindo as diretrizes WCAG
- **Responsividade**: Funcionam em todos os tamanhos de tela
- **Consistência**: Uso consistente de cores, espaçamento e tipografia
- **Composição**: Componentes projetados para serem combinados e reutilizados
- **Performance**: Otimizados para minimizar re-renderizações
