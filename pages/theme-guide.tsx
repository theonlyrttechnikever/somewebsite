import React from "react";
import Layout from "../components/Layout";
import styles from "./themeGuide.module.css";

export default function ThemeGuide() {
  return (
    <Layout>
      <div style={{ background: "#0a0a0a", minHeight: "100vh", padding: "2em" }}>
        <div className={styles.guideContainer}>
          <h1 className={styles.title}>THEME GUIDE</h1>
          <p className={styles.subtitle}>Master sCSS to customize Snekbooru's appearance</p>

          {/* THE sCSS STYLING SYSTEM */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.2s' }}>
            <h2>THE sCSS STYLING SYSTEM</h2>
            <p>
              Snekbooru's appearance is controlled by <b>sCSS</b>, a powerful styling language that gives you deep control over the look and feel of the application. This guide will walk you through how to create your own themes.
            </p>
          </section>

          {/* CUSTOM FONTS */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.3s' }}>
            <h2>CUSTOM FONTS</h2>
            <p>
              You can add your own fonts to use in custom themes. Place your font files (<code>.ttf</code> or <code>.otf</code>) into the following directory and restart the application:
            </p>
            <div className={styles.codeBlock}>C:/Users/ATroubledSnake/AppData/Local/Snekbooru/Snekbooru\fonts</div>
            <p>After restarting, you can use the font's family name in your stylesheet:</p>
            <div className={styles.codeBlock}>
<span className={styles.selector}>*</span> {"{"}
    <span className={styles.property}>font-family</span>: <span className={styles.value}>'My Cool Font'</span>;
{"}"}
            </div>
          </section>

          {/* GLOBAL STYLES & BASIC PROPERTIES */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.4s' }}>
            <h2>GLOBAL STYLES & BASIC PROPERTIES</h2>
            <p>
              The <code>*</code> selector applies styles to all elements. <code>sWidget</code> targets the base style for all widgets unless overridden.
            </p>
            <div className={styles.codeBlock}>
<span className={styles.selector}>*</span> {"{"}
    <span className={styles.property}>font-family</span>: <span className={styles.value}>'Segoe UI'</span>, Arial, sans-serif;
    <span className={styles.property}>font-size</span>: <span className={styles.value}>14px</span>;
{"}"}

<span className={styles.selector}>sWidget</span> {"{"}
    <span className={styles.property}>background-color</span>: <span className={styles.value}>#1e1e1e</span>;
    <span className={styles.property}>color</span>: <span className={styles.value}>#eaeaea</span>;
    <span className={styles.property}>border</span>: <span className={styles.value}>none</span>;
    <span className={styles.property}>padding</span>: <span className={styles.value}>5px</span>;
{"}"}
            </div>
            <p><b>Common properties include:</b> background-color, color, border, border-radius, padding, margin, font-size, font-family, font-weight, min-width, max-width, min-height, max-height, text-align.</p>
          </section>

          {/* sWIDGET TYPE SELECTORS */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.5s' }}>
            <h2>sWIDGET TYPE SELECTORS</h2>
            <p>To style a specific type of widget, use its <code>s-prefixed</code> class name.</p>
            <div className={styles.widgetGrid}>
              <div><b>sCheckBox</b><p>Checkboxes</p></div>
              <div><b>sComboBox</b><p>Dropdown menus</p></div>
              <div><b>sDialog</b><p>Dialog windows</p></div>
              <div><b>sFrame</b><p>Basic container</p></div>
              <div><b>sGroupBox</b><p>Grouping containers</p></div>
              <div><b>sHeaderView</b><p>Table headers</p></div>
              <div><b>sLabel</b><p>Text labels</p></div>
              <div><b>sLineEdit</b><p>Single-line text</p></div>
              <div><b>sListWidget</b><p>Lists</p></div>
              <div><b>sMenu</b><p>Context menus</p></div>
              <div><b>sPlainTextEdit</b><p>Multi-line text</p></div>
              <div><b>sProgressBar</b><p>Progress bars</p></div>
              <div><b>sPushButton</b><p>All buttons</p></div>
              <div><b>sScrollBar</b><p>Scrollbars</p></div>
              <div><b>sScrollArea</b><p>Scrollable areas</p></div>
              <div><b>sSlider</b><p>Sliders</p></div>
              <div><b>sSpinBox</b><p>Numeric inputs</p></div>
              <div><b>sSplitter</b><p>Draggable handles</p></div>
              <div><b>sTabBar</b><p>Tab bar</p></div>
              <div><b>sTabWidget</b><p>Tab container</p></div>
              <div><b>sTableView</b><p>Tables</p></div>
              <div><b>sTextBrowser</b><p>Rich text display</p></div>
              <div><b>sWidget</b><p>Base widget</p></div>
            </div>
            <div className={styles.codeBlock}>
<span className={styles.selector}>sLineEdit</span>, <span className={styles.selector}>sPlainTextEdit</span>, <span className={styles.selector}>sComboBox</span>, <span className={styles.selector}>sSpinBox</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#2a2a2a</span>;
    <span className={styles.property}>color</span>: <span className={styles.value}>#eaeaea</span>;
    <span className={styles.property}>border</span>: <span className={styles.value}>1px solid #444</span>;
    <span className={styles.property}>border-radius</span>: <span className={styles.value}>4px</span>;
{"}"}

<span className={styles.selector}>sPushButton</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#3a3a3a</span>;
    <span className={styles.property}>padding</span>: <span className={styles.value}>8px</span>;
{"}"}
            </div>
          </section>

          {/* PSEUDO-STATES */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.6s' }}>
            <h2>PSEUDO-STATES</h2>
            <p>Apply styles based on a widget's state:</p>
            <div className={styles.pseudoList}>
              <div><code>:hover</code> — Mouse cursor is over the widget</div>
              <div><code>:pressed</code> — Widget is being clicked</div>
              <div><code>:disabled</code> — Widget is inactive</div>
              <div><code>:checked</code> — For checkable widgets</div>
              <div><code>:selected</code> — For items in lists/tables</div>
            </div>
            <div className={styles.codeBlock}>
<span className={styles.selector}>sPushButton:hover</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#4a4a4a</span>;
    <span className={styles.property}>border-color</span>: <span className={styles.value}>#666</span>;
{"}"}

<span className={styles.selector}>sPushButton:pressed</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#5a5a5a</span>;
{"}"}

<span className={styles.selector}>sPushButton:disabled</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#1a1a1a</span>;
    <span className={styles.property}>color</span>: <span className={styles.value}>#666</span>;
{"}"}
            </div>
          </section>

          {/* SUB-CONTROLS & PARTS */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.7s' }}>
            <h2>SUB-CONTROLS & PARTS</h2>
            <p>Many complex widgets are composed of sub-controls that can be styled individually using <code>::</code> (double colon):</p>
            <div className={styles.pseudoList}>
              <div><code>sTabWidget::pane</code> — The content area</div>
              <div><code>sTabBar::tab</code> — An individual tab</div>
              <div><code>sGroupBox::title</code> — The title text</div>
              <div><code>sProgressBar::chunk</code> — The filled portion</div>
              <div><code>sComboBox::drop-down</code> — Dropdown arrow</div>
              <div><code>sScrollBar::handle</code> — The draggable part</div>
            </div>
            <div className={styles.codeBlock}>
<span className={styles.selector}>sTabBar::tab</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#2a2a2a</span>;
    <span className={styles.property}>color</span>: <span className={styles.value}>#aaa</span>;
    <span className={styles.property}>padding</span>: <span className={styles.value}>8px 16px</span>;
{"}"}

<span className={styles.selector}>sTabBar::tab:selected</span> {"{"}
    <span className={styles.property}>background</span>: <span className={styles.value}>#3a3a3a</span>;
    <span className={styles.property}>color</span>: <span className={styles.value}>#fff</span>;
{"}"}
            </div>
          </section>

          {/* STYLING BY ID (objectName) */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '0.8s' }}>
            <h2>STYLING BY ID (objectName)</h2>
            <p>Elements have unique IDs (objectName in Qt) for highly specific styling, prefixed with <code>#</code>:</p>
            <div className={styles.idGrid}>
              <div><code>sWidget#main_window</code><p>Main window</p></div>
              <div><code>sTabWidget#main_tabs</code><p>Main tab widget</p></div>
              <div><code>sWidget#home_tab</code><p>Home tab</p></div>
              <div><code>sWidget#browser_tab</code><p>Browser tab</p></div>
              <div><code>sWidget#favorites_tab</code><p>Favorites tab</p></div>
              <div><code>sWidget#downloads_tab</code><p>Downloads tab</p></div>
              <div><code>sWidget#minigames_tab</code><p>Minigames tab</p></div>
              <div><code>sWidget#ai_tab</code><p>AI tab</p></div>
              <div><code>sFrame#video_frame</code><p>Video frame</p></div>
              <div><code>sLabel#title</code><p>Main title</p></div>
              <div><code>sLabel#app_logo_mini</code><p>Logo</p></div>
              <div><code>sLabel#total_posts_label</code><p>Posts counter</p></div>
              <div><code>sPlainTextEdit#post_inspector_info</code><p>Post info</p></div>
              <div><code>sTextBrowser#ai_chat_history_browser</code><p>Chat history</p></div>
              <div><code>sPlainTextEdit#ai_chat_input_area</code><p>Chat input</p></div>
              <div><code>sGroupBox#danger_zone</code><p>Danger Zone</p></div>
              <div><code>sPushButton#reset_button</code><p>Reset button</p></div>
            </div>
          </section>
          
          {/* ADVANCED PROPERTIES */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '1.0s' }}>
            <h2>ADVANCED PROPERTIES</h2>
            <h3 style={{color: '#a855f7', marginTop: '1.5rem', marginBottom: '1rem'}}>Gradients</h3>
            <p>Use <code>qlineargradient</code> or <code>qradialgradient</code> for backgrounds:</p>
            <div className={styles.codeBlock}>
<span className={styles.property}>background</span>: <span className={styles.value}>qlineargradient(x1:0, y1:0, x2:1, y2:1, stop:0 #2DE2E6, stop:1 #F706CF)</span>;
            </div>
            <h3 style={{color: '#a855f7', marginTop: '1.5rem', marginBottom: '1rem'}}>Images</h3>
            <p>Use <code>url("path/to/image.png")</code> for background images. Paths can be absolute or relative:</p>
            <div className={styles.codeBlock}>
<span className={styles.property}>background-image</span>: <span className={styles.value}>url("path/to/your/image.png")</span>;
<span className={styles.property}>border-image</span>: <span className={styles.value}>url("path/to/border.png") 3 3 3 3 stretch stretch</span>;
            </div>
          </section>

          {/* FINAL NOTES */}
          <section className={`${styles.section} ${styles['fade-in']}`} style={{ animationDelay: '1.1s' }}>
            <h2>FINAL NOTES</h2>
            <ul style={{color: '#cbd5e1', marginLeft: '1.5rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '0.8rem'}}>The sCSS system is powerful, but not all web CSS properties are available.</li>
              <li style={{marginBottom: '0.8rem'}}>Layout is primarily handled by the application's structure, not stylesheets.</li>
              <li style={{marginBottom: '0.8rem'}}>Experimentation is encouraged!</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
