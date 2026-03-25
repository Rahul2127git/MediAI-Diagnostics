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
      <div className="card">
        <h2>Upload Health Report</h2>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={uploadFile}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="result">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        <Link href="/">
          <button className="back">Back Home</button>
        </Link>
      </div>

      <style jsx>{`
        /* FULL SCREEN BACKGROUND */
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: url('/bg.jpg') center center / cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* DARK OVERLAY (IMPORTANT FOR BLEND) */
        .container::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        }

        /* GLASS CARD */
        .card {
          position: relative;
          z-index: 2;
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          color: white;
          width: 400px;
          box-shadow: 0 0 30px rgba(0, 198, 255, 0.5);
        }

        h2 {
          margin-bottom: 20px;
        }

        input {
          margin-bottom: 20px;
        }

        button {
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

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px #00c6ff;
        }

        .back {
          background: gray;
          margin-top: 15px;
        }

        .result {
          margin-top: 20px;
          background: rgba(0,0,0,0.7);
          padding: 10px;
          border-radius: 10px;
          max-height: 200px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}
