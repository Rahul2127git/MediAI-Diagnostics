<div className="container">
  <div className="overlay">
    <h2>Upload Health Report</h2>

    <input type="file" onChange={(e) => setFile(e.target.files[0])} />

    <br /><br />

    <button onClick={uploadFile}>
      {loading ? "Analyzing..." : "Analyze"}
    </button>

    {result && (
      <pre>{JSON.stringify(result, null, 2)}</pre>
    )}

    <br />

    <Link href="/">Back Home</Link>
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

    button {
      padding: 10px 20px;
      border-radius: 8px;
      background: #00c6ff;
      border: none;
      cursor: pointer;
    }
  `}</style>
</div>
