import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balaji Koneti - AI/ML Engineer Portfolio',
    short_name: 'Balaji.dev',
    description: 'AI/ML Engineer with expertise in Python, Machine Learning, and Large Language Models',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/profile.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
