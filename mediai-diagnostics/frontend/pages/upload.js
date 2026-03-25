import { useState } from "react";
import Link from "next/link";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);

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
    } catch (error) {
      alert("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="overlay">
        <h2>Upload Health Report</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        <button className="glow-btn" onClick={uploadFile}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="result-box">
            <h3>Results:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        <br />

        <Link href="/">
          <button className="back-btn">Back Home</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url('/bg.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: zoom 20s infinite alternate ease-in-out;
        }

        @keyframes zoom {
          0% { background-size: 100%; }
          100% { background-size: 115%; }
        }

        .overlay {
          backdrop-filter: blur(20px);
          background: rgba(0, 0, 0, 0.55);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          color: white;
          width: 400px;
          box-shadow: 0 0 25px rgba(0, 198, 255, 0.5);
        }

        h2 {
          margin-bottom: 15px;
          text-shadow: 0 0 10px #00c6ff;
        }

        input {
          margin-top: 10px;
        }

        .glow-btn {
          margin-top: 10px;
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
          transform: scale(1.05);
          box-shadow: 0 0 30px #00c6ff;
        }

        .back-btn {
          margin-top: 15px;
          padding: 8px 15px;
          border-radius: 8px;
          border: none;
          background: #ccc;
          cursor: pointer;
        }

        .result-box {
          margin-top: 20px;
          text-align: left;
          background: rgba(0,0,0,0.7);
          padding: 10px;
          border-radius: 10px;
          max-height: 200px;
          overflow: auto;
        }

        pre {
          font-size: 12px;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
