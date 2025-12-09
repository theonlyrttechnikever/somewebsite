import React from "react";
import Layout from "../components/Layout";
import styles from "./license.module.css";

export default function License() {
  return (
    <Layout>
      <div className={styles.licenseContainer}>
        <h1 className={styles.title}>LICENSE</h1>
        <p className={styles.subtitle}>MIT License - Closed Source Distribution</p>

        <section className={styles.licenseContent}>
          <h2>Understanding Our License</h2>
          <p>
            <b>Snekbooru distributes compiled binaries under the MIT License while maintaining a closed-source codebase.</b> This means:
          </p>
          <ul className={styles.licenseList}>
            <li><b>You can:</b> Use, modify, and distribute the compiled software</li>
            <li><b>You cannot:</b> Access or redistribute the source code</li>
            <li><b>License applies to:</b> The distributed executable and documentation</li>
            <li><b>Source code:</b> Remains proprietary and closed</li>
          </ul>
        </section>

        <section className={styles.licenseContent}>
          <h2>MIT License</h2>
          <p>
            Copyright (c) 2024 atroubledsnake
          </p>

          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </section>

        <section className={styles.licenseContent}>
          <h2>Third-Party Licenses</h2>
          <p>
            Snekbooru uses the following third-party libraries and resources:
          </p>
          <ul className={styles.licenseList}>
            <li><b>Qt</b> - Licensed under LGPL v3</li>
            <li><b>Python</b> - Licensed under Python Software Foundation License</li>
            <li><b>Requests</b> - Licensed under Apache 2.0</li>
            <li><b>PyYAML</b> - Licensed under MIT License</li>
            <li><b>Pillow</b> - Licensed under HPND License</li>
            <li><b>VLC Media Player</b> - Licensed under LGPL v2.1+</li>
          </ul>
        </section>

        <section className={styles.licenseContent}>
          <h2>Additional Notes</h2>
          <p>
            This project is source closed but licensed under the MIT License for compiled distributions.
            The source code is not publicly available for modification or redistribution.
          </p>
          <p>
            For inquiries about licensing or usage rights, please contact atroubledsnake.
          </p>
        </section>

        <section className={styles.licenseContent}>
          <h2>Contributors</h2>
          <p>
            Special thanks to all contributors who have helped make Snekbooru better:
          </p>
          <ul className={styles.licenseList}>
            <li>atroubledsnake (Creator)</li>
            <li>pathetic.dev (Contributor)</li>
            <li>69st (Contributor)</li>
            <li>572.lambman / nikolai.lol (Contributor)</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
