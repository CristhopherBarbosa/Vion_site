import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Lista de dispositivos para teste
const devices = [
  { name: 'Mobile S', width: 320, height: 568 },
  { name: 'Mobile M', width: 375, height: 667 },
  { name: 'Mobile L', width: 425, height: 812 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Laptop', width: 1024, height: 768 },
  { name: 'Laptop L', width: 1280, height: 800 },
  { name: 'Desktop 4K', width: 1920, height: 1080 },
];

const ResponsiveTest = () => {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  const [url, setUrl] = useState('/');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  
  // Verifica se estamos em ambiente de desenvolvimento
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
    router.replace('/');
    return null;
  }

  // Calcula as dimensões do iframe com base na orientação
  const iframeWidth = orientation === 'portrait' ? selectedDevice.width : selectedDevice.height;
  const iframeHeight = orientation === 'portrait' ? selectedDevice.height : selectedDevice.width;

  // Função para navegar para a URL inserida
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Adiciona o protocolo se necessário
    let fullUrl = url;
    if (!url.startsWith('http') && !url.startsWith('/')) {
      fullUrl = `/${url}`;
    }
    
    setUrl(fullUrl);
  };

  // Troca a orientação do dispositivo
  const toggleOrientation = () => {
    setOrientation(prev => prev === 'portrait' ? 'landscape' : 'portrait');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Teste de Responsividade - Vion</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      {/* Barra de controles */}
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Teste de Responsividade - Vion</h1>
          
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-grow">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-grow">
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                  <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Digite uma URL para testar"
                    className="form-input w-full rounded-md"
                  />
                </div>
                <button type="submit" className="btn btn-primary self-end">Ir</button>
              </form>
            </div>
            
            <div>
              <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-1">Dispositivo</label>
              <select
                id="device"
                value={JSON.stringify(selectedDevice)}
                onChange={(e) => setSelectedDevice(JSON.parse(e.target.value))}
                className="form-select rounded-md"
              >
                {devices.map((device) => (
                  <option key={device.name} value={JSON.stringify(device)}>
                    {device.name} ({device.width}x{device.height})
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={toggleOrientation}
              className="btn bg-gray-700 text-white hover:bg-gray-800 self-end"
            >
              Alternar Orientação
            </button>
          </div>
        </div>
      </div>
      
      {/* Informações do dispositivo atual */}
      <div className="bg-gray-200 py-2 px-4 border-b border-gray-300">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium">{selectedDevice.name}</span> - 
              {orientation === 'portrait' 
                ? ` ${selectedDevice.width}x${selectedDevice.height}` 
                : ` ${selectedDevice.height}x${selectedDevice.width}`
              } ({orientation})
            </div>
            <div className="text-sm text-gray-600">
              Escala: 1:1
            </div>
          </div>
        </div>
      </div>
      
      {/* Visualização do iframe */}
      <div className="flex justify-center p-8">
        <div 
          className="border-2 border-gray-400 rounded-lg overflow-hidden shadow-lg"
          style={{ 
            width: `${iframeWidth}px`, 
            height: `${iframeHeight}px`,
            transition: 'all 0.3s ease'
          }}
        >
          <iframe
            src={url}
            title="Responsive Test"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>
      
      {/* Legenda de breakpoints */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-3">Breakpoints do Tailwind CSS</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="font-medium">xs (padrão)</div>
              <div className="text-sm text-gray-600">&lt; 640px</div>
            </div>
            <div>
              <div className="font-medium">sm</div>
              <div className="text-sm text-gray-600">≥ 640px</div>
            </div>
            <div>
              <div className="font-medium">md</div>
              <div className="text-sm text-gray-600">≥ 768px</div>
            </div>
            <div>
              <div className="font-medium">lg</div>
              <div className="text-sm text-gray-600">≥ 1024px</div>
            </div>
            <div>
              <div className="font-medium">xl</div>
              <div className="text-sm text-gray-600">≥ 1280px</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;
