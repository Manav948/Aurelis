import { AnnouncementBar, Navbar } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { HomepageSections } from '@/sections/HomepageSections';
import '@/components/Header/header.css';
import '@/sections/Hero/hero.css';
import '@/sections/homepage-sections.css';

export function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main aria-label="Aurelis homepage">
        <Hero />
        <HomepageSections />
      </main>
    </>
  );
}

export default App;
