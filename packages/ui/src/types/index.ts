import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type SectionVariant = 'default' | 'alternate' | 'dark';

export type CardVariant = 'default' | 'highlight' | 'feature';
