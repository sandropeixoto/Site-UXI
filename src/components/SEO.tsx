import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'UXI Pesquisas — Sistema de Pesquisa Digital & Inteligência de Dados',
  description = 'Revolucionando as Pesquisas Digitais no Brasil com inteligência de dados, geolocalização e amostras representativas para política, opinião pública e mercado.',
  keywords = 'UXI Pesquisas, Pesquisa Digital, Pesquisa Eleitoral, Inteligência de Dados, Simulador Amostral, Pesquisa de Mercado, Amostragem Representativa, Marco Barros',
  canonicalUrl = 'https://uxipesquisas.com.br',
  ogType = 'website',
  ogImage = 'https://nano.net.br/assets/programacao-DzAvORjU.png',
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UXI Pesquisas',
    url: canonicalUrl,
    logo: ogImage,
    description: description,
    founder: {
      '@type': 'Person',
      name: 'Marco Barros',
      jobTitle: 'Sociólogo e Pesquisador',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belém',
      addressRegion: 'PA',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-91-98118-2000',
      contactType: 'customer service',
      email: 'contato@uxipesquisas.com.br',
      availableLanguage: ['Portuguese'],
    },
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0f1e" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="UXI Pesquisas" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};
