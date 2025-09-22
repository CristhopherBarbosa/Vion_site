import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Tecnologia Humana para a Saúde',
  description = 'Integração de gestão clínica e IA para revolucionar o atendimento e a eficiência em hospitais e operadoras.',
  keywords = 'saúde, tecnologia, IA, gestão clínica, hospitais, operadoras, prontuário eletrônico',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | Vion` : 'Vion - Tecnologia Humana para a Saúde';
  const siteUrl = 'https://vion.tech';
  // Remover a dependência do caminho atual

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Configurações para robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Vion" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Preconectar a domínios de terceiros */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Verificação de proprietário do site */}
      <meta name="google-site-verification" content="google-verification-code" />
    </Head>
  );
};

export default SEO;
