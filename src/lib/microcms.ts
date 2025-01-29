import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY
});

export type Category = {
  id: string;
  name: string;
  slug: string;

}

export type Blog = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
  };
  body: string;
  date: string;
  category: Category[];
  publishedAt: string;
}

// カテゴリー一覧を取得する関数
export const getCategories = async () => {
  const response = await client.get({
    endpoint: 'categories',
  });
  return response.contents as Category[];
};

// カテゴリーごとのブログ記事を取得する関数
export const getBlogsByCategory = async (categoryId: string) => {
  const response = await client.get({
    endpoint: 'blog',
    queries: { 
      filters: `category[equals]${categoryId}`,
      limit: 100 
    }
  });
  return response.contents as Blog[];
};


// lib/microcms.ts
export const getBlogs = async (queries?: {
  limit?: number;
  offset?: number;
  category?: string;
}) => {
  // クエリパラメータを明示的に文字列に変換
  const params = {
      orders: '-publishedAt',
      limit: String(queries?.limit || 10),
      offset: String(queries?.offset || 0),
  };

  const response = await client.get({
      endpoint: 'blog',
      queries: params
  });

  return {
      contents: response.contents,
      totalCount: response.totalCount
  };
};

