import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
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
      message: 'Sua mensagem foi enviada com sucesso! Nossa equipe entrará em contato em breve.'
    });
    
    // Reset do formulário após o envio bem-sucedido
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Entre em contato
        </h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato com você em até 24 horas úteis.
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
              Empresa / Instituição
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className="form-input w-full rounded-md"
              placeholder="Nome da empresa"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formState.subject}
            onChange={handleChange}
            className="form-select w-full rounded-md"
          >
            <option value="">Selecione uma opção</option>
            <option value="Informações sobre Vion Med">Informações sobre Vion Med</option>
            <option value="Informações sobre Vion.IA">Informações sobre Vion.IA</option>
            <option value="Soluções Enterprise">Soluções Enterprise</option>
            <option value="Suporte técnico">Suporte técnico</option>
            <option value="Comercial">Comercial</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="form-input w-full rounded-md resize-none"
            placeholder="Como podemos ajudar?"
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
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
