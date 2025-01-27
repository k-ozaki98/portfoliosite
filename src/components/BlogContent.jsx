import React, { useState } from 'react';
import PasswordForm from './PasswordForm';

const BlogContent = ({ blog }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (blog.pass && !isAuthenticated) {
    return <PasswordForm id={blog.id} onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.body }} />;
};

export default BlogContent;