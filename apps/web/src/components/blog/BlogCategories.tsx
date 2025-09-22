import React from 'react';

interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-soft-md p-5 border border-gray-100">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-primary-50 text-primary-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              } capitalize`}
              onClick={() => onCategoryChange(category)}
            >
              {category === 'todos' ? 'Todos os artigos' : category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
