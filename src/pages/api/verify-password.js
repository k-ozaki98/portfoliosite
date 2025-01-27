import { client } from "../../lib/microcms";

// src/pages/api/verify-password.js
export const POST = async ({ request }) => {  // POSTを大文字に、アロー関数に変更
  const { id, password } = await request.json();
  
  try {
    const blog = await client.get({
      endpoint: 'blog',
      contentId: id
    });
    
    return new Response(JSON.stringify({ 
      success: blog.pass === password 
    }), {
      status: blog.pass === password ? 200 : 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};