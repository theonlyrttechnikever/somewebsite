import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./styles.module.css";
import stylesData from "../../data/styles.json";

interface Style {
  id: string;
  name: string;
  author: string;
  description: string;
  preview_color: string;
  compatible_versions: string[];
  download_url: string;
  created_date: string;
}

export default function StylesGallery() {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);

  const handleDownload = (downloadUrl: string, styleName: string) => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${styleName}.snek.css`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className={styles.galleryContainer} style={{ background: "#0a0a0a" }}>
        <h1 className={styles.title}>STYLE GALLERY</h1>
        <p className={styles.subtitle}>Customize Snekbooru with official and community themes</p>

        <div className={styles.gridContainer}>
          {stylesData.styles.map((style: Style) => (
            <div
              key={style.id}
              className={styles.styleCard}
              onClick={() => setSelectedStyle(style)}
            >
              <div className={styles.colorPreview} style={{ background: style.preview_color }} />
              <h3>{style.name}</h3>
              <p className={styles.author}>by {style.author}</p>
              <p className={styles.description}>{style.description}</p>
            </div>
          ))}
        </div>

        {selectedStyle && (
          <div className={styles.modal} onClick={() => setSelectedStyle(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedStyle(null)}
              >
                ✕
              </button>
              <div className={styles.modalHeader}>
                <div
                  className={styles.largePreview}
                  style={{ background: selectedStyle.preview_color }}
                />
                <div className={styles.modalInfo}>
                  <h2>{selectedStyle.name}</h2>
                  <p className={styles.modalAuthor}>by {selectedStyle.author}</p>
                  <p className={styles.modalDesc}>{selectedStyle.description}</p>
                  <p className={styles.created}>
                    Created: {new Date(selectedStyle.created_date).toLocaleDateString()}
                  </p>
                  <p className={styles.compatible}>
                    Compatible with: {selectedStyle.compatible_versions.join(", ")}
                  </p>
                  <button
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(selectedStyle.download_url, selectedStyle.name)}
                  >
                    DOWNLOAD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
