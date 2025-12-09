import Link from 'next/link';
import styles from './Layout.module.css';
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
      <title>Snekbooru</title>
      <meta name="description" content="The Ultimate Anime & Manga Browser" />
      <link rel="icon" href="/favicon.ico" sizes='any' />
      </Head>
      <div className={styles.container}>
      <header className={styles.stickyHeader}>
        <nav className={styles.navbar}>
          <div className={styles.navContent}>
            <h1 className={styles.logo}>SNEKBOORU</h1>
            <ul className={styles.navLinks}>
              <li><Link href="/" className={styles.navLink}>HOME</Link></li>
              <li><Link href="/styles" className={styles.navLink}>STYLES</Link></li>
              <li><Link href="/theme-guide" className={styles.navLink}>THEME GUIDE</Link></li>
              <li><Link href="/roadmap" className={styles.navLink}>ROADMAP</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <h3>PRODUCT</h3>
            <ul>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#download">Download</Link></li>
              <li><Link href="/#changelog">Changelog</Link></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru/releases" target="_blank" rel="noopener noreferrer">Releases</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>COMMUNITY</h3>
            <ul>
              <li><a href="https://discord.gg/BqNxn7ftqn" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru/issues" target="_blank" rel="noopener noreferrer">Feedback</a></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru/issues" target="_blank" rel="noopener noreferrer">Bug Reports</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>RESOURCES</h3>
            <ul>
              <li><Link href="/theme-guide">Theme Guide</Link></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h3>DEVELOPERS</h3>
            <ul>
              <li><Link href="/atroubledsnake">atroubledsnake</Link></li>
              <li><a href="https://github.com/atroubledsnake/Snekbooru/graphs/contributors" target="_blank" rel="noopener noreferrer">Contributors</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerP}>
            © {new Date().getFullYear()} SNEKBOORU — ALL RIGHTS RESERVED
          </p>
          <p className={styles.credits}>
            CREATOR: atroubledsnake | CONTRIBUTORS: 69st, s4d_god
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}
