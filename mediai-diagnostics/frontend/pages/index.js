import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select file first");
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
      alert("Backend error");
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
          <a href="#upload">Upload</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* HERO + UPLOAD */}
      <section id="home" className="hero">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis</p>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={handleUpload}>Upload & Analyze</button>
      </section>

      {/* HOW */}
      <section id="how">
        <h2>How it works</h2>
        <p>Upload → AI Analysis → Health Insights</p>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard">
        <h2>Dashboard</h2>
        <div className="stats">
          <div>Total<br/>0</div>
          <div>Normal<br/>0</div>
          <div>Risk<br/>0</div>
          <div>Critical<br/>0</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About</h2>
        <p>MediAI helps analyze medical reports using AI.</p>
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .container {
          background: url("/bg.jpg") no-repeat center center/cover;
          min-height: 100vh;
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
        }

        input {
          margin: 10px;
          padding: 10px;
        }

        button {
          padding: 12px 25px;
          background: #00c6ff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .stats div {
          background: rgba(0,0,0,0.5);
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
