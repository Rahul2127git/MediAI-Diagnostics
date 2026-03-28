import Link from "next/link";

export default function Home() {
  return (
    <div style={{textAlign:"center", padding:"50px"}}>
      <h1>MediAI Diagnostics</h1>
      <p>AI-powered blood report analysis</p>

      <Link href="/upload">
        <button>Upload Report</button>
      </Link>
    </div>
  );
}