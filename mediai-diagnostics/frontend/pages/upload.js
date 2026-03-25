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
        "https://mediai-diagnostics-xxxx.onrender.com/analyze/", // 🔴 CHANGE THIS
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2>Upload Health Report</h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginTop: "20px" }}
        />

        <br /><br />

        <button
          onClick={uploadFile}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#00c6ff",
            color: "black",
            cursor: "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <h3>Results:</h3>
            <pre
              style={{
                background: "black",
                padding: "10px",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        <br />

        <Link href="/">
          <button
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              border: "none",
              borderRadius: "8px",
              background: "#ccc",
              cursor: "pointer",
            }}
          >
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
