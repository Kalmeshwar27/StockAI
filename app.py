from flask import Flask, jsonify, Response
from flask_cors import CORS
import json
from collections import Counter

app = Flask(__name__)
CORS(app)  # Allow all origins

# Load and process data at startup
try:
    with open("data.json", encoding="utf-8") as f:
        all_articles = json.load(f)

    # Count keyword frequency
    keyword_list = [a.get("keywords", "").strip() for a in all_articles if a.get("keywords")]
    keyword_freq = Counter(keyword_list)

    # Top 10 keywords
    top_keywords = [kw for kw, _ in keyword_freq.most_common(10)]

    # Filter articles to include only those with top keywords
    article_data = [
        article for article in all_articles
        if article.get("keywords", "").strip() in top_keywords
    ]

    # Sort by keyword rank
    keyword_rank = {kw: i for i, kw in enumerate(top_keywords)}
    article_data.sort(key=lambda x: keyword_rank.get(x.get("keywords", "").strip(), float("inf")))

    # Prepare tags
    tags_data = [{"id": i + 1, "Tag": kw} for i, kw in enumerate(top_keywords)]

    print("✅ JSON files loaded and processed.")

except Exception as e:
    print("❌ Error loading JSON files:", e)
    tags_data = []
    article_data = []

@app.route("/")
def home():
    return "✅ Flask API is running. Use /tags or /data."

@app.route("/tags", methods=["GET"])
def get_all_articles_as_array():
    return jsonify(article_data)


@app.route("/data", methods=["GET"])
def get_all_data():
    return jsonify(article_data)

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5500))
    app.run(host="0.0.0.0", port=port)
