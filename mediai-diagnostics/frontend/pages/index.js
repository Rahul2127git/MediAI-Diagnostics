import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="container">
      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              color: "#00c6ff",
              distance: 150,
            },
          },
        }}
      />

      {/* Glass UI */}
      <div className="overlay">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis & health insights</p>

        <Link href="/upload">
          <button className="glow-btn">Start Analysis</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          background: url('/bg.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: zoom 20s infinite alternate ease-in-out;
        }

        @keyframes zoom {
          0% { background-size: 100%; }
          100% { background-size: 115%; }
        }

        .overlay {
          position: relative;
          backdrop-filter: blur(20px);
          background: rgba(0,0,0,0.5);
          padding: 60px;
          border-radius: 20px;
          text-align: center;
          color: white;
          z-index: 2;
          box-shadow: 0 0 30px rgba(0,198,255,0.5);
        }

        h1 {
          font-size: 2.8rem;
          text-shadow: 0 0 20px #00c6ff;
        }

        p {
          margin-top: 10px;
          opacity: 0.9;
        }

        .glow-btn {
          margin-top: 25px;
          padding: 14px 30px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 0 20px #00c6ff;
          transition: 0.3s;
        }

        .glow-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 40px #00c6ff;
        }
      `}</style>
    </div>
  );
}
  };

  return (
    <div className="container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            links: {
              enable: true,
              color: "#00c6ff",
              distance: 150,
            },
          },
        }}
      />

      <div className="overlay">
        <h1>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis & health insights</p>

        <Link href="/upload">
          <button className="glow-btn">Start Analysis</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          background: url('/bg.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: zoom 20s infinite alternate;
        }

        @keyframes zoom {
          0% { background-size: 100%; }
          100% { background-size: 110%; }
        }

        .overlay {
          position: absolute;
          backdrop-filter: blur(15px);
          background: rgba(0,0,0,0.5);
          padding: 50px;
          border-radius: 15px;
          text-align: center;
          color: white;
          z-index: 2;
        }

        h1 {
          font-size: 2.5rem;
          text-shadow: 0 0 10px #00c6ff;
        }

        .glow-btn {
          margin-top: 20px;
          padding: 12px 25px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          cursor: pointer;
          box-shadow: 0 0 15px #00c6ff;
          transition: 0.3s;
        }

        .glow-btn:hover {
          box-shadow: 0 0 30px #00c6ff;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
