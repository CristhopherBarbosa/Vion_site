import React from 'react';

export interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  align?: 'left' | 'center' | 'right';
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  contentClassName = '',
  align = 'center',
  titleAs: TitleComponent = 'h2',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className={`mb-10 max-w-3xl ${alignClasses[align]}`}>
          {title && (
            <TitleComponent 
              className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}
            >
              {title}
            </TitleComponent>
          )}
          
          {subtitle && (
            <p 
              className={`text-lg text-gray-600 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={contentClassName}>{children}</div>
    </div>
  );
};
