// src/components/BlogContent.jsx
import React, { useEffect } from 'react';

const BlogContent = ({ blog }) => {
  useEffect(() => {
    // 見出しにIDを付与する処理
    const content = document.querySelector('.blog-body');
    const headings = content.querySelectorAll('h1, h2');
    
    headings.forEach((heading, index) => {
      heading.id = `heading-${index + 1}`;
    });
  }, []);

  return (
    <div 
      className="blog-body" 
      dangerouslySetInnerHTML={{ __html: blog.body }} 
    />
  );
};

export default BlogContent;