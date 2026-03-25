import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Arial"
    }}>
      <div style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.1)",
        padding: "40px",
        borderRadius: "12px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2.5rem" }}>MediAI Diagnostics</h1>
        <p>AI-powered blood report analysis & health insights</p>

        <Link href="/upload">
          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#00c6ff",
            color: "black",
            cursor: "pointer"
          }}>
            Upload Report
          </button>
        </Link>
      </div>
    </div>
  );
}
