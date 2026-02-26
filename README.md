# Joke HTTP API

Ein minimaler HTTP-API-Service mit Express.js.

## Starten

```bash
npm install
npm start
```

Der Service läuft standardmäßig auf Port `3000` (oder auf dem Wert von `PORT`).

## Endpoint

- `GET /api/jokes`

Liefert zufällig einen von 10 Jokes als JSON zurück, z. B.:

```json
{
  "id": 4,
  "joke": "Treffen sich zwei Parallelgeraden. Sagt die eine: Wir sehen uns in der Unendlichkeit."
}
```
