
function twoPrint(end: number) {
    for (let index = 0; index < end; index++) {
      if (index % 2 !== 0) {
        console.log(index);
      }
    }
  }
  
  // ? wir wollen ohne die Funktion umzubenennen einen schöneren Namen für den Export verwenden, den dann alle nutzen
  // * auch beim Export kann ich mit as einen Alternativnamen (Alias) setzen
  export { twoPrint as printOddNumbers };
  