import React, { useState, useEffect } from 'react';
import PasswordForm from './PasswordForm';

const BlogContent = ({ blog }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [processedContent, setProcessedContent] = useState('');

  // 認証状態の確認
  useEffect(() => {
    const isAuth = localStorage.getItem(`auth_${blog.id}`) === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, [blog.id]);

  // 記事内容の処理
  useEffect(() => {
    if (!blog.pass || isAuthenticated) {
      // DOM操作のタイミングを遅らせる
      setTimeout(() => {
        const div = document.createElement('div');
        div.innerHTML = blog.body;

        // 見出し要素を取得して処理
        let headings = Array.from(div.querySelectorAll('h1, h2'));
        console.log('Found headings:', headings.length); // デバッグ用

        headings.forEach((heading, index) => {
          console.log(`Processing heading ${index + 1}:`, heading.textContent); // デバッグ用
          heading.id = `heading-${index + 1}`;
        });

        setProcessedContent(div.innerHTML);
      }, 0);
    }
  }, [blog.body, blog.pass, isAuthenticated]);

  // パスワードフォームの表示
  if (blog.pass && !isAuthenticated) {
    return <PasswordForm id={blog.id} onSuccess={() => setIsAuthenticated(true)} />;
  }

  // 記事の表示
  return (
    <div 
      className="blog-body" 
      dangerouslySetInnerHTML={{ __html: processedContent || blog.body }} 
    />
  );
};

export default BlogContent;