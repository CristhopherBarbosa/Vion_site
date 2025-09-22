import React from 'react';
import { ChildrenProps } from '../types';

export interface ContainerProps extends ChildrenProps {
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  centered?: boolean;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  centered = true,
  as: Component = 'div',
  ...props
}) => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  };

  const centeredClasses = centered ? 'mx-auto' : '';

  return (
    <Component
      className={`px-4 ${maxWidthClasses[maxWidth]} ${centeredClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
