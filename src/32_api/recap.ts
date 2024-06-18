// ? 1. Lege einen type IceCream mit den Eigenschaften id, name, details (optional) und price an
// Anna
type IceCream = {
  id: number;
  name: string;
  details?: string;
  price: number;
};

// ? 2. Lege ein Array mit 4 IceCream-Objekten an //Christian
const vanilla: IceCream = { id: 1, name: 'Vanilla', price: 2.0 };
const chocolate: IceCream = { id: 2, name: 'VaniChocolatella', price: 3.5 };
const strawberry: IceCream = { id: 3, name: 'Strawberry', price: 1.5 };
const mango: IceCream = { id: 4, name: 'Mango', price: 2.5 };

const iceCreams: IceCream[] = [vanilla, chocolate, strawberry, mango];

// ? 3. Lege einen Promise an, der das Array von IceCream-Objekten nach 2 Sekunden resolved // Pius
const iceCreamPromise: Promise<IceCream[]> = new Promise((resolve, reject) => {
  //setTimeout(()=>{}, 3000)
  setTimeout(() => {
    if (!iceCreams.length) {
      reject('No ice cream :(');
    }
    resolve(iceCreams);
  }, 2000);
});

// ? 4. Hänge dich an das Promise / Julian
iceCreamPromise
  // ? 5. Schreibe im 1. then-Block in die details (Pablo)
  // ? This is a delicious ${flavor.name} ice cream.
  .then((iceCreams: IceCream[]) => {
    iceCreams.forEach((flavor) => {
      flavor.details = `This is a delicious ${flavor.name} ice cream.`;
    });
    return iceCreams;
  })
  // ? 6. Schreibe im 2. then-Block alle Ergebnisse in die Konsole
  .then((iceCreams: IceCream[]) => {
    console.log(iceCreams);
  })
  // ? 7. Fange im catch-Block Fehler ab
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('');
  });
