// Hand-drawn style decorative SVG elements

export function Sun({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden>
      <circle cx="50" cy="50" r="18" fill="#EDC31C" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 50 + Math.cos(a) * 26;
        const y1 = 50 + Math.sin(a) * 26;
        const x2 = 50 + Math.cos(a) * 40;
        const y2 = 50 + Math.sin(a) * 40;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EDC31C" strokeWidth="5" strokeLinecap="round" />
        );
      })}
    </svg>
  );
}

export function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" className={className} fill="none" aria-hidden>
      <path
        d="M35 60c-14 0-24-9-24-20 0-10 8-18 18-19C33 11 44 5 56 7c10 1 17 7 21 14 4-3 9-4 14-3 11 2 18 11 17 22 9 1 16 8 16 16 0 2-1 4-2 4H35z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  );
}

export function Flower({ className = '', color = '#EEAECC' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden>
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse key={r} cx="30" cy="16" rx="7" ry="12" fill={color} transform={`rotate(${r} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill="#EDC31C" />
    </svg>
  );
}

export function Bird({ className = '', color = '#242021' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} fill="none" aria-hidden>
      <path d="M4 20 Q16 4 30 18 Q44 4 56 20" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Rainbow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" className={className} fill="none" aria-hidden>
      <path d="M10 105a90 90 0 0 1 180 0" stroke="#F08E4C" strokeWidth="12" strokeLinecap="round" />
      <path d="M28 105a72 72 0 0 1 144 0" stroke="#EDC31C" strokeWidth="12" strokeLinecap="round" />
      <path d="M46 105a54 54 0 0 1 108 0" stroke="#6DBA8D" strokeWidth="12" strokeLinecap="round" />
      <path d="M64 105a36 36 0 0 1 72 0" stroke="#4F86BB" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

export function Pencil({ className = '', color = '#F08E4C' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 80" className={className} fill="none" aria-hidden>
      <rect x="4" y="16" width="16" height="48" rx="3" fill={color} />
      <path d="M4 16 L12 2 L20 16 Z" fill="#F6D8B8" />
      <path d="M9.5 8 L12 2 L14.5 8 Z" fill="#242021" />
      <rect x="4" y="20" width="16" height="4" fill="#00000022" />
    </svg>
  );
}

export function Ball({ className = '', colors = ['#EEAECC', '#4F86BB', '#EDC31C'] }: { className?: string; colors?: string[] }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden>
      <circle cx="30" cy="30" r="26" fill={colors[0]} />
      <path d="M4 30a26 26 0 0 1 52 0" fill={colors[1]} opacity="0.85" />
      <ellipse cx="30" cy="30" rx="26" ry="9" fill={colors[2]} opacity="0.7" />
    </svg>
  );
}

export function Kindergarten({ className = '', accent = '#F08E4C' }: { className?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} fill="none" aria-hidden preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#1b1613" />
      <circle cx="268" cy="44" r="16" fill="#EDC31C" />
      <rect y="158" width="320" height="42" fill="#1f2d22" />
      <polygon points="48,86 160,34 272,86" fill="#3a2a24" />
      <rect x="62" y="86" width="196" height="74" rx="4" fill={accent} opacity="0.92" />
      <rect x="146" y="116" width="28" height="44" rx="3" fill="#14110f" />
      {[84, 112, 196, 224].map((x) => (
        <rect key={x} x={x} y="104" width="20" height="22" rx="2" fill="#F6E7B8" />
      ))}
      <circle cx="160" cy="68" r="8" fill="#F6E7B8" />
      <circle cx="40" cy="150" r="14" fill="#2f5a3b" />
      <rect x="38" y="150" width="4" height="12" fill="#4a3426" />
      <circle cx="290" cy="150" r="12" fill="#2f5a3b" />
      <rect x="288" y="150" width="4" height="12" fill="#4a3426" />
    </svg>
  );
}
