const jokeElement = document.getElementById('joke');
const nextJokeButton = document.getElementById('next-joke');

if (jokeElement && nextJokeButton) {
  nextJokeButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/jokes');
      const joke = await response.json();
      jokeElement.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
      jokeElement.textContent = 'Fehler beim Abrufen des Witzes.';
    }
  });
} else {
  console.error('DOM-Elemente konnten nicht gefunden werden.');
}
