import { IPlanet, IPlanetsResponse } from './contracts/IPlanetsResponse';
// ? ist eigentlich die schönere Variante bei Vite - bei Änderungen und Speichern im CSS wird es direkt anzeigt
// ! bei link:css im HTML nicht - da muss ich selbst aktualisieren
import './planets.css';
console.log('planets.ts');

// * Base Url = der Teil der URL der immer gleich bleibt
const BASE_URL = 'https://swapi.dev/api';
const PLANETS_URL = `${BASE_URL}/planets`;
const SINGLEPLANET_URL = `${PLANETS_URL}/1`;

const planetOutput = document.getElementById('planet-output');
// ? als HMTLSpanElement casten, damit wir auf den style zugreifen können
const loadingIndicator = document.querySelector('.loader') as HTMLSpanElement;

loadingIndicator.style.display = 'none';

if (planetOutput) {
  loadingIndicator.style.display = 'block';
  fetch(PLANETS_URL)
    // ? das ist die Response, die uns der fetch-Promise zurückgibt
    // ? die dient hauptsächlich dazu ok und status-Codes abzufragen
    .then((response: Response) => {
      console.log('Response: ', response);
      if (!response.ok) {
        // ? wir werfen den Fehler selbst und landen direkt im catch ohne weiteren Code auszuführen - then wird komplett übersprungen
        throw Error(`${response.status} ${response.statusText}`);
      }
      // ? Response in echtes Objekt/Array... umwandeln
      return response.json();
    })
    // ? hier steckt das Response-Objekt drin, dass wir auch in Postman als Result sehen
    .then((planetsResponse: IPlanetsResponse) => {
      console.log('PlanetsResponse: ', planetsResponse);
      return planetsResponse.results;
    })
    // ? wir machen hier aus Lesbarkeitsgründen noch einen Zwischenschritt, indem wir planetsResponse.results weitergeben
    // ? dort steckt dann wirklich das Array von Planeten, das uns interessiert und dass wir darstellen wollen
    .then((planets: IPlanet[]) => {
      // ? Anzeigen - mit Funktion, damit das fetch an sich übersichtlich bleibt
      displayPlanets(planets);
    })
    .catch((error) => {
      // ? den Fehler behandeln
      planetOutput.innerHTML = `Could not get data. Error: ${error}`;
      // console.error(error);
    })
    .finally(() => {
      loadingIndicator.style.display = 'none';
    });

  // ? hier besteht die Antwort nur aus einem Planeten-Objekt
  //   fetch(SINGLEPLANET_URL)
  //     .then((response: Response) => {
  //       console.log('Response: ', response);
  //       if (!response.ok) {
  //         throw Error(`${response.status} ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     // .then((planetsResponse: IPlanetsResponse) => {
  //     //   console.log('PlanetsResponse: ', planetsResponse);
  //     //   return planetsResponse.results;
  //     // })
  //     // .then((planets: IPlanet[]) => {
  //     //   displayPlanets(planets);
  //     // })
  //     .then((planet: IPlanet) => {
  //       // Darstellen mit
  //       displayPlanets([planet]);
  //     })
  //     .catch((error) => {
  //       planetOutput.innerHTML = `Could not get data. Error: ${error}`;
  //       // console.error(error);
  //     })
  //     .finally(() => {});
}

function displayPlanets(planets: IPlanet[]) {
  // ? in der display Funktion am Anfang immer den ganzen Output leeren
  if (planetOutput) {
    planetOutput.innerHTML = '';
    planets.forEach((planet: IPlanet) => {
      const headline = document.createElement('h2');
      headline.innerHTML = planet.name;
      planetOutput.appendChild(headline);
      // `<p><strong>Climate:</strong> ${planet.climate}<>`;
      planetOutput.appendChild(createParagraph('Rotation Period', planet.rotation_period));
      planetOutput.appendChild(createParagraph('Orbital Period', planet.orbital_period));
      planetOutput.appendChild(createParagraph('Climate', planet.climate));
      planetOutput.appendChild(createParagraph('Gravity', planet.gravity));
      planetOutput.appendChild(createParagraph('Population', planet.population));
      planetOutput.appendChild(createParagraph('Surface Water', planet.surface_water));

      const showFirstFilmButton = document.createElement('button');
      showFirstFilmButton.innerHTML = 'See first film';
      showFirstFilmButton.addEventListener('click', () => {
        if (planet.films && planet.films.length) {
          window.confirm(planet.films[0]);
        }
      });
      planetOutput.appendChild(showFirstFilmButton);
    });
  }
}

function createParagraph(label: string, value: string): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `${label}: ${value}`;
  return paragraph;
}
