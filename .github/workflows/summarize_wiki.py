import requests
from bs4 import BeautifulSoup
from transformers import pipeline

WIKI_URL = "https://github.com/GregorBiswanger/ai-dev-process-sample/wiki"
response = requests.get(WIKI_URL)
soup = BeautifulSoup(response.content, 'html.parser')
text = ' '.join(p.get_text() for p in soup.find_all('p'))
summarizer = pipeline("summarization")
summary = summarizer(text, max_length=130, min_length=30, do_sample=False)[0]['summary_text']
print(summary)
