import React from "react";
import ReferenceAudio from "./ReferenceAudio";
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <h1>IndieFake Audio Deepfake Detection</h1>
      <p className="subtitle">A benchmark dataset for deepfake audio detection.</p>

      {/* ====== ADDITIONAL INFORMATION ====== */}
      <p>
      Recent advances in generative models have made it easier than ever to synthesize 
      human-like speech, raising critical challenges in detecting audio deepfakes. 
      However, most existing datasets lack linguistic diversity and real-world 
      variability, limiting their effectiveness. IndieFake addresses this by introducing 
      a large-scale, speaker-balanced dataset of English-speaking Indian speakers. 
      It contains over 27 hours of audio—equally divided between bonafide and deepfake 
      samples—collected from 50 speakers representing diverse regions, age groups, and 
      professions. The dataset features multiple deepfake generation scenarios, 
      including speaker-specific synthesis and cross-speaker content transfer, 
      simulating realistic threat conditions. By capturing the nuances of Indian 
      English and varied speaking styles, IndieFake serves as a valuable benchmark 
      for evaluating the generalizability and robustness of deepfake detection systems 
      across underrepresented demographics.
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
            >
              Creative Commons Attribution 4.0 International License
            </a>
          </p>
       </footer>
    </div>
  );
};

export default Home;
