import Link from "next/link";

export default function Home() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>MediAI</h2>
        <div>
          <a href="#">Home</a>
          <a href="#how">How it works</a>
          <a href="/upload">File upload</a>
          <a href="#">Dashboard</a>
          <a href="#">About</a>
        </div>
        <Link href="/upload">
          <button className="primary">Try Now</button>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="left">
          <h1>Analyze Medical Reports Instantly</h1>
          <p>
            AI-powered blood report analysis. Upload your report and get
            clear health insights in seconds.
          </p>

          <Link href="/upload">
            <button className="primary big">Upload Report</button>
          </Link>

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
            <p>Upload your blood test report (PDF).</p>
          </div>

          <div className="card">
            <h3>🤖 AI Analysis</h3>
            <p>Our AI extracts and analyzes medical values.</p>
          </div>

          <div className="card">
            <h3>📊 Insights</h3>
            <p>Get clear results: Normal / Risk / Critical.</p>
          </div>

          <div className="card">
            <h3>✅ Recommendations</h3>
            <p>Health suggestions based on your data.</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="dashboard">
        <h2>Dashboard</h2>
        <div className="stats">
          <div>Reports<br/><span>0</span></div>
          <div>Normal<br/><span>0</span></div>
          <div>Risk<br/><span>0</span></div>
          <div>Critical<br/><span>0</span></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Built for Smart Healthcare</h2>

        <div className="grid">
          <div className="card">
            <h3>🔐 Privacy First</h3>
            <p>Your medical data is secure and not shared.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast Processing</h3>
            <p>Get results in seconds using AI.</p>
          </div>

          <div className="card">
            <h3>📊 Smart Insights</h3>
            <p>Understand your health easily.</p>
          </div>
        </div>
      </section>

      {/* LOGIN SECTION */}
      <section className="login">
        <h2>Welcome Back</h2>
        <p>Login to access your dashboard</p>

        <input placeholder="Username" />
        <input placeholder="Password" type="password" />

        <button className="primary">Login</button>
      </section>

      {/* FOOTER */}
      <footer>
        Secure your health · MediAI Diagnostics
      </footer>

      {/* STYLES */}
      <style jsx>{`
        .container {
          background: #0b1c2c;
          color: white;
          font-family: Arial;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background: #071521;
        }

        .navbar a {
          margin: 0 10px;
          color: white;
          text-decoration: none;
        }

        .hero {
          display: flex;
          padding: 60px;
          align-items: center;
        }

        .hero img {
          width: 400px;
          border-radius: 20px;
        }

        .big {
          padding: 15px 30px;
        }

        .tags span {
          margin-right: 10px;
          background: rgba(255,255,255,0.1);
          padding: 5px 10px;
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
        }

        .dashboard, .features, .how {
          padding: 40px;
        }

        .stats {
          display: flex;
          gap: 20px;
        }

        .stats div {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }

        .login {
          padding: 40px;
          text-align: center;
        }

        .login input {
          display: block;
          margin: 10px auto;
          padding: 10px;
          width: 250px;
          border-radius: 8px;
          border: none;
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
