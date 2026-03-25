import { useState } from "react";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  // 📊 Dummy values (you can later replace with real extracted values)
  const chartData = {
    labels: ["Glucose", "Cholesterol", "Hemoglobin"],
    datasets: [
      {
        label: "Health Values",
        data: [90, 180, 13],
        backgroundColor: ["#00c853", "#ffab00", "#00c6ff"],
      },
    ],
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
          <div className="result-card">

            <h2>Health Analysis</h2>

            {/* STATUS */}
            <div className={`status ${result.status?.toLowerCase()}`}>
              {result.status}
            </div>

            {/* SCORE */}
            <div className="score-box">
              <p>Health Score</p>
              <div className="progress">
                <div
                  className={`bar ${result.status?.toLowerCase()}`}
                  style={{
                    width:
                      result.status === "Normal"
                        ? "90%"
                        : result.status === "Risk"
                        ? "60%"
                        : "30%"
                  }}
                ></div>
              </div>
            </div>

            {/* CHART */}
            <div className="chart">
              <Bar data={chartData} />
            </div>

            {/* RECOMMENDATIONS */}
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
          width: 450px;
        }

        button {
          margin: 10px;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(45deg, #00c6ff, #0072ff);
          color: white;
          cursor: pointer;
        }

        /* RESULT */
        .result-card {
          margin-top: 20px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(0,0,0,0.7);
        }

        .status {
          margin: 15px 0;
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

        /* SCORE */
        .progress {
          height: 12px;
          background: #333;
          border-radius: 10px;
          overflow: hidden;
        }

        .bar {
          height: 100%;
        }

        .bar.normal {
          background: #00c853;
          width: 90%;
        }

        .bar.risk {
          background: #ffab00;
          width: 60%;
        }

        .bar.critical {
          background: #d50000;
          width: 30%;
        }

        .chart {
          margin: 20px 0;
        }

        ul {
          text-align: left;
        }
      `}</style>
    </div>
  );
}
