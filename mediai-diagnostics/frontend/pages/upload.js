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
    } catch {
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

        {/* ✅ RESULT UI */}
        {result && (
          <div className="result-card">

            <h2>🤖 AI Analysis</h2>
            <p>
              {result.analysis ||
                "AI extracted medical values from your report"}
            </p>

            <h2>📊 Insights</h2>
            <div className={`status ${result.status?.toLowerCase()}`}>
              {result.status || "No status"}
            </div>

            <h2>✅ Recommendations</h2>
            <ul>
              {result.recommendations?.length > 0 ? (
                result.recommendations.map((rec, i) => (
                  <li key={i}>✔ {rec}</li>
                ))
              ) : (
                <li>No recommendations available</li>
              )}
            </ul>

          </div>
        )}
      </div>

      {/* 🎨 CSS HERE */}
      <style jsx>{`
        .container {
          min-height: 100vh;
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
          width: 420px;
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
          background: rgba(0,0,0,0.75);
          text-align: left;
        }

        .result-card h2 {
          margin-top: 15px;
        }

        .status {
          margin: 10px 0;
          padding: 10px;
          border-radius: 10px;
          font-weight: bold;
        }

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
          margin-top: 10px;
        }

        li {
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}
