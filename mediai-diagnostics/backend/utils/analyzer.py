def analyze_report(data):
    result = {
        "summary": [],
        "risks": [],
        "recommendations": []
    }

    text = str(data)

    # Model 1: Parameter detection
    if "HbA1c" in text:
        result["summary"].append("HbA1c detected")

    if "7." in text:
        result["risks"].append("Possible Diabetes Risk")

    # Model 2: Pattern recognition
    if "cholesterol" in text.lower():
        result["risks"].append("Cardiovascular Risk")

    # Model 3: Recommendation
    result["recommendations"].append("Maintain healthy diet")
    result["recommendations"].append("Consult a doctor")

    return result