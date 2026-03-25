import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

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
      setResult(data);
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

      {/* HERO + UPLOAD (COMBINED) */}
      <section id="home" className="hero">
        <h1>Analyze Blood Reports Instantly</h1>
        <p>AI-powered health insights from medical reports</p>

        <div className="uploadBox">
          <input
            type="file"
            accept=".pdf,.csv,.xlsx,.xls,.png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={handleUpload}>Analyze</button>
        </div>
      </section>

      {/* RESULT SECTION */}
      {result && (
        <section className="result">
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section id="how" className="how">
        <h2>How It Works</h2>

        <div className="grid">
          <div className="card">📄 Upload Report</div>
          <div className="card">🤖 AI Analysis</div>
          <div className="card">📊 Insights</div>
          <div className="card">✅ Recommendations</div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="dashboard">
        <h2>Dashboard</h2>

        <div className="stats">
          <div>Total<br/><span>0</span></div>
          <div>Normal<br/><span>0</span></div>
          <div>Risk<br/><span>0</span></div>
          <div>Critical<br/><span>0</span></div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="features">
        <h2>Built for Smart Healthcare</h2>

        <div className="grid">
          <div className="card">🔐 Privacy First</div>
          <div className="card">⚡ Fast AI</div>
          <div className="card">📊 Clear Results</div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .container {
          background: #0b1c2c;
          color: white;
          font-family: Arial;
        }

        nav {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: #071521;
        }

        nav a {
          margin: 0 10px;
          color: white;
        }

        .hero {
          text-align: center;
          padding: 80px;
          background: url("/bg.jpg") center/cover;
        }

        .uploadBox {
          margin-top: 20px;
        }

        input {
          padding: 10px;
          margin-right: 10px;
        }

        button {
          padding: 10px 20px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          border: none;
          border-radius: 8px;
          color: white;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 40px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 10px;
        }

        .stats {
          display: flex;
          gap: 20px;
          padding: 20px;
        }

        .stats div {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
        }

        .result {
          padding: 40px;
          background: black;
        }
      `}</style>
    </div>
  );
}
