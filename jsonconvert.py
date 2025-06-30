import pandas as pd

# Load the Excel file
df = pd.read_excel("data1_converted.xlsx")

# Convert to JSON and save
df.to_json("data.json", orient="records", indent=2, force_ascii=False)

print("✅ Converted to data.json")
