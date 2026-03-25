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

        {/* RESULT */}
        {result && (
          <div className="result">
            <h2>Result</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
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
        }

        input {
          margin: 20px 0;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          background: #00c6ff;
          color: black;
          cursor: pointer;
        }

        .result {
          margin-top: 20px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
