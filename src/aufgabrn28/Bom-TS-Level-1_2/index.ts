// - Lernziel: TypeScript-Eventhandling und Timer-Function.
// - **Bitte halte dich an den Typescript-Standard.**
// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().

const percentCounterElement = document.getElementById('percentCounter') as HTMLDivElement;
const counterButton = document.getElementById ('btn') as HTMLButtonElement;


function countFrom100To1Percent (event: MouseEvent){
    event.preventDefault();
    if (percentCounterElement) {
        let percent = 100;
        const downTo1Percent = window.setInterval(() => {
            percentCounterElement.innerHTML = percent.toString()+"%";
            percent--;
            if (percent) {
                percentCounterElement.innerHTML = percent.toString()+"%";
            } if (percent === 0) {
                let percent = 0;
                percentCounterElement.innerHTML = percent.toString()+"%";
                clearInterval(downTo1Percent);
              }
          }, 50);
    }
    

}


counterButton?.addEventListener('click', countFrom100To1Percent);






