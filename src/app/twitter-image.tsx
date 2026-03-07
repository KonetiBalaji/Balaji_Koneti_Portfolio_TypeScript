import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Balaji Koneti - Machine Learning Engineer | GenAI & RAG';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #09090b 0%, #111827 50%, #09090b 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundSize: '60px 60px',
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
          }}
        />

        {/* Availability badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 12px rgba(34,197,94,0.5)',
            }}
          />
          <span style={{ color: '#a1a1aa', fontSize: '16px', fontWeight: 500 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#fafafa',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          Balaji Koneti
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '32px',
          }}
        >
          Machine Learning Engineer | GenAI & RAG
        </div>

        {/* Metrics row */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {[
            { value: '+22%', label: 'Retrieval Relevance' },
            { value: '640ms', label: 'P95 Latency' },
            { value: '-31%', label: 'LLM Cost' },
            { value: '6+', label: 'Years Engineering' },
          ].map((metric) => (
            <div key={metric.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '32px', fontWeight: 800, color: '#fafafa' }}>
                {metric.value}
              </span>
              <span style={{ fontSize: '13px', color: '#71717a', fontWeight: 500 }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['LangChain', 'pgvector', 'FastAPI', 'AWS', 'RAGAS', 'Python'].map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#93c5fd',
                background: 'rgba(59,130,246,0.12)',
                border: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#525252',
            letterSpacing: '-0.5px',
          }}
        >
          balajikoneti.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
