import React from 'react';
import { CardVariant } from '../types';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  title,
  description,
  image,
  imageAlt = '',
  footer,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white border border-gray-200 shadow-sm',
    highlight: 'bg-white border border-blue-500 shadow-md',
    feature: 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow'
  };
  
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1' 
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-5">
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        
        {children}
      </div>
      
      {footer && (
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};
