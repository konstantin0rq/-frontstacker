import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import { About, Practices, Results, Contacts, Footer } from '@/sections/Sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Practices />
        <Results />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
