from fastapi import FastAPI, File, UploadFile
import shutil
from utils.parser import extract_data
from utils.analyzer import analyze_report

app = FastAPI()

@app.get("/")
def home():
    return {"message": "MediAI Diagnostics API Running"}

@app.post("/analyze/")
async def analyze(file: UploadFile = File(...)):
    file_path = f"temp_{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    data = extract_data(file_path)
    result = analyze_report(data)

    return result