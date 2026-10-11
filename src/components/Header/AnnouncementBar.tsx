import { ChevronDown } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="header-container announcement-bar__inner">
        <p className="announcement-bar__copy">
          Announcement copy <span>[TBD]</span>
        </p>

        <button
          className="announcement-bar__locale"
          type="button"
          aria-label="Currency and language: US dollars, English"
          title="Currency and language selector — display placeholder"
        >
          <span aria-hidden="true">$ USD</span>
          <span className="announcement-bar__locale-divider" aria-hidden="true" />
          <span aria-hidden="true">EN</span>
          <ChevronDown size={12} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
