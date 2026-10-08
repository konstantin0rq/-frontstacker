import { useEffect, useState } from 'react';
import { nav, site } from '@/data/content';
import { Sun } from './Decor';

export default function Header() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = nav.map((n) => n.id);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#14110f]/92 backdrop-blur shadow-[0_3px_12px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 h-[72px]">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 min-h-[44px] font-extrabold text-lg tracking-tight"
        >
          <Sun className="w-8 h-8 spin-slow" />
          <span className="text-white drop-shadow">{site.badge}</span>
        </button>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-bold transition-colors min-h-[44px] ${
                active === n.id
                  ? 'bg-[#F08E4C] text-[#14110f]'
                  : 'text-white hover:bg-white/15'
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* mobile burger */}
        <button
          aria-label="Меню"
          onClick={() => setOpen(!open)}
          className={`lg:hidden flex flex-col justify-center gap-1.5 w-11 h-11 items-center rounded-full text-white`}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="lg:hidden bg-[#14110f] border-t border-white/10 shadow-lg">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`block w-full text-left px-6 py-3.5 min-h-[48px] font-bold border-b border-white/10 ${
                active === n.id ? 'text-[#F08E4C]' : 'text-white'
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
