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
    <div className="main">

      {/* NAVBAR */}
      <nav className="nav">
        <h2>MediAI</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#how">How it works</a>
          <a href="#upload">File upload</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>
        <a href="#upload"><button>Try Now</button></a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div>
          <h1>Analyze Blood Reports Instantly</h1>
          <p>
            AI-powered health report analysis. Upload your report and get
            clear medical insights instantly.
          </p>

          <a href="#upload">
            <button className="primary">Upload Report</button>
          </a>

          <div className="tags">
            <span>⚡ Fast</span>
            <span>🔒 Private</span>
            <span>🧠 AI Powered</span>
          </div>
        </div>

        <img src="/bg.jpg" />
      </section>

      {/* UPLOAD SECTION */}
      <section id="upload" className="upload">
        <h2>Upload your Report</h2>

        <input
          type="file"
          accept=".pdf,.csv,.xlsx,.xls,.png,.jpg,.jpeg"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleUpload}>Analyze</button>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how">
        <h2>How MediAI Works</h2>

        <div className="grid">
          <div className="card">
            <h3>📄 Upload</h3>
            <p>Upload your blood report</p>
          </div>

          <div className="card">
            <h3>🤖 AI Analysis</h3>
            <p>AI extracts medical data</p>
          </div>

          <div className="card">
            <h3>📊 Risk Detection</h3>
            <p>Detect abnormalities</p>
          </div>

          <div className="card">
            <h3>✅ Results</h3>
            <p>Clear insights & suggestions</p>
          </div>
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
          <div className="card">⚡ Fast Processing</div>
          <div className="card">📊 Smart Insights</div>
          <div className="card">🧠 AI Powered</div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="login">
        <h2>Welcome Back</h2>
        <input placeholder="Username" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .main {
          background: #0b1c2c;
          color: white;
          font-family: Arial;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: #071521;
        }

        .nav a {
          margin: 0 10px;
          color: white;
          text-decoration: none;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 60px;
        }

        .hero img {
          width: 300px;
          border-radius: 20px;
        }

        .primary {
          margin-top: 20px;
          padding: 12px 25px;
          background: #00c6ff;
          border: none;
          border-radius: 10px;
        }

        .tags span {
          margin-right: 10px;
          background: rgba(255,255,255,0.1);
          padding: 5px 10px;
          border-radius: 10px;
        }

        section {
          padding: 60px 20px;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 20px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 15px;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .stats div {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
        }

        input {
          display: block;
          margin: 10px auto;
          padding: 10px;
          border-radius: 8px;
          border: none;
        }

        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
