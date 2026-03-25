from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

import pandas as pd
from PIL import Image
import pytesseract

app = FastAPI()

# ✅ CORS FIX (IMPORTANT)
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

# 🔥 MAIN ANALYZE API
@app.post("/analyze/")
async def analyze(file: UploadFile = File(...)):
    file_ext = file.filename.split(".")[-1].lower()
    file_path = f"temp_{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        # 📄 PDF
        if file_ext == "pdf":
            return {"type": "PDF", "message": "PDF received", "file": file.filename}

        # 📊 CSV
        elif file_ext == "csv":
            df = pd.read_csv(file_path)
            return {
                "type": "CSV",
                "columns": list(df.columns),
                "rows": len(df)
            }

        # 📊 EXCEL
        elif file_ext in ["xlsx", "xls"]:
            df = pd.read_excel(file_path)
            return {
                "type": "Excel",
                "columns": list(df.columns),
                "rows": len(df)
            }

        # 🖼️ IMAGE (OCR)
        elif file_ext in ["png", "jpg", "jpeg"]:
            text = pytesseract.image_to_string(Image.open(file_path))
            return {
                "type": "Image",
                "extracted_text": text[:500]  # limit output
            }

        else:
            return {"error": "Unsupported file type"}

    finally:
        os.remove(file_path)
