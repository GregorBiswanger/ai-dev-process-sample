# Joke Web-Service (Node.js + Express)

Kleiner Web-Service, der unter dem Pfad `/api/jokes` einen zufälligen Joke (von 10) als JSON liefert.

Installation:

```bash
cd /workspaces/ai-dev-process-sample
npm install
```

Starten:

```bash
npm start
# oder: node index.js
```

Beispiel-Aufruf:

```bash
curl http://localhost:3000/api/jokes
```

Antwort (Beispiel):

```json
{"id":3, "joke":"Warum hat der Mathebuch-Autor seinen Job gekündigt? – Zu viele Probleme."}
```

Hinweis: Der Service läuft standardmäßig auf Port 3000. PORT kann via Umgebungsvariable überschrieben werden.
