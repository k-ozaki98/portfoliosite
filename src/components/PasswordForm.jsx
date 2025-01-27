// src/components/PasswordForm.jsx
import React, { useState } from 'react';

const PasswordForm = ({ id, onSuccess }) => {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    
    try {
      const res = await fetch('/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
      });
      
      const data = await res.json();
      console.log('Response:', data); // レスポンスの内容を確認
      
      if (res.ok) {
        onSuccess();
      } else {
        setError('パスワードがただしくありません');
      }
    } catch (error) {
      console.error('Error:', error); // エラー内容を確認
      setError('エラーが発生しました');
    }
  };

  return (
    <div className="password-wall">
      <form onSubmit={handleSubmit}>
        <h2>パスワードを入力してください</h2>
        <input type="password" name="password" required />
        {error && <p className="error">{error}</p>}
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default PasswordForm;