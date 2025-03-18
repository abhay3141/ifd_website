import React from "react";

const ReferenceAudio = () => {
  const audioPath = "/audios/"; // ✅ Using the same file for simplicity

  // Creating 5 entries (pairing Deepfake and Bonafide samples)
  const referenceClips = [
    { id: 1, label: "Deepfake Sample 1", src: audioPath+"pc_deepfake.wav", type: "Deepfake" },
    { id: 2, label: "Deepfake Sample 2", src: audioPath+"cb_deepfake.wav", type: "Deepfake" },
    { id: 3, label: "Deepfake Sample 3", src: audioPath+"sadhguru_deepfake.wav", type: "Deepfake" },
    { id: 4, label: "Deepfake Sample 4", src: audioPath+"madhavan_deepfake.wav", type: "Deepfake" },
    { id: 5, label: "Deepfake Sample 5", src: audioPath+"alia_deepfake.wav", type: "Deepfake" },
    { id: 6, label: "Bonafide Sample 1", src: audioPath+"pc_bonafide.wav", type: "Bonafide" },
    { id: 7, label: "Bonafide Sample 2", src: audioPath+"cb_bonafide.wav", type: "Bonafide" },
    { id: 8, label: "Bonafide Sample 3", src: audioPath+"sadhguru_bonafide.wav", type: "Bonafide" },
    { id: 9, label: "Bonafide Sample 4", src: audioPath+"madhavan_bonafide.wav", type: "Bonafide" },
    { id: 10, label: "Bonafide Sample 5", src: audioPath+"alia_bonafide.wav", type: "Bonafide" },
  ];

  // Separating Deepfake & Bonafide clips
  const deepfakeClips = referenceClips.filter(clip => clip.type === "Deepfake");
  const bonafideClips = referenceClips.filter(clip => clip.type === "Bonafide");

  return (
    <div className="card">
      <h2>Reference Audio Clips</h2>
      <p>Compare Deepfake and Bonafide audio samples.</p>

      {/* Two-column layout: Deepfake first, Bonafide second */}
      <div className="audio-grid">
        <div className="audio-column">
          <h3>Deepfake</h3>
          {deepfakeClips.map((clip) => (
            <div key={clip.id} className="audio-item">
              <strong>{clip.label}</strong>
              <audio controls>
                <source src={clip.src} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>

        <div className="audio-column">
          <h3>Bonafide</h3>
          {bonafideClips.map((clip) => (
            <div key={clip.id} className="audio-item">
              <strong>{clip.label}</strong>
              <audio controls>
                <source src={clip.src} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .audio-grid {
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }
        
        .audio-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .audio-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
          text-align: center;
        }

        audio {
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default ReferenceAudio;