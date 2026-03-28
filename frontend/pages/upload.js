import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://your-render-url.onrender.com/analyze/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{textAlign:"center", padding:"50px"}}>
      <h2>Upload Health Report</h2>

      <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      <br /><br />

      <button onClick={uploadFile}>Analyze</button>

      {result && (
        <div>
          <h3>Results</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}