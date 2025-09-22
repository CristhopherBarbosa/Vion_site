import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/shared/SEO';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Tecnologia Humana para a Saúde',
  description = 'Integração de gestão clínica e IA para revolucionar o atendimento e a eficiência em hospitais e operadoras.',
  keywords = 'saúde, tecnologia, IA, gestão clínica, hospitais, operadoras, prontuário eletrônico',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogType={ogType}
        canonicalUrl={canonicalUrl}
        noindex={noindex}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
