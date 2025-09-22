import React from 'react';
import { SectionVariant } from '../types';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  as?: React.ElementType;
  fullWidth?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  as: Component = 'section',
  fullWidth = false,
  spacing = 'lg',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white',
    alternate: 'bg-gray-50',
    dark: 'bg-blue-900 text-white'
  };
  
  const spacingStyles = {
    none: 'py-0',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  return (
    <Component
      className={`${variantStyles[variant]} ${spacingStyles[spacing]} ${className}`}
      {...props}
    >
      <div 
        className={`${fullWidth ? 'w-full' : 'container mx-auto px-4'} ${containerClassName}`}
      >
        {children}
      </div>
    </Component>
  );
};
