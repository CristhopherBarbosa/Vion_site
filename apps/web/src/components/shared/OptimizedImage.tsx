import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
}

/**
 * Componente para carregamento otimizado de imagens com foco em Core Web Vitals
 * Melhora o LCP (Largest Contentful Paint) e o CLS (Cumulative Layout Shift)
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 80,
  className = '',
  sizes = '100vw',
  objectFit = 'cover',
  placeholder = 'empty',
  blurDataURL,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Gerar placeholder de baixa qualidade se não for fornecido um blurDataURL
  const defaultBlurDataURL = !blurDataURL && placeholder === 'blur' 
    ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg=='
    : blurDataURL;

  // Marca a imagem como carregada
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Trata erros no carregamento da imagem
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  // Adiciona classe baseada no estado de carregamento para suavizar a transição
  const imageClass = `transition-opacity duration-300 ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  } ${className}`;

  // Configura o estilo de object-fit
  const objectFitStyle = objectFit ? { objectFit } : {};

  // Configurações de imagem baseadas em fill ou width/height
  const imageProps = fill
    ? {
        fill: true,
        sizes,
        style: { ...objectFitStyle },
      }
    : {
        width,
        height,
        style: { ...objectFitStyle },
      };

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {/* Imagem de fallback para casos de erro */}
      {error && (
        <div 
          className={`bg-gray-200 flex items-center justify-center ${
            fill ? 'absolute inset-0' : `w-${width} h-${height}`
          }`}
        >
          <span className="text-gray-400">Imagem não disponível</span>
        </div>
      )}
      
      {/* A imagem otimizada */}
      {!error && (
        <Image
          src={src}
          alt={alt}
          {...imageProps}
          quality={quality}
          priority={priority}
          className={imageClass}
          placeholder={placeholder === 'blur' ? 'blur' : 'empty'}
          blurDataURL={defaultBlurDataURL}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
