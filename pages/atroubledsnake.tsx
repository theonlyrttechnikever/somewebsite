import React, { useState, useEffect } from "react";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [polandTime, setPolandTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setPolandTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/atroubledsnake/background.png" alt="Background" className={styles.bgImage} />
      </div>

      <div className={styles.content}>
        <div className={styles.profileSection}>
          <img src="/atroubledsnake/profile.png" alt="atroubledsnake" className={styles.profileImage} />
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>atroubledsnake</h1>
            <p className={styles.role}>Full-Stack Developer & Creator</p>
            <p className={styles.bio}>
              Polish 🇵🇱 | he/him | Discord: atroubledsnake -  DMs: <strong style={{color: 'red',}}>CLOSED</strong>
            </p>
            <p className={styles.bio}>I like beer ;P | Commissions unavailable</p>
            {polandTime && <p className={styles.bio}>Local Time: {polandTime}</p>}
          </div>
        </div>

        <div className={styles.linksSection}>
          <a href="https://github.com/atroubledsnake" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.linkIcon}>GH</div>
            <div className={styles.linkInfo}>
              <h3>GitHub</h3>
              <p>View my projects</p>
            </div>
          </a>

          <a href="https://discord.gg/BqNxn7ftqn" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <div className={styles.linkIcon}>DC</div>
            <div className={styles.linkInfo}>
              <h3>Discord</h3>
              <p>Join community</p>
            </div>
          </a>

          <a href="/" className={styles.linkCard}>
            <div className={styles.linkIcon}>SB</div>
            <div className={styles.linkInfo}>
              <h3>Snekbooru</h3>
              <p>Main project</p>
            </div>
          </a>

          <a href="" className={styles.linkCard}>
            <div className={styles.linkIcon}>VL</div>
            <div className={styles.linkInfo}>
              <h3>Virelia</h3>
              <p>Side project (coming soon!)</p>
            </div>
          </a>
        </div>

        <div className={styles.aboutSection}>
          <h2>ABOUT</h2>
          <p>
            Full-stack developer focused on not being a bitch.
            Creator of <strong>Snekbooru</strong>, a next-gen booru browser with a ui that ain't from 'nam.
          </p>
          <p>
            Uhh, I hope you enjoy my app ig, and have a nice day. If you're here that means you prolly also hate to pay for shit, so don't, it's free. ;P
          </p>
        </div>

        <div className={styles.skillsSection}>
          <h2>SKILLS</h2>
          <div className={styles.skillsList}>
            <span className={styles.skill}>Rust</span>
            <span className={styles.skill}>Next.js/React</span>
            <span className={styles.skill}>Python</span>
            <span className={styles.skill}>C/C++</span>
            <span className={styles.skill}>C#</span>
            <span className={styles.skill}>JS/TS</span>
            <span className={styles.skill}>Lua</span>
            <span className={styles.skill}>ASM AT&T/NASM</span>
            <span className={styles.skill}>MySQL/PostgreSQL</span>
          </div>
        </div>

        <div className={styles.footer}>
          <p>© 2025 atroubledsnake. All rights reserved.</p>
          <a href="/">Back to Snekbooru</a>
        </div>
      </div>
    </div>
  );
}
