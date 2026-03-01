import pdfplumber
import json

pdf_path = r'd:\Portfolio Deployed\Final_Resume.pdf'

with pdfplumber.open(pdf_path) as pdf:
    full_text = ""
    for page in pdf.pages:
        full_text += page.extract_text() + "\n"

print(full_text)
