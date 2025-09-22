import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  logo: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  logo
}) => {
  return (
    <div className="bg-white rounded-lg shadow-soft-md border border-gray-100 p-6 h-full flex flex-col">
      {/* Aspas */}
      <div className="mb-6 text-primary-200">
        <svg width="45" height="36" className="fill-current" viewBox="0 0 45 36" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.415.043c6.607 0 11.96 5.338 11.96 11.928 0 6.59-5.353 11.927-11.96 11.927-6.606 0-11.959-5.336-11.959-11.927C1.457 5.38 6.809.043 13.415.043zM0 34.756C2.603 30.67 8.863 27.3 13.415 27.3c-6.606 0-11.959-5.337-11.959-11.928 0-6.59 5.353-11.927 11.96-11.927C20.015 3.446 25.368 8.783 25.368 15.373c0 6.59-5.353 11.927-11.959 11.927-4.552 0-10.812 3.37-13.415 7.456h.006z" />
        </svg>
      </div>
      
      {/* Texto do depoimento */}
      <p className="text-gray-700 mb-8 flex-grow italic leading-relaxed">
        "{quote}"
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
            <Image
              src={image}
              alt={author}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-600">
              {role}, {company}
            </p>
          </div>
        </div>
        
        <div className="w-12 h-12 relative">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
