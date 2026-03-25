import { useState } from "react";
import Link from "next/link";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

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
      alert(JSON.stringify(data, null, 2));
    } catch (err) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="bg">

      <h1>Upload Health Report</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>Analyze</button>

      <Link href="/">
        <button className="back">Back Home</button>
      </Link>

      <style jsx>{`
        .bg {
          height: 100vh;
          width: 100%;
          background: url("/bg.jpg") no-repeat center center/cover;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: Arial;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(0,0,0,0.7);
        }

        input {
          margin: 10px;
          padding: 10px;
          background: rgba(255,255,255,0.2);
          border: none;
          border-radius: 8px;
          color: white;
        }

        button {
          margin-top: 15px;
          padding: 12px 25px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          cursor: pointer;
          font-size: 16px;
          box-shadow: 0 0 20px rgba(0, 198, 255, 0.7);
        }

        .back {
          background: gray;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
