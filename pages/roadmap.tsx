import React from "react";
import Layout from "../components/Layout";
import styles from "./HomePage.module.css";

export default function Roadmap() {
  const roadmapPhases = [
    {
      phase: "PHASE 1",
      title: "Platform Expansion",
      items: ["Linux Support", "Android App", "Windows Optimization", "VRM AI Integration"],
    },
    {
      phase: "PHASE 2",
      title: "Mobile & Web",
      items: ["iOS App", "macOS Support", "Web Dashboard"],
    },
    {
      phase: "PHASE 3",
      title: "Community & Marketplace",
      items: [
        "Community Themes Marketplace???",
        "Plugin System",
        "Custom Source Sharing",
      ],
    },
    {
      phase: "PHASE 4",
      title: "AI & Advanced Features",
      items: ["Enhanced AI Chat", "Advanced Filtering", "Better Search Algorithms"],
    },
    {
      phase: "PHASE 5",
      title: "Social & Ecosystem",
      items: [
        "User Profiles???",
        "Collection Sharing",
        "Community Recommendations",
      ],
    },
  ];

  return (
    <Layout>
      <div
        style={{
          background: "#0a0a0a",
          minHeight: "100vh",
          padding: "2em",
        }}
      >
        <h1 className={styles.title}>ROADMAP</h1>
        <p className={styles.subtitle}>
          Future planned features in order of development
        </p>

        <section
          className={styles.section}
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2em",
            }}
          >
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                style={{
                  borderLeft: "3px solid #a855f7",
                  paddingLeft: "2em",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-8px",
                    top: "0",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#a855f7",
                    border: "2px solid #0a0a0a",
                  }}
                />
                <h3 className={styles.sectionH2} style={{ marginTop: 0 }}>
                  {phase.phase}: {phase.title}
                </h3>
                <ul className={styles.sectionUl}>
                  {phase.items.map((item, idx) => (
                    <li key={idx} className={styles.sectionLi}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
