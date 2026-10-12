import { ChevronDown } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="header-container announcement-bar__inner">
        <p className="announcement-bar__copy">
          <span className="announcement-bar__spark" aria-hidden="true">✳</span>
          Complimentary worldwide express delivery on flagship orders
        </p>
        <button className="announcement-bar__locale" type="button" aria-label="Currency and language: US dollars, English">
          <span>$ USD</span><span className="announcement-bar__locale-divider" /><span>EN</span>
          <ChevronDown size={12} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
