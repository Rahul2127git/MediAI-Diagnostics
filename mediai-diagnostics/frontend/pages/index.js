import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="overlay">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis & health insights</p>

        <Link href="/upload">
          <button>Start Analysis</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          background: url('/bg.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: zoom 20s infinite alternate ease-in-out;
        }

        @keyframes zoom {
          0% { background-size: 100%; }
          100% { background-size: 110%; }
        }

        .overlay {
          backdrop-filter: blur(15px);
          background: rgba(0,0,0,0.4);
          padding: 50px;
          border-radius: 15px;
          text-align: center;
          color: white;
        }

        button {
          margin-top: 20px;
          padding: 12px 25px;
          border: none;
          border-radius: 10px;
          background: #00c6ff;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background: #00aaff;
        }
      `}</style>
    </div>
  );
}
