import { useState, type ReactNode } from 'react';
import {
  about,
  educationAreas,
  dailyRoutine,
  documentation,
  parentsWork,
  principles,
  practices,
  results,
  contacts,
  site,
  yandexMap,
  googleMap,
} from '@/data/content';
import type { Practice } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Flower, Sun, Ball, Kindergarten } from '@/components/Decor';

const card = 'lift bg-[#211c1a] border border-white/10 rounded-3xl';
const muted = 'text-[#f3ede4]/75';

function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h2 className="font-display text-4xl md:text-5xl font-bold">{children}</h2>
    </div>
  );
}

function BulletList({ items, color = '#F08E4C' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className={`flex gap-2.5 leading-relaxed ${muted}`}>
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="paper-texture py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle icon={<Flower className="w-10 h-10" />}>О практике</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed text-[#f3ede4]/90 max-w-3xl">{about.intro}</p>
          <div className="mt-6 space-y-4 max-w-3xl">
            {about.more.map((p) => (
              <p key={p} className={`leading-relaxed ${muted}`}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-7 mt-12">
          {about.goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className={`${card} p-7 md:p-8 h-full`}>
                <span className="font-display text-5xl font-bold text-[#F08E4C]/40 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-extrabold mt-3">{g.title}</h3>
                <p className={`mt-2.5 leading-relaxed ${muted}`}>{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Образовательные области */}
        <Reveal>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-20">{educationAreas.title}</h3>
          <p className={`mt-3 leading-relaxed max-w-3xl ${muted}`}>{educationAreas.text}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {educationAreas.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className={`${card} p-6 h-full`}>
                <h4 className="font-extrabold text-lg text-[#EDC31C]">{a.title}</h4>
                <p className={`mt-2.5 leading-relaxed text-[15px] ${muted}`}>{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Режим дня */}
        <Reveal>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-20">{dailyRoutine.title}</h3>
          <p className={`mt-3 leading-relaxed max-w-3xl ${muted}`}>{dailyRoutine.text}</p>
        </Reveal>
        <div className="mt-8 relative border-l-2 border-[#F08E4C]/40 ml-2 space-y-5">
          {dailyRoutine.items.map((r, i) => (
            <Reveal key={r.time} delay={i * 40}>
              <div className="pl-6 relative">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#F08E4C] border-4 border-[#14110f]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="font-extrabold text-[#EDC31C] sm:w-36 shrink-0">{r.time}</span>
                  <div>
                    <p className="font-extrabold">{r.title}</p>
                    <p className={`text-[15px] leading-relaxed ${muted}`}>{r.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Документация + родители */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <Reveal>
            <div className={`${card} p-7 md:p-8 h-full`}>
              <h3 className="font-display text-3xl font-bold">{documentation.title}</h3>
              <p className={`mt-3 leading-relaxed ${muted}`}>{documentation.text}</p>
              <div className="mt-5">
                <BulletList items={documentation.items} color="#47A0A0" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className={`${card} p-7 md:p-8 h-full`}>
              <h3 className="font-display text-3xl font-bold">{parentsWork.title}</h3>
              <p className={`mt-3 leading-relaxed ${muted}`}>{parentsWork.text}</p>
              <div className="mt-5">
                <BulletList items={parentsWork.items} color="#EEAECC" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Принципы */}
        <Reveal>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-20">{principles.title}</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {principles.items.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 h-full">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#F08E4C]/20 text-[#F08E4C] flex items-center justify-center font-display font-bold">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-[15px] text-[#f3ede4]/85">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Photo ---------- */
function Photo({ p }: { p: Practice }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10] bg-[#1b1613] shadow-xl">
      {failed ? (
        <Kindergarten accent={p.accent} className="absolute inset-0 w-full h-full" />
      ) : (
        <img
          src={p.photo}
          alt={p.photoAlt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pt-10 pb-4">
        <p className="text-sm font-bold text-white/90">{p.placeShort}</p>
      </div>
    </div>
  );
}

/* ---------- Practice section ---------- */
function PracticeBlock({ p, flip }: { p: Practice; flip: boolean }) {
  const bg = `linear-gradient(160deg, ${p.accent}40 0%, #14110f 42%, #14110f 100%)`;
  const label = 'text-white/50 font-bold text-xs uppercase tracking-wider';
  return (
    <section id={p.id} className="py-16 md:py-24" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>
            <div className="md:w-1/2">
              <span className="font-display text-7xl md:text-9xl font-bold leading-none" style={{ color: `${p.accent}66` }}>
                {p.number}
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 leading-tight">{p.title}</h2>
              <p className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-extrabold">{p.period}</p>
              <p className="mt-5 text-lg font-semibold leading-snug text-white/95">{p.place}</p>
              <p className={`mt-4 leading-relaxed ${muted}`}>{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.facts.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full text-sm font-bold border" style={{ borderColor: `${p.chipColor}88`, color: p.chipColor }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Photo p={p} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={`${card} p-7 md:p-9 mt-10`}>
            <h3 className="font-display text-3xl font-bold">О детском саде</h3>
            <div className="mt-4 space-y-4">
              {p.aboutKg.map((t) => (
                <p key={t} className={`leading-relaxed ${muted}`}>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <Reveal>
            <div className={`${card} p-6 md:p-7 h-full`}>
              <h3 className="font-extrabold text-lg flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.chipColor }} />
                Задачи практики
              </h3>
              <BulletList items={p.tasks} color={p.chipColor} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={`${card} p-6 md:p-7 h-full`}>
              <h3 className="font-extrabold text-lg flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.chipColor }} />
                Виды деятельности
              </h3>
              <BulletList items={p.activities} color={p.chipColor} />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className={`${card} p-6 md:p-7 mt-5`}>
            <h3 className="font-extrabold text-lg flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.chipColor }} />
              Чему научила эта практика
            </h3>
            <BulletList items={p.learned} color={p.chipColor} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 rounded-3xl bg-black/40 border border-white/10 p-6 md:p-8">
            <h3 className="font-extrabold text-lg">Информация об учреждении</h3>
            <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[15px]">
              <div>
                <dt className={label}>Адрес</dt>
                <dd className="mt-1">{p.info.address}</dd>
              </div>
              <div>
                <dt className={label}>Телефон</dt>
                <dd className="mt-1 space-y-0.5">
                  {p.info.phones.map((ph) => (
                    <div key={ph}>
                      <a href={`tel:${ph.replace(/[^+\d]/g, '')}`} className="hover:text-[#EDC31C]">
                        {ph}
                      </a>
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className={label}>Часы работы</dt>
                <dd className="mt-1 space-y-0.5">
                  {p.info.hours.map((h) => (
                    <div key={h.days}>
                      {h.days}: <span className="font-bold">{h.time}</span>
                    </div>
                  ))}
                </dd>
              </div>
              {p.info.mail && (
                <div>
                  <dt className={label}>Почта</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${p.info.mail}`} className="underline underline-offset-4 hover:text-[#EDC31C] break-all">
                      {p.info.mail}
                    </a>
                  </dd>
                </div>
              )}
              {p.info.site && (
                <div className="sm:col-span-2">
                  <dt className={label}>Официальный сайт</dt>
                  <dd className="mt-1">
                    <a href={p.info.site} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#EDC31C] break-all">
                      {p.info.site}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={yandexMap(p.info.mapQuery)}
                target="_blank"
                rel="noreferrer"
                className="min-h-[46px] inline-flex items-center px-6 rounded-full bg-gradient-to-r from-[#EDC31C] to-[#F08E4C] text-[#14110f] font-extrabold hover:scale-[1.03] transition-transform"
              >
                Открыть на Яндекс Картах
              </a>
              <a
                href={googleMap(p.info.mapQuery)}
                target="_blank"
                rel="noreferrer"
                className="min-h-[46px] inline-flex items-center px-6 rounded-full border-2 border-white/40 font-extrabold hover:bg-white/10 transition-colors"
              >
                Google Карты
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Practices() {
  return (
    <>
      {practices.map((p, i) => (
        <PracticeBlock key={p.id} p={p} flip={i % 2 === 1} />
      ))}
    </>
  );
}

/* ---------- Results ---------- */
export function Results() {
  return (
    <section id="results" className="paper-texture py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionTitle icon={<Ball className="w-10 h-10" />}>{results.title}</SectionTitle>
          <p className="text-lg md:text-xl leading-relaxed text-[#f3ede4]/90 max-w-3xl">{results.text}</p>
          <div className="mt-6 space-y-4 max-w-3xl">
            {results.more.map((p) => (
              <p key={p} className={`leading-relaxed ${muted}`}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {results.points.map((pt, i) => (
            <Reveal key={pt} delay={i * 90}>
              <div className={`${card} flex items-start gap-4 p-6 h-full`}>
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#6DBA8D]/20 text-[#6DBA8D] flex items-center justify-center font-display text-xl font-bold">
                  ✓
                </span>
                <p className="leading-relaxed text-[#f3ede4]/90 font-semibold pt-1.5">{pt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contacts ---------- */
export function Contacts() {
  const label = 'text-white/50 block text-xs font-bold uppercase tracking-wider';
  return (
    <section id="contacts" className="py-20 md:py-28 bg-[#0e0c0b] text-white relative overflow-hidden">
      <Sun className="absolute -top-8 -right-8 w-32 opacity-20" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Контакты</h2>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-7 md:p-8 mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/50 font-bold text-xs uppercase tracking-widest">Автор портфолио</p>
              <p className="font-display text-3xl font-bold mt-3">{contacts.author}</p>
              <p className="mt-2 text-white/75">{contacts.role}</p>
            </div>
            <div>
              <p className="text-white/50 font-bold text-xs uppercase tracking-widest">Руководитель практики</p>
              <p className="font-display text-2xl font-bold mt-3">{contacts.supervisor}</p>
              <p className="mt-1.5 text-white/75">{contacts.supervisorRole}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {practices.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-7 md:p-8 h-full">
                <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: p.chipColor }}>
                  Практика {Number(p.number)}
                </p>
                <p className="font-display text-2xl font-bold mt-2">{p.placeShort}</p>
                <ul className="mt-5 space-y-4 text-[15px]">
                  <li>
                    <span className={label}>Адрес</span>
                    {p.info.address}
                  </li>
                  <li>
                    <span className={label}>Телефон</span>
                    {p.info.phones.map((ph) => (
                      <a key={ph} href={`tel:${ph.replace(/[^+\d]/g, '')}`} className="block hover:text-[#EDC31C]">
                        {ph}
                      </a>
                    ))}
                  </li>
                  <li>
                    <span className={label}>Часы работы</span>
                    {p.info.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: <b>{h.time}</b>
                      </span>
                    ))}
                  </li>
                  {p.info.mail && (
                    <li>
                      <span className={label}>Почта</span>
                      <a href={`mailto:${p.info.mail}`} className="underline underline-offset-4 hover:text-[#EDC31C] break-all">
                        {p.info.mail}
                      </a>
                    </li>
                  )}
                  {p.info.site && (
                    <li>
                      <span className={label}>Официальный сайт</span>
                      <a href={p.info.site} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#EDC31C] break-all">
                        {p.info.site}
                      </a>
                    </li>
                  )}
                </ul>
                <a
                  href={yandexMap(p.info.mapQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 min-h-[46px] inline-flex items-center px-6 rounded-full bg-gradient-to-r from-[#EDC31C] to-[#F08E4C] text-[#14110f] font-extrabold hover:scale-[1.03] transition-transform"
                >
                  Показать на карте
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-[#090807] text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-bold text-white/80">{site.badge} — электронное портфолио</p>
        <p>
          Создатель: <span className="text-white/90 font-semibold">{contacts.author}</span>
        </p>
      </div>
    </footer>
  );
}
