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

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
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
    <div className="bg-white rounded-lg overflow-hidden shadow-soft-md border border-gray-100 h-full flex flex-col hover:shadow-soft-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${categoryColor} capitalize`}>
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 text-gray-500 text-sm">
          {post.date}
        </div>
        
        <Link href={`/blog/${post.slug}`} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
        </p>
        
        <div className="flex items-center mt-auto">
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
      </div>
    </div>
  );
};

export default BlogPostCard;
