import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Versão estática do header para SSR (sem hooks)
const StaticHeader: React.FC = () => {
  const navLinks = [
    { name: 'Vion Med', href: '/vion-med' },
    { name: 'VionIA Bot', href: '/vionia-bot' },
    { name: 'Casos de Sucesso', href: '/casos-de-sucesso' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo-vionia.svg" alt="VionIA" className="h-10" />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary-600 transition-colors text-gray-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contato#demo"
            className="btn btn-primary shadow-lg shadow-primary-500/20"
          >
            Demonstração Gratuita
          </Link>
        </nav>

        {/* Menu mobile - botão estático */}
        <div className="lg:hidden">
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor"
            strokeWidth="2" 
            fill="none" 
            className="text-gray-800"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
};

// Importação dinâmica do header interativo (só executada no cliente)
const DynamicHeader = dynamic(
  () => import('./HeaderInteractive').catch(() => ({ default: StaticHeader })),
  { ssr: false }
);

// Componente principal que decide qual versão renderizar
const Header: React.FC = () => {
  return <DynamicHeader />;
};

export default Header;
