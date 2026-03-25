import { useState } from "react";
import Link from "next/link";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://YOUR-RENDER-URL.onrender.com/analyze/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="container">
      <div className="overlay">
        <h2>Upload Health Report</h2>

        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

        <br /><br />

        <button className="glow-btn" onClick={uploadFile}>
          Analyze
        </button>

        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}

        <br />
        <Link href="/">Back</Link>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: url('/bg.jpg') no-repeat center center/cover;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: zoom 20s infinite alternate;
        }

        @keyframes zoom {
          0% { background-size: 100%; }
          100% { background-size: 110%; }
        }

        .overlay {
          backdrop-filter: blur(15px);
          background: rgba(0,0,0,0.5);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          color: white;
        }

        .glow-btn {
          padding: 10px 20px;
          border-radius: 8px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          border: none;
          color: white;
          cursor: pointer;
          box-shadow: 0 0 15px #00c6ff;
        }
      `}</style>
    </div>
  );
}
