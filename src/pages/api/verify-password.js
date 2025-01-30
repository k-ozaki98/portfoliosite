// src/pages/api/verify-password.js
import { client } from "../../lib/microcms";

export const POST = async ({ request }) => {
  try {
    // リクエストヘッダーのチェック
    if (!request.headers.get('Content-Type')?.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Content-Type must be application/json' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // JSONパースを try-catch で囲む
    let id, password;
    try {
      const body = await request.json();
      id = body.id;
      password = body.password;
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON format' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // 必須パラメータのチェック
    if (!id || !password) {
      return new Response(JSON.stringify({ error: 'ID and password are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // 記事を取得
    const blog = await client.get({
      endpoint: 'blog',
      contentId: id
    });

    // パスワードの照合
    const isValid = blog.pass === password;

    return new Response(JSON.stringify({ success: isValid }), {
      status: isValid ? 200 : 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};