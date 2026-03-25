import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select file");

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

      {/* HERO */}
      <section id="home" className="hero">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis</p>

        <a href="#upload">
          <button>Upload Report</button>
        </a>
      </section>

      {/* UPLOAD SECTION (MAIN FIX) */}
      <section id="upload" className="upload">
        <h2>Upload Health Report</h2>

        <input
          type="file"
          accept=".pdf,.csv,.xlsx,.xls,.png,.jpg,.jpeg"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleUpload}>Analyze</button>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <h2>How it works</h2>
        <p>Upload → AI Analyze → Get Results</p>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard">
        <h2>Dashboard</h2>
        <p>Results will appear here</p>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About</h2>
        <p>AI medical assistant</p>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .container {
          background: url("/bg.jpg") no-repeat center/cover;
          color: white;
          min-height: 100vh;
          font-family: Arial;
        }

        nav {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: rgba(0,0,0,0.5);
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

        .hero h1 {
          font-size: 3rem;
        }

        input {
          margin: 20px;
          padding: 10px;
        }

        button {
          padding: 12px 25px;
          background: #00c6ff;
          border: none;
          border-radius: 10px;
          color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
