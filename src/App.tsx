import { AnnouncementBar, Navbar } from '@/components/Header';
import '@/components/Header/header.css';

export function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="home" className="global-shell-preview" aria-label="Aurelis homepage" />
    </>
  );
}

export default App;
