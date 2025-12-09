import React from "react";
import Layout from "../components/Layout";
import styles from "./api.module.css";

export default function API() {
  return (
    <Layout>
      <div className={styles.apiContainer}>
        <h1 className={styles.title}>API DOCUMENTATION</h1>
        <p className={styles.subtitle}>Snekbooru Default API Endpoints</p>

        <section className={styles.apiSection}>
          <h2>Search Posts</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET</div>
            <div className={styles.path}>/api/posts/search</div>
          </div>
          <p>Search posts across configured sources with tags and filters.</p>
          <div className={styles.codeBlock}>
{`Query Parameters:
- tags: string[] - Array of tags to search for
- limit: number - Results per page (default: 20, max: 100)
- offset: number - Pagination offset (default: 0)
- sources: string[] - Specific sources to search (optional)
- blacklist: string[] - Tags to exclude from results`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Get Post Details</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET</div>
            <div className={styles.path}>/api/posts/{'{id}'}</div>
          </div>
          <p>Retrieve detailed information about a specific post.</p>
          <div className={styles.codeBlock}>
{`Parameters:
- id: string - Post ID
- source: string - Source identifier`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Get Tags</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET</div>
            <div className={styles.path}>/api/tags/autocomplete</div>
          </div>
          <p>Get tag suggestions for autocomplete functionality.</p>
          <div className={styles.codeBlock}>
{`Query Parameters:
- query: string - Partial tag name
- limit: number - Number of suggestions (default: 10)`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Reverse Image Search</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>POST</div>
            <div className={styles.path}>/api/search/reverse</div>
          </div>
          <p>Search for similar images using SauceNAO, IQDB, or Google Lens.</p>
          <div className={styles.codeBlock}>
{`Body:
{
  "image": "base64_encoded_image",
  "service": "saucenao|iqdb|google",
  "limit": 5
}`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Favorites</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET</div>
            <div className={styles.path}>/api/favorites</div>
          </div>
          <p>Retrieve user favorites from local storage.</p>
        </section>

        <section className={styles.apiSection}>
          <h2>Download Queue</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>POST</div>
            <div className={styles.path}>/api/downloads/queue</div>
          </div>
          <p>Add posts to download queue with batch operations.</p>
          <div className={styles.codeBlock}>
{`Body:
{
  "posts": [
    {"id": "post_id", "source": "source_name"},
    ...
  ],
  "naming_pattern": "{title}_{id}.{ext}"
}`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Manga Reader</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET</div>
            <div className={styles.path}>/api/manga/chapters</div>
          </div>
          <p>Get manga chapters from supported sources.</p>
          <div className={styles.codeBlock}>
{`Query Parameters:
- source: string - nhentai|mangadex
- query: string - Manga title or ID`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>AI Chat</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>POST</div>
            <div className={styles.path}>/api/ai/chat</div>
          </div>
          <p>Send messages to AI assistant.</p>
          <div className={styles.codeBlock}>
{`Body:
{
  "message": "Your message here",
  "preset": "helpful|casual|expert",
  "chat_id": "optional_chat_session_id"
}`}
          </div>
        </section>

        <section className={styles.apiSection}>
          <h2>Settings</h2>
          <div className={styles.endpoint}>
            <div className={styles.method}>GET/POST</div>
            <div className={styles.path}>/api/settings</div>
          </div>
          <p>Get or update application settings.</p>
        </section>

        <section className={styles.apiNote}>
          <h2>Notes</h2>
          <ul>
            <li>All API calls are local - no data is sent to external servers</li>
            <li>Authentication is not required for local APIs</li>
            <li>Rate limiting applies per source based on their ToS</li>
            <li>Responses are cached locally for performance</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
