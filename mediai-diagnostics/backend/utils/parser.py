import pandas as pd
import pytesseract
from pdf2image import convert_from_path

def extract_data(file_path):
    if file_path.endswith(".csv"):
        df = pd.read_csv(file_path)
        return df.to_dict()

    elif file_path.endswith(".pdf"):
        images = convert_from_path(file_path)
        text = ""
        for img in images:
            text += pytesseract.image_to_string(img)
        return {"text": text}

    elif file_path.endswith(".jpg") or file_path.endswith(".png"):
        text = pytesseract.image_to_string(file_path)
        return {"text": text}

    return {}