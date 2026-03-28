from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil

app = FastAPI()

# ✅ CORS FIX (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "MediAI Diagnostics API Running"}


@app.post("/analyze/")
async def analyze(file: UploadFile = File(...)):
    file_path = f"temp_{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # 👉 DUMMY AI LOGIC (REPLACE LATER WITH REAL)
    result = {
        "status": "Risk",
        "recommendations": [
            "Reduce sugar intake",
            "Exercise regularly",
            "Drink more water"
        ]
    }

    return {
        "analysis": "AI extracted key health metrics from your report.",
        "status": result["status"],
        "recommendations": result["recommendations"]
    }
