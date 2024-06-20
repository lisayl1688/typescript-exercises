import { IHead, IHogwartsHouse, ITrait } from './contracts/IHogwartsHouse';
import { ISpell } from './contracts/ISpell';

console.log('harry-potter.ts');

// * Immer am Anfang, wenn ich Schnittstellen aufrufe und mehrere Endpunkt/Ressourcen/Routen habe, die URLs festlegen
// * BaseURL
const BASE_URL = 'https://wizard-world-api.herokuapp.com';
const HOUSES_URL = `${BASE_URL}/Houses`;
const SPELLS_URL = `${BASE_URL}/Spells`;
const WIZARDS_URL = `${BASE_URL}/Wizards`;

// * Elemente holen
const wizardLink = document.getElementById('nav-wizards');
const housesLink = document.getElementById('nav-houses');
const spellsLink = document.getElementById('nav-spells');
const contentDiv = document.getElementById('content');

// * Event-Listener für die Nav-Items
wizardLink?.addEventListener('click', () => {
  console.log('Wizards clicked');
});

housesLink?.addEventListener('click', () => {
  console.log('Houses clicked');
  // ? wir geben die URL mit und einen String zum unterscheiden, wie die Elemente dargestellt werden sollen
  fetchAndDisplay(HOUSES_URL, 'Houses');
});

spellsLink?.addEventListener('click', () => {
  console.log('Spells clicked');
  fetchAndDisplay(SPELLS_URL, 'Spells');
});

function fetchAndDisplay(url: string, routeName: string) {
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    // ? hier können einmal Wizards, Spells oder Houses drinstecken, deshalb data so allgemein
    .then((data) => {
      if (contentDiv) {
        if (routeName === 'Houses') {
          // ? mit as kann ich das allgemeine data in ein Array von IHogwartsHouses umwandeln
          const houses = data as IHogwartsHouse[];
          contentDiv.innerHTML = createHouseList(houses);
        } else if (routeName === 'Spells') {
          // ? mit as kann ich das allgemeine data in ein Array von ISpell umwandeln
          const spells = data as ISpell[];
          contentDiv.innerHTML = createSpellsList(spells);
        }
      }
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

function createHouseList(houses: IHogwartsHouse[]): string {
  // * Alternative Art, um die HTML-Elemente zu erzeugen - statt mit createElement und appendChild
  // ? hier würde ohne das join(', ') die einzelnen Element mit Komma und ohne Leerzeichen zusammengefügt
  const listElementsOfHouses = houses.map((house: IHogwartsHouse) => {
    return `<li>
      <p>Id: ${house.id}</p>
      <p>Name: ${house.name}</p>
      <p>House Colours: ${house.houseColours}</p>
      <p>Founder: ${house.founder}</p>
      <p>Animal: ${house.animal}</p>
      <p>Element: ${house.element}</p>
      <p>Ghost: ${house.ghost}</p>
      <p>CommonRoom: ${house.commonRoom}</p>
      <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`).join(', ')}</p>
      <p>Traits: ${house.traits.map((trait: ITrait) => trait.name).join(', ')}</p>
      </li>`;
  });
  //   <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`)}</p>
  //   <p>Traits: ${house.traits.map((trait: ITrait) => trait.name)}</p>
  // ? die List-Elemente für die Houses stecken in einem mit map erzeugten Array - ich will einen langen String daraus machen
  // ? daher join um einen langen String daraus zu machen - es soll kein Komma dazwischen sein
  return `<ul>${listElementsOfHouses.join('')}</ul>`;
}

function createSpellsList(spells: ISpell[]): string {
  // ? erst alle einzelnen Listenelemente für die Spells mit map erzeugen
  const listElementsOfSpells = spells.map((spell: ISpell) => {
    return `<li>
        <p>Id: ${spell.id}</p>
        <p>Name: ${spell.name}</p>
        <p>Incantation: ${spell.incantation}</p>
        <p>Effect: ${spell.effect}</p>
        <p>Type: ${spell.type}</p>
        </li>`;
  });
  return `<ul>${listElementsOfSpells.join('')}</ul>`;
}
