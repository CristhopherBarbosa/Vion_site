import React from 'react';
import Link from 'next/link';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-soft-lg border border-gray-100 p-8 h-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Informações de contato
      </h2>
      
      <div className="space-y-8">
        {/* Email */}
        <div className="flex">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600 mb-1">Para questões gerais:</p>
            <a href="mailto:contato@vion.tech" className="text-primary-600 hover:underline">
              contato@vion.tech
            </a>
            <p className="text-gray-600 mt-2 mb-1">Para suporte técnico:</p>
            <a href="mailto:suporte@vion.tech" className="text-primary-600 hover:underline">
              suporte@vion.tech
            </a>
          </div>
        </div>
        
        {/* Telefone */}
        <div className="flex">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Telefone</h3>
            <p className="text-gray-600 mb-1">Central de Atendimento:</p>
            <a href="tel:+551140000000" className="text-primary-600 hover:underline">
              +55 (11) 4000-0000
            </a>
            <p className="text-gray-600 mt-2 mb-1">Suporte Técnico:</p>
            <a href="tel:+551140000001" className="text-primary-600 hover:underline">
              +55 (11) 4000-0001
            </a>
          </div>
        </div>
        
        {/* Endereço */}
        <div className="flex">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Endereço</h3>
            <p className="text-gray-600">
              Av. Paulista, 1000, Bela Vista<br />
              São Paulo - SP, 01310-100<br />
              Brasil
            </p>
          </div>
        </div>
        
        {/* Horário */}
        <div className="flex">
          <div className="mr-4">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Horário de atendimento</h3>
            <p className="text-gray-600">
              Segunda a Sexta: 9h às 18h<br />
              Sábado e Domingo: Fechado
            </p>
          </div>
        </div>
      </div>
      
      {/* Redes sociais */}
      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Siga-nos nas redes sociais
        </h3>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/vion-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/vion.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/c/VionTech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
