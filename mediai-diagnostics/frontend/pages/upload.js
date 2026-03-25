import { useState } from "react";
import { useRouter } from "next/router";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

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
    } catch (err) {
      alert("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div className="container">

      <div className="content">
        <h1>Upload Health Report</h1>

        <input
          type="file"
          accept=".pdf,.csv,.xlsx,.xls,.jpg,.png"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleUpload}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        <button onClick={() => router.push("/")}>
          Back Home
        </button>

        {/* 🔥 RESULT UI */}
        {result && (
          <div className="result-card">

            <h2>Analysis Result</h2>

            <div className={`status ${result.status?.toLowerCase()}`}>
              {result.status}
            </div>

            <h3>Recommendations</h3>

            <ul>
              {result.recommendations?.map((rec, i) => (
                <li key={i}>✔ {rec}</li>
              ))}
            </ul>

          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          background: url('/bg.jpg') center/cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content {
          backdrop-filter: blur(15px);
          background: rgba(0,0,0,0.6);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          color: white;
          width: 400px;
        }

        input {
          margin: 20px 0;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          cursor: pointer;
        }

        button:hover {
          transform: scale(1.05);
        }

        /* RESULT UI */
        .result-card {
          margin-top: 20px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(0,0,0,0.7);
          text-align: center;
        }

        .status {
          margin: 15px 0;
          padding: 10px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 18px;
        }

        /* COLORS */
        .status.normal {
          background: #00c853;
        }

        .status.risk {
          background: #ffab00;
        }

        .status.critical {
          background: #d50000;
        }

        ul {
          text-align: left;
          margin-top: 10px;
        }

        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}
