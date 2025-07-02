import pandas as pd
from transformers import pipeline

# Load grammar correction model
print("Loading grammar correction model...")
grammar_corrector = pipeline("text2text-generation", model="vennify/t5-base-grammar-correction")

# Load the Excel file
input_path = "data-4.xlsx"  # Change path if needed
output_path = "Improved_Focusfeed_Content.xlsx"

# Read the file
print("Reading Excel file...")
df = pd.read_excel(input_path)

# Columns to preserve
protected_columns = ['articleTitle', 'articleLink', 'keywords', 'Published Date', 'Published Time']

# Columns to enhance
columns_to_enhance = [col for col in df.columns if col not in protected_columns]

# Enhance text using the model
def enhance_text(text):
    if pd.isna(text) or not isinstance(text, str) or len(text.strip()) == 0:
        return text
    try:
        result = grammar_corrector(text, max_length=512, truncation=True)[0]['generated_text']
        return result
    except Exception:
        return text

# Apply correction
print("Enhancing content...")
for column in columns_to_enhance:
    print(f"Processing column: {column}")
    df[column] = df[column].apply(enhance_text)

# Save the improved file
print("Saving improved file...")
df.to_excel(output_path, index=False)
print(f"Done. Saved to: {output_path}")
