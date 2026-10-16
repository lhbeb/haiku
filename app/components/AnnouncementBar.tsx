'use client';

import { useEffect, useState } from 'react';

const messages = [
  <>Haikou · Tel Aviv</>,
  <>Chinese production, Israeli engineering roots</>,
  <a href="tel:+8617198736140">Contact +86 17198736140</a>,
];

export default function AnnouncementBar() {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsVisible(false), 2400);
    const nextTimer = window.setTimeout(() => {
      setActiveMessage((current) => (current + 1) % messages.length);
      setIsVisible(true);
    }, 3000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(nextTimer);
    };
  }, [activeMessage]);

  return (
    <div className="announcement" aria-label="Company announcements">
      <div className={`announcement-message ${isVisible ? 'is-visible' : 'is-hidden'}`}>
        {messages[activeMessage]}
      </div>
    </div>
  );
}
