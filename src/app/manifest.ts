import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balaji Koneti - Machine Learning Engineer | GenAI & RAG',
    short_name: 'Balaji.dev',
    description: 'Machine Learning Engineer (GenAI/RAG) with 6+ years shipping production retrieval & evaluation systems on AWS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/profile.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
