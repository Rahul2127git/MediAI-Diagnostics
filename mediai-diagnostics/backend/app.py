from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import pandas as pd
import pytesseract
from PIL import Image
import fitz  # PyMuPDF

app = FastAPI()

# ✅ CORS (IMPORTANT)
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

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = ""

    # 📄 PDF
    if file.filename.endswith(".pdf"):
        doc = fitz.open(file_path)
        for page in doc:
            extracted_text += page.get_text()

    # 📊 CSV
    elif file.filename.endswith(".csv"):
        df = pd.read_csv(file_path)
        extracted_text = df.to_string()

    # 📊 Excel
    elif file.filename.endswith(".xlsx") or file.filename.endswith(".xls"):
        df = pd.read_excel(file_path)
        extracted_text = df.to_string()

    # 🖼️ Image
    elif file.filename.endswith((".png", ".jpg", ".jpeg")):
        img = Image.open(file_path)
        extracted_text = pytesseract.image_to_string(img)

    else:
        return {"error": "Unsupported file format"}

    # 🔍 SIMPLE AI LOGIC (Demo)
    result = analyze_health(extracted_text)

    # cleanup
    os.remove(file_path)

    return result


# 🧠 AI LOGIC (BASIC — YOU CAN IMPROVE LATER)
def analyze_health(text):
    text = text.lower()

    risk = "Normal"
    recommendations = []

    if "glucose" in text:
        risk = "Risk"
        recommendations.append("Monitor sugar levels")

    if "cholesterol" in text:
        risk = "Risk"
        recommendations.append("Reduce oily food")

    if "hemoglobin" in text:
        recommendations.append("Check iron levels")

    if len(recommendations) == 0:
        recommendations.append("All parameters look normal")

    return {
        "status": risk,
        "recommendations": recommendations
    }
