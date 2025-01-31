import React, { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

const PasswordForm = ({ id, onSuccess }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const password = e.target.password.value;
    
    try {
      // 🔥 MicroCMS から記事データを取得
      const res = await fetch(`https://koki-ozaki.microcms.io/api/v1/blog/${id}`, {
        headers: {
          'X-API-KEY': 'SEXWPb4jckQu58suXnDpkZSa3PPbtIgOrYM9',
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        throw new Error('記事が見つかりません');
      }

      const data = await res.json();

      // 🔥 パスワードチェック
      if (data.pass === password) {
        // ✅ 認証成功 → ローカルストレージに保存してリロード後も認証維持
        localStorage.setItem(`auth_${id}`, 'true');
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        onSuccess();
      } else {
        setError('パスワードが違います');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="password-wall">
      <form onSubmit={handleSubmit}>
        <h2>パスワードを入力してください</h2>
        <input type="password" name="password" required />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? '確認中...' : '確認'}
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
