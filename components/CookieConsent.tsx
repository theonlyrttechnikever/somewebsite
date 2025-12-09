import React, { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('snekbooru_cookie_consent');
    if (consent !== 'given') {
      // Use a timeout to avoid layout shift on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('snekbooru_cookie_consent', 'given');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <div className={styles.actions}>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;