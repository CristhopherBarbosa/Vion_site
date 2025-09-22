import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderInteractive: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Efeito para detectar scroll e mudar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Links de navegação
  const navLinks = [
    { name: 'Vion Med', href: '/vion-med' },
    { name: 'VionIA Bot', href: '/vionia-bot' },
    { name: 'Casos de Sucesso', href: '/casos-de-sucesso' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  // Animações
  const variants = {
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
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
              className={`text-sm font-medium hover:text-primary-600 transition-colors ${
                router.pathname === link.href ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-gray-700'
              }`}
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

        {/* Menu mobile - botão */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke={isScrolled || isOpen ? "currentColor" : "currentColor"}
            strokeWidth="2" 
            fill="none" 
            className={isOpen ? "text-gray-800" : isScrolled ? "text-gray-800" : "text-gray-700"}
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile - dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      router.pathname === link.href ? 'text-primary-600' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  href="/contato#demo"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 mt-3 text-center btn btn-primary"
                >
                  Demonstração Gratuita
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderInteractive;
