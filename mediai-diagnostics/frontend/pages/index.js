import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>MediAI</h2>

        <div className="nav-links">
          <a onClick={() => scrollTo("home")}>Home</a>
          <a onClick={() => scrollTo("how")}>How it works</a>
          <a onClick={() => scrollTo("dashboard")}>Dashboard</a>
          <a onClick={() => scrollTo("about")}>About</a>
        </div>

        <button
          className="primary"
          onClick={() => router.push("/upload")}
        >
          Try Now
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="left">
          <h1>Analyze Medical Reports Instantly</h1>
          <p>
            Upload your blood report (PDF, CSV, Excel, Image) and get
            AI-powered health insights instantly.
          </p>

          <button
            className="primary big"
            onClick={() => router.push("/upload")}
          >
            Upload Report
          </button>

          <div className="tags">
            <span>⚡ Fast</span>
            <span>🔒 Private</span>
            <span>🧠 AI Powered</span>
          </div>
        </div>

        <div className="right">
          <img src="/bg.jpg" alt="AI" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how">
        <h2>How MediAI Works</h2>

        <div className="grid">
          <div className="card">
            <h3>📄 Upload Report</h3>
            <p>Upload PDF, CSV, Excel or Image reports.</p>
          </div>

          <div className="card">
            <h3>🤖 AI Analysis</h3>
            <p>AI extracts medical values automatically.</p>
          </div>

          <div className="card">
            <h3>📊 Insights</h3>
            <p>Get Normal / Risk / Critical results.</p>
          </div>

          <div className="card">
            <h3>✅ Recommendations</h3>
            <p>Personalized health suggestions.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="dashboard">
        <h2>Dashboard</h2>

        <div className="stats">
          <div><h3>0</h3><p>Reports</p></div>
          <div><h3>0</h3><p>Normal</p></div>
          <div><h3>0</h3><p>Risk</p></div>
          <div><h3>0</h3><p>Critical</p></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="features">
        <h2>Built for Smart Healthcare</h2>

        <div className="grid">
          <div className="card">
            <h3>🔐 Privacy First</h3>
            <p>Your medical data is secure.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast Processing</h3>
            <p>Instant AI-powered analysis.</p>
          </div>

          <div className="card">
            <h3>📊 Smart Insights</h3>
            <p>Easy-to-understand results.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Secure your health · MediAI Diagnostics
      </footer>

      {/* STYLES */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .container {
          background: #0b1c2c;
          color: white;
          font-family: Arial;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #071521;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-links a {
          margin: 0 12px;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }

        .hero {
          display: flex;
          padding: 60px;
          align-items: center;
          gap: 40px;
        }

        .hero img {
          width: 400px;
          border-radius: 20px;
        }

        .big {
          padding: 15px 30px;
          margin-top: 20px;
        }

        .tags span {
          margin-right: 10px;
          background: rgba(255,255,255,0.1);
          padding: 6px 12px;
          border-radius: 10px;
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
          border-radius: 15px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(0,198,255,0.4);
        }

        .dashboard, .features, .how {
          padding: 60px 40px;
          text-align: center;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .stats div {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          width: 120px;
        }

        .primary {
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        footer {
          text-align: center;
          padding: 20px;
          background: #071521;
        }
      `}</style>
    </div>
  );
}
