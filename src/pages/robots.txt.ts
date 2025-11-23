import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `
User-agent: *
Allow: /

Sitemap: https://rohitashvasingh.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
