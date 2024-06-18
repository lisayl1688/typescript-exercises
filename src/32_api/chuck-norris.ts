console.log('chuck-norris.ts');

// * HTML-Element holen und uns an den Button-Click hängen
const jokeOutput = document.getElementById('joke-output');
const jokeButton = document.getElementById('joke-button');

type Joke = { icon_url: string; id: string; url: string; value: string };

jokeButton?.addEventListener('click', () => {
  if (jokeOutput) {
    // ? Button disablen, wenn geklickt wurde
    jokeButton.setAttribute('disabled', 'true');
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response: Response) => {
        if (!response.ok) {
          console.error('Response from chuck norris API not ok');
        }
        // ? zum Weiterverarbeiten
        return response.json();
      })
      .then((joke: Joke) => {
        // console.log(joke.value);
        jokeOutput.innerHTML = joke.value;
      })
      .catch((error: Error) => {
        console.error(error);
      })
      .finally(() => {
        // ? erst nachdem die Daten von der Schnittstelle geholt wurden Button wieder enablen/klickbar machen
        jokeButton.removeAttribute('disabled');
      });
  }
});
