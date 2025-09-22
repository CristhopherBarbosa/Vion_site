import React, { useState } from 'react';

const DemoRequestForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    employees: '',
    product: '',
    bestTime: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Solicitação de demonstração recebida com sucesso! Um especialista entrará em contato para agendar sua demonstração personalizada.'
    });
    
    // Reset do formulário após o envio bem-sucedido
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      employees: '',
      product: '',
      bestTime: '',
      message: ''
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Solicitar demonstração gratuita
        </h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo para agendar uma demonstração personalizada das nossas soluções.
        </p>
      </div>
      
      {formStatus.submitted && (
        <div className={`mb-6 p-4 rounded-md ${
          formStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {formStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail profissional *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa / Instituição *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formState.company}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="Nome da empresa"
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Cargo *
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formState.role}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="Seu cargo na empresa"
            />
          </div>
          
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
              Número de colaboradores
            </label>
            <select
              id="employees"
              name="employees"
              value={formState.employees}
              onChange={handleChange}
              className="form-select w-full rounded-md"
            >
              <option value="">Selecione</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1000+">Mais de 1000</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
              Produto de interesse *
            </label>
            <select
              id="product"
              name="product"
              required
              value={formState.product}
              onChange={handleChange}
              className="form-select w-full rounded-md"
            >
              <option value="">Selecione</option>
              <option value="Vion Med">Vion Med - Gestão Clínica</option>
              <option value="Vion.IA">Vion.IA - Atendimento Inteligente</option>
              <option value="Vion Enterprise">Vion Enterprise - Soluções personalizadas</option>
              <option value="Não tenho certeza">Não tenho certeza / Quero conhecer tudo</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-1">
              Melhor horário para contato
            </label>
            <select
              id="bestTime"
              name="bestTime"
              value={formState.bestTime}
              onChange={handleChange}
              className="form-select w-full rounded-md"
            >
              <option value="">Selecione</option>
              <option value="Manhã">Manhã (8h - 12h)</option>
              <option value="Tarde">Tarde (13h - 18h)</option>
              <option value="Qualquer horário">Qualquer horário comercial</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Informações adicionais
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="form-input w-full rounded-md resize-none"
            placeholder="Conte-nos mais sobre suas necessidades específicas para que possamos personalizar sua demonstração"
          />
        </div>
        
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 mt-4 sm:mt-0">
            Ao enviar, você concorda com nossa{' '}
            <a href="/privacidade" className="text-primary-600 hover:underline">
              Política de Privacidade
            </a>
          </p>
          
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto px-8 py-3"
          >
            Solicitar Demonstração
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoRequestForm;
