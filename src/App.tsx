import { AnnouncementBar, Navbar } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import '@/components/Header/header.css';
import '@/sections/Hero/hero.css';

export function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main aria-label="Aurelis homepage">
        <Hero />
      </main>
    </>
  );
}

export default App;
