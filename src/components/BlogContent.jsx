import React, { useState, useEffect } from 'react';
import PasswordForm from './PasswordForm';

const BlogContent = ({ blog }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 🔥 ローカルストレージに認証情報があれば、自動ログイン
    const isAuth = localStorage.getItem(`auth_${blog.id}`) === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, [blog.id]);

  // 🔥 記事に `pass` が設定されていて、認証されていなければパスワード入力フォームを表示
  if (blog.pass && !isAuthenticated) {
    return <PasswordForm id={blog.id} onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.body }} />;
};

export default BlogContent;
