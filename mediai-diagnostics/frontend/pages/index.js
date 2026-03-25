import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
        "https://mediai-diagnostics-qpdf.onrender.com/analyze/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      alert(JSON.stringify(data, null, 2));
    } catch {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav>
        <h2>MediAI</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#how">How it works</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* HERO + UPLOAD */}
      <section id="home" className="hero">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis</p>

        <div className="uploadBox">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={handleUpload}>
            Upload Report
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <h2>How it works</h2>
        <p>Upload → AI Analysis → Health Insights</p>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard">
        <h2>Dashboard</h2>
        <div className="stats">
          <div>Total<br />0</div>
          <div>Normal<br />0</div>
          <div>Risk<br />0</div>
          <div>Critical<br />0</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About</h2>
        <p>MediAI helps analyze medical reports using AI.</p>
      </section>

      {/* STYLES */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .container {
          min-height: 100vh;
          background: url("/bg.jpg") no-repeat center center/cover;
          color: white;
          font-family: Arial;
        }

        nav {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: rgba(0,0,0,0.6);
        }

        nav a {
          margin: 0 10px;
          color: white;
          text-decoration: none;
        }

        section {
          padding: 80px 20px;
          text-align: center;
        }

        .hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
        }

        /* 🔥 UPLOAD UI */
        .uploadBox {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .uploadBox input {
          padding: 10px;
          border-radius: 8px;
          border: none;
          margin-bottom: 15px;
          background: rgba(255,255,255,0.2);
          color: white;
        }

        .uploadBox button {
          padding: 14px 30px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0,198,255,0.7);
          transition: 0.3s;
        }

        .uploadBox button:hover {
          transform: scale(1.05);
        }

        /* DASHBOARD */
        .stats {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .stats div {
          background: rgba(0,0,0,0.6);
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
