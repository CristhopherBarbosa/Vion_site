import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  category: string;
  tags: string[];
  isFeatured?: boolean;
};

interface FeaturedPostCardProps {
  post: BlogPost;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  // Mapeamento de categorias para cores
  const categoryColors: Record<string, string> = {
    'tecnologia': 'bg-blue-100 text-blue-800',
    'gestão': 'bg-green-100 text-green-800',
    'compliance': 'bg-purple-100 text-purple-800',
    'marketing': 'bg-orange-100 text-orange-800'
  };

  // Cor padrão se a categoria não estiver no mapeamento
  const categoryColor = categoryColors[post.category] || 'bg-gray-100 text-gray-800';

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-soft-md border border-gray-100 h-full flex flex-col hover:shadow-soft-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <div className="mb-3">
                <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${categoryColor} capitalize`}>
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors">
                {post.title}
              </h3>
              <div className="text-white/80 text-sm">
                {post.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6 flex-grow">
          {post.excerpt.length > 150 ? `${post.excerpt.substring(0, 150)}...` : post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-600">{post.author.role}</p>
            </div>
          </div>
          
          <Link href={`/blog/${post.slug}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
            Ler mais
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
