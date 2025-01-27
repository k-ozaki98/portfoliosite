
import { client } from './microcms';

export async function post({ request }) {
  const { id, password } = await request.json();
  
  try {
    const blog = await client.get({
      endpoint: 'blog',
      contentId: id
    });
    
    if (blog.pass === password) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify({ success: false }), {
      status: 401,
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
}