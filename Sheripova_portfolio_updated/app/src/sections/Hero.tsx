import { site } from '@/data/content';
import { Cloud, Flower, Bird, Rainbow, Pencil, Ball } from '@/components/Decor';

export default function Hero() {
  return (
    <section id="home" className="relative hero-gradient overflow-hidden min-h-[100svh] flex items-center">
      {/* decorations */}
      <Cloud className="floaty absolute top-[12%] left-[6%] w-28 md:w-44 opacity-80" />
      <Cloud className="floaty absolute top-[22%] right-[8%] w-20 md:w-32 opacity-70" />
      <Bird className="floaty absolute top-[16%] left-[38%] w-10 md:w-14 text-white/80" />
      <Bird className="floaty absolute top-[26%] right-[30%] w-7 md:w-10 text-white/60" />
      <Flower className="floaty absolute bottom-[16%] left-[5%] w-14 md:w-20 hidden sm:block" />
      <Flower className="floaty absolute bottom-[26%] right-[6%] w-10 md:w-16 hidden sm:block" color="#6DBA8D" />
      <Pencil className="floaty absolute bottom-[10%] right-[16%] w-5 md:w-7 hidden md:block" />
      <Ball className="floaty absolute bottom-[8%] left-[18%] w-12 md:w-16 hidden md:block" />
      <Rainbow className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center text-white">
        <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-extrabold tracking-[0.2em] uppercase">
          {site.badge}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mt-6 drop-shadow-md">
          {site.title}
        </h1>
        <p className="font-display text-2xl md:text-4xl mt-6 font-semibold">{site.author}</p>

        <div className="mt-8 flex flex-col items-center gap-3 text-base md:text-lg font-semibold">
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur">{site.group}</span>
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur">{site.ageGroup}</span>
          <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur">
            Руководитель практики: {site.supervisor}
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gradient min-h-[50px] px-8 rounded-full bg-gradient-to-r from-[#EDC31C] to-[#F08E4C] text-[#14110f] font-extrabold shadow-lg hover:scale-[1.03] transition-transform"
          >
            О практике
          </button>
          <button
            onClick={() => document.getElementById('practice-2')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-h-[50px] px-8 rounded-full border-2 border-white/80 font-extrabold hover:bg-white/15 transition-colors"
          >
            Практика № 2 — сад № 421
          </button>
          <button
            onClick={() => document.getElementById('practice-3')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-h-[50px] px-8 rounded-full border-2 border-white/80 font-extrabold hover:bg-white/15 transition-colors"
          >
            Практика № 3 — сад № 122
          </button>
        </div>
      </div>

      {/* wave divider */}
      <svg viewBox="0 0 1440 90" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden>
        <path d="M0,60 C240,10 480,90 720,55 C960,20 1200,80 1440,45 L1440,90 L0,90 Z" fill="#14110f" />
      </svg>
    </section>
  );
}
