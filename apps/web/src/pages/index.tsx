import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import WhyVionSection from '@/components/home/WhyVionSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import BlogSection from '@/components/home/BlogSection';
import ContactFormSection from '@/components/home/ContactFormSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <WhyVionSection />
      <SolutionsSection />
      <SocialProofSection />
      <BlogSection />
      <ContactFormSection />
    </MainLayout>
  );
}
