console.log('shoe-shop.ts');

// * Funktion, die über einen Promise ein Array von Schuhen zurückgibt - das was später mal eine echte Schnittstelle machen würde
// ? das Promise soll ein Array von Schuhnamen zurückgeben
const shoePromise: Promise<string[]> = new Promise((resolve, reject) => {
  // ? nach 2 Sekunden kommt das Schuhergebnis zurück
  const areShoesAvailable = Math.random() < 0.8;
  const shoes = ['Black High Heels', 'Adidas Samba', 'Green Crocs', 'Nike Air Max', 'Red Converse'];

  setTimeout(() => {
    if (areShoesAvailable) {
      resolve(shoes);
    } else {
      reject('Sorry no shoes available');
    }
  }, 5000);
});

const orderButton = document.getElementById('order-button');
const shoeOutput = document.getElementById('shoe-output');
const loadingIndicator = document.getElementById('loading');

if (orderButton && shoeOutput && loadingIndicator) {
  orderButton.addEventListener('click', () => {
    console.log('Clearing the shoe output');
    shoeOutput.innerHTML = '';
    // ? Ladeanzeige anzeigen
    loadingIndicator.style.display = 'block';
    shoePromise
      .then((shoes: string[]) => {
        // ? Schuhe anzeigen
        shoes.forEach((shoe: string) => {
          const shoeItem = document.createElement('div');
          shoeItem.innerHTML = shoe;
          shoeOutput.appendChild(shoeItem);
        });
      })
      .catch((error: string) => {
        // ? Fehlertext anzeigen
        shoeOutput.innerHTML = error;
      })
      .finally(() => {
        loadingIndicator.style.display = 'none';
      });
  });
}
