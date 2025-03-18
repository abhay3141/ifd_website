import React from "react";
import ReferenceAudio from "./ReferenceAudio";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="app-container">
      <h1>IndieFake Audio Deepfake Detection</h1>
      <p>A benchmark dataset for deepfake audio detection.</p>

      {/* ====== ADDITIONAL INFORMATION ====== */}
      <p>
        In recent years, advancements in artificial intelligence have led to the development 
        of highly realistic synthetic speech, raising concerns about misinformation, 
        identity theft, and audio-based fraud. To address these challenges, we introduce 
        **IndieFake**, a comprehensive dataset for deepfake audio detection.
      </p>

      <p>
        Our dataset consists of both **bonafide (authentic) and deepfake** audio samples, 
        providing a robust benchmark for evaluating detection models. We encourage 
        researchers, developers, and cybersecurity experts to leverage IndieFake 
        for advancing deepfake detection techniques.
      </p>

      <p style={{ fontWeight: "bold" }}>
        For more information, read our{" "}
        <a
          href={`${process.env.PUBLIC_URL}/paper_report/audio_deepfake_detection.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          research paper
        </a>{" "} and to access our dataset, please fill out the form present at the end of the page.
      </p>

      {/* ====== REFERENCE AUDIO CLIPS ====== */}
      <ReferenceAudio />

      {/* ====== CONTACT FORM FOR DATASET ACCESS ====== */}
      <div className="card">
        <Contact />
      </div>

      {/* ====== FOOTER (Creative Commons License) ====== */}
      <footer className="footer">
        <p>
          © 2025 IndieFake Dataset | Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Creative Commons Attribution 4.0 International License
          </a>.
        </p>
      </footer>

      {/* ====== STYLES ====== */}
      <style jsx>{`
        .footer {
          margin-top: 40px;
          padding: 15px;
          text-align: center;
          background: #333;
          color: white;
          font-size: 14px;
          border-top: 3px solid #00bfff;
        }
        .footer a {
          color: #00bfff;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;
