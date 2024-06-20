import { ICountry } from './contracts/ICountry';

console.log('countries.ts');

const BASE_URL = 'https://restcountries.com/v3.1';
const ALLCOUNTRIES_URL = `${BASE_URL}/all`;

// * Element für content
const contentDiv = document.getElementById('content');

fetchAllCountries();
// ? für Suchfunktion - Ergebnisse zwischenspeichern
let allCountries: ICountry[] = [];
// * function getAllCountriesPromise(): Promise { return fetch()}

// * hier direkt in eine Funktion, damit wir den fetch ggf. mehrfach ausführen können und nicht nur einmal
// * beim Seite laden
function fetchAllCountries() {
  fetch(ALLCOUNTRIES_URL)
    .then((response: Response) => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((countries: ICountry[]) => {
      displayCountries(countries);
      // ? allCountries nach dem Abholen zwischenspeichern
      allCountries = countries;
    });
}

function displayCountries(countries: ICountry[]) {
  if (contentDiv) {
    const singleCountryDivs = countries.map((country: ICountry) => {
      const divElement = document.createElement('div');
      const headline = document.createElement('h2');
      headline.innerHTML = country.name.official;
      divElement.appendChild(headline);

      divElement.appendChild(createParagraph('Region', country.region));
      divElement.appendChild(createParagraph('Subregion', country.subregion));
      divElement.appendChild(createParagraph('Population', country.population.toString()));

      // ? alle Werte aus dem Objekt counry.currencies - können mehrere sein
      //   "currencies": {
      //     "KHR": {
      //         "name": "Cambodian riel",
      //         "symbol": "៛"
      //     },
      //     "USD": {
      //         "name": "United States dollar",
      //         "symbol": "$"
      //     }
      // },
      // ? es gibt Fälle in denen currencies null oder undefined ist
      // ? das müssen wir hier prüfen
      if (country.currencies) {
        // * wir machen uns mit Object.values ein Array aus den Unterobjekten
        const currencies = Object.values(country.currencies);
        // ? wir legen ein Array an in dem nur die Namen der Währungen stehen
        const currencyValueNames = currencies.map((currency) => currency.name);
        const currencyString = currencyValueNames.join(', ');
        divElement.appendChild(createParagraph('Currencies', currencyString));
      }

      return divElement;
    });
    singleCountryDivs.forEach((countryDiv) => {
      contentDiv.appendChild(countryDiv);
    });
  }
}

function createParagraph(label: string, value: string) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `${label}: ${value}`;
  return paragraph;
}
