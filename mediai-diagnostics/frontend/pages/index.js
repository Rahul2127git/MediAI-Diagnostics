import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");

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

      {/* UPLOAD SECTION (MAIN FEATURE) */}
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
      <section id="how" className="how">
        <h2>How it Works</h2>
        <p>Upload → AI analysis → Results</p>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard">
        <h2>Dashboard</h2>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About</h2>
      </section>

      {/* STYLE */}
      <style jsx>{`
        .container {
          background: url("/bg.jpg") no-repeat center/cover;
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
        }

        section {
          padding: 80px;
          text-align: center;
        }

        .upload input {
          margin: 20px;
          padding: 10px;
        }

        button {
          padding: 10px 20px;
          background: #00c6ff;
          border: none;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
