import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "./HomePage.module.css";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "WHAT PLATFORMS ARE SUPPORTED?",
      a: "Uhh, Windows 7 and later. Linux is comming soon, hopefully as is android. Uhh when it comes to Apple shit, uhh, whenever I get the money to buy a mac. (So probably never)"
    },
    {
      q: "DO I NEED API KEYS TO USE SNEKBOORU?",
      a: "Nope, Snekbooru works without API keys, for the most part. Some API's are a bih tho and do require a key, so make sure to make a account with them."
    },
    {
      q: "IS MY DATA STORED ON SERVERS?",
      a: "Nope, I don't have money for a server much less for one to run 24/7 and steal your data. (All your data is stored locally on your machine)"
    },
    {
      q: "HOW DO I ADD CUSTOM BOORU SOURCES?",
      a: "In Settings, go to 'Custom Sources'. Click 'New' and use Simple Mode for standard booru sites or Advanced Mode for full API control."
    },
    {
      q: "WHAT VIDEO FORMATS ARE SUPPORTED?",
      a: "If you got VLC Media Player 64-bit, then just about any video format will work. Otherwise, uhh, good luck."
    },
    {
      q: "IS SNEKBOORU FREE TO USE?",
      a: "Yes, Snekbooru is free to use. Duh."
    },
    {
      q: "IS SNEKBOORU OPEN SOURCE?",
      a: "Fuh no."
    },
    {
      q: "CAN I USE SNEKBOORU OFFLINE?",
      a: "Yup, snekbooru works offline too. Most of it at least (use a brain to figure out what does and what doesn't)."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Snekbooru - The Ultimate Anime & Manga Browser</title>
        <meta
          name="description"
          content="Download Snekbooru, the ultimate desktop application for browsing anime and manga from multiple sources. Features advanced search, AI chat, a manga reader, bulk downloads, and more. Free for Windows."
        />
        <meta
          name="keywords"
          content="Snekbooru, anime browser, manga reader, booru, image browser, bulk download, hentai, AI chat, desktop app"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snekbooru.org/" />
        <meta property="og:title" content="Snekbooru - The Ultimate Anime & Manga Browser" />
        <meta property="og:description" content="The ultimate desktop app for browsing anime, manga, and booru sites with powerful features." />
        <meta property="og:image" content="/S.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.snekbooru.org/" />
        <meta property="twitter:title" content="Snekbooru - The Ultimate Anime & Manga Browser" />
        <meta property="twitter:description" content="The ultimate desktop app for browsing anime, manga, and booru sites with powerful features." />
        <meta property="twitter:image" content="/S.png" />
        {/* Add your domain name for the canonical link */}
        {/* Add viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.snekbooru.org/" />
      </Head>
      {/* The max-w-7xl and mx-auto classes constrain the content width and center it */}
      <div className={`${styles.wrapper} max-w-7xl mx-auto`}>
        <header className={styles.header}>
          <img
            src="/logo.png"
            alt="Snekbooru Logo"
            className={styles.logo}
            style={{ marginBottom: "-1rem" }} // Negative margin for the logo
          />
          <h1 className={styles.title}>SNEKBOORU</h1>
          <p className={styles.subtitle}>
            ULTIMATE ANIME & MANGA BROWSER<br />
            <span className={styles.version}>V5.0.8</span>
          </p>
          <div>
            <a
              className={styles.downloadBtn}
              href="#downloads"
              onClick={() => window.scrollTo({ top: (document.querySelector("#download") as HTMLElement).offsetTop || 0, behavior: "smooth" })}
            >
              DOWNLOAD NOW
            </a>
          </div>
          <div className={styles.disclaimer}>
            <strong>⚠️ DISCLAIMERS:</strong>
            <ul className={styles.disclaimerUl}>
              <li className={styles.disclaimerLi}>
                <b>NOT A WRAPPER FOR PYPI <a href="https://pypi.org/project/snakebooru" target="_blank" rel="noopener noreferrer">SNAKEBOORU</a></b>
              </li>
              <li className={styles.disclaimerLi}>
                <b>SOURCE CLOSED PROJECT</b>
              </li>
              <li className={styles.disclaimerLi}>
                <b>ANTIVIRUS MAY FLAG - OBFUSCATION ENABLED</b>
              </li>
            </ul>
          </div>
        </header>

        <main className={styles.main}>
          {/* HERO SECTION */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h2>POWER YOUR BROWSING</h2>
                <p>
                  Snekbooru combines advanced search, AI chat, manga reader, and bulk downloads in one sleek application. Browse anime and manga from 8+ sources simultaneously with zero latency.
                </p>
                <div className={styles.heroCta}>
                  <a href="#download" style={{ background: "#3b82f6", color: "white" }}>DOWNLOAD NOW</a>
                  <a href="#features" style={{ background: "#3b82f6", color: "white"}}>LEARN MORE</a>
                </div>
              </div>
              <div className={styles.heroImage}>
                <img src="/S.png" alt="Snekbooru Hero" className={styles.heroImg} />
              </div>
            </div>
          </section>

          {/* FEATURES GRID */}
          <section className={styles.section} id="features">
            <h2 className={styles.sectionH2}>KEY FEATURES</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>ADVANCED SEARCH</h3>
                <p>Powerful tag-based search engine with intelligent auto-completion, custom blacklist filtering, and multi-source reverse image lookup through SauceNAO, IQDB, and Google Lens integration.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>RICH MEDIA SUPPORT</h3>
                <p>Seamless playback of images, animated GIFs (with WebP optimization), and videos. Full VLC Media Player integration ensures compatibility with virtually all video formats and codecs.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>INTEGRATED MANGA READER</h3>
                <p>Built-in manga reader supporting Nhentai, Mangadex, and other manga sources. Features include page preloading, smooth scrolling, built-in ad-blocker, and reading history tracking.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>SMART FAVORITES</h3>
                <p>Save and organize your favorite posts with custom categories and tags. Get personalized recommendations based on your browsing history and preferences for faster discovery.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>BULK DOWNLOAD</h3>
                <p>Download multiple posts simultaneously with real-time progress tracking, pause/resume capability, and automatic file organization. Supports custom naming patterns and batch operations.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>HENTAI HAVEN TAB</h3>
                <p>Watch hentai and other NSFW content form Hentai Haven in a separate tab. Enjoy a safe and enjoyable experience without any distractions or interruptions, completely ad-free and 100% free.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>AI CHAT ASSISTANT</h3>
                <p>Powered AI assistant with response streaming, multiple concurrent chat tabs, and customizable personality presets. Get instant help with search queries, recommendations, and general questions.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>CUSTOM THEMES (sCSS)</h3>
                <p>Fully customizable appearance using snake CSS (sCSS). Create or download themes from the community. Supports accent colors, layout adjustments, and complete UI overhauls.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>MINIGAMES & ACHIEVEMENTS</h3>
                <p>Interactive minigames including Tag Guesser, Image Scrammbler, and more. Earn achievements, climb leaderboards, and unlock special rewards while having fun with the app.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>PRIVACY & SECURITY</h3>
                <p>Incognito browsing mode leaves no local history. Offline access to cached content. Multilingual support. All data stored locally—we never collect or transmit personal information.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>UNLIMITED CUSTOM SOURCES</h3>
                <p>Add any booru-style website as a custom source. Simple Mode for standard APIs or Advanced Mode for full technical control. Mix and match sources for powerful multi-site searches.</p>
              </div>
            </div>
          </section>

          {/* DOWNLOAD */}
          <section className={styles.section} id="download">
            <h2 className={styles.sectionH2}>DOWNLOAD</h2>
            <p className={styles.sectionP}>
              <b>WINDOWS 7+ (64-BIT) ONLY</b>
            </p>
            <a
              className={styles.downloadBtn}
              href="https://github.com/atroubledsnake/Snekbooru/releases/download/v5.0.8-fix/WIN_Snekbooru_Installer_x64.exe"
              download
            >
              WIN_SNEKBOORU_INSTALLER_X64.EXE
            </a>

            <p className={styles.sectionP} style={{ marginTop: "2.5em" }}>
              <b>MINIMUM REQUIREMENTS:</b><br />
              • Windows 7 or later (64-bit)<br />
              • 2GB RAM (application runs on minimal resources)<br />
              • Internet connection for booru access
            </p>

            <p className={styles.sectionP}>
              <b>RECOMMENDED SPECIFICATIONS:</b><br />
              • Windows 10/11 (64-bit)<br />
              • 4GB RAM (typical usage ~200MB, bulk downloads use more)<br />
              • VLC Media Player 64-bit (for video playback)<br />
              • SSD for faster image loading
            </p>
          </section>

          {/* GET STARTED */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>GET STARTED</h2>
            <ol className={styles.sectionOl}>
              <li className={styles.sectionLi}>Download and run installer above.</li>
              <li className={styles.sectionLi}>Follow installation wizard.</li>
              <li className={styles.sectionLi}>Launch from Start Menu or desktop.</li>
              <li className={styles.sectionLi}>Configure settings and API keys (optional).</li>
              <li className={styles.sectionLi}>Start browsing and downloading!</li>
            </ol>
          </section>

          {/* COMMUNITY */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>COMMUNITY</h2>
            <p className={styles.sectionP}>
              Join our Discord for help, bug reports, and community chat:
            </p>
            <a className={styles.discordBtn} href="https://discord.gg/BqNxn7ftqn" target="_blank" rel="noopener noreferrer">
              JOIN DISCORD
            </a>
            <p className={styles.sectionP} style={{ marginTop: "2em", fontSize: "0.95em" }}>
              <b>CREATOR:</b> atroubledsnake<br />
              <b>CONTRIBUTORS:</b>69st, s4d_god<br />
              <b>PORTFOLIO:</b> <a className={styles.sectionA} href="https://snekbooru.org/atroubledsnake" target="_blank" rel="noopener noreferrer">ATroubledSnake</a>
            </p>
          </section>

          {/* FAQ */}
          <section className={styles.section} id="faq">
            <h2 className={styles.sectionH2}>FREQUENTLY ASKED QUESTIONS</h2>
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    <span>{expandedFaq === index ? "−" : "+"}</span>
                  </button>
                  {expandedFaq === index && (
                    <div className={styles.faqAnswer}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CHANGELOG */}
          <section className={styles.section}>
            <h2 className={styles.sectionH2}>VERSION HISTORY</h2>
            <div className={styles.changelog}>
              <h3 className={styles.changelogH3}>Release Version 5.0.8 Patch</h3> 
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Fixed issue with settings crashing the app on saving (I still have no idea how I let such a big error happen and how I let it into prod)</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 5.0.8</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}><b>Video Playback Overhaul</b>: Switched to PyQt5's native QMediaPlayer, added comprehensive controls (Play/Pause, Seek, Volume, Skip).</li>
                <li className={styles.changelogLi}><b>Audio Improvements</b>: Native audio playback with volume control and proper sync via Qt's multimedia engine.</li>
                <li className={styles.changelogLi}><b>Tag Suggestion System</b>: Auto-complete suggestions as you type and a manual suggestion dialog.</li>
                <li className={styles.changelogLi}><b>Hentai Tab</b>: New dedicated tab for hentai content.</li>
                <li className={styles.changelogLi}><b>Custom Sources</b>: Re-introduced simple and advanced modes for adding custom booru sources.</li>
                <li className={styles.changelogLi}><b>Comprehensive Language Support</b>: Updated all 12 language packs for new features.</li>
                <li className={styles.changelogLi}><b>Performance Improvements</b>: Better memory management and optimized tag suggestion fetching.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 5.0.5</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Significantly improved the UI of the Manga tab by organizing controls into logical groups for a cleaner and more intuitive layout.</li>
                <li className={styles.changelogLi}>Fixed an issue where the Browser tab's background color would not update correctly when changing application themes.</li>
                <li className={styles.changelogLi}>Added a new Manga Reader feature that allows you to view manga from Nhentai and Mangadex.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 5.0.3</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Fixed multiple bugs in the minigames tab and made all the minigames actually playable and enjoyable again.</li>
                <li className={styles.changelogLi}>Multiple changes introduced to the downloads tab allowing for local media import and minor bugfixes.</li>
                <li className={styles.changelogLi}>Fixed random posts showing up only from Gelbooru.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 5.0.2</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Introduced a better way to choose sources (via checkboxes) - this now allows mixing different sources instead of all or just one.</li>
                <li className={styles.changelogLi}>Refactored the downloads tab: Added tag saving and introduced thumbnail viewing.</li>
                <li className={styles.changelogLi}>Refactored favorites tab: Added categories/catalogues and changed the positioning and size of the post inspector.</li>
                <li className={styles.changelogLi}>Minor stability improvements.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 5.0.0</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Overhauled the <b>AI Chat Assistant</b>: Implemented response streaming, added multiple chat tabs, and introduced customizable AI Presets.</li>
                <li className={styles.changelogLi}>Added a <b>Hotkeys</b> tab in Settings for full customization of keyboard shortcuts.</li>
                <li className={styles.changelogLi}>Added a "Go to Page" input field for direct page navigation.</li>
                <li className={styles.changelogLi}>Changed settings layout for a more user-friendly experience, including special toggles for content blacklisting and a unified API keys tab.</li>
                <li className={styles.changelogLi}>General stability improvements and major bug fixes.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 4.9.4</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Added AI Chat Assistant with advanced personalization options.</li>
                <li className={styles.changelogLi}>Added Reverse Image Search tab with support for SauceNAO, IQDB, and Google Lens.</li>
                <li className={styles.changelogLi}>Added a link to the official Discord server on the home page.</li>
                <li className={styles.changelogLi}>Completely overhauled the README with detailed documentation for all features.</li>
                <li className={styles.changelogLi}>Minor bug fixes and performance improvements.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release version 4.8.7</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Added custom styling using sCSS (documentation provided in settings).</li>
                <li className={styles.changelogLi}>Added support for multiple languages.</li>
                <li className={styles.changelogLi}>New logo and improved scraping.</li>
                <li className={styles.changelogLi}>Added incognito mode.</li>
                <li className={styles.changelogLi}>Added a section for adding your own API keys.</li>
                <li className={styles.changelogLi}>Improved the recommendations bot even further.</li>
                <li className={styles.changelogLi}>Fixed multiple visual bugs.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 4.8</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Fixed major bug causing frequent crashes in the video player.</li>
                <li className={styles.changelogLi}>Added more and improved video and sound controls.</li>
                <li className={styles.changelogLi}>Upgraded the recommendations robot.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 4.7.4</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Multiprocessing implemented in order to stop app from crashing if a media causes VLC to crash.</li>
              </ul>
              <h3 className={styles.changelogH3}>Release Version 4.6.1</h3>
              <ul className={styles.changelogUl}>
                <li className={styles.changelogLi}>Fixed major bug causing crashes after searching for a second time.</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
