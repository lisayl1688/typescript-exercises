// - Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.
// - Schau dir dazu auch nochmal die Dokumentation von window.navigator an
// - Hole dir die Informationen über den Browser wie folgt:
//     - Browsername
//     - Betriebssystem-Architektur
//     - Browser-Version
//     - Window Auflösung
//     - Innenhöhe und -breite des Dokuments
//     - colorDepth
//     - pixelDepth
// - **Bitte halte dich an den Typescript-Standard.**

const inputDiv = document.getElementById("inputBrowserNav") as HTMLDivElement;

if(inputDiv) {
    // const Browsername =window.navigator.userAgent 
    // inputDiv.innerHTML = "Browsername:"+Browsername.toString();
    
    // const breiteDokument= window.screen.width
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+breiteDokument.toString();
    
    // const hoeheDokument= window.screen.height
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+hoeheDokument.toString();

    // const innereBreiteDokument= window.screen.availWidth
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+innereBreiteDokument.toString();

    // const innereHoeheDokument= window.screen.availHeight
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+innereHoeheDokument.toString();

    // const colorDepth= window.screen.colorDepth
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+colorDepth.toString();

    // const pixelDepth= window.screen.pixelDepth
    // inputDiv.innerHTML = "Betriebssystem-Architektur:"+pixelDepth.toString();
    inputDiv.innerHTML = `Browsername: ${window.navigator.userAgent} <br> BreiteDokument:${window.screen.width} <br> HoeheDokument: ${window.screen.height}<br> innereBreiteDokument: ${window.screen.availWidth}<br> innereHoeheDokument: ${window.screen.availHeight}<br> colorDepth: ${window.screen.colorDepth}<br> pixelDepth: ${window.screen.pixelDepth}` 

  
}

// console.log('Browserinfo', window.navigator.userAgent);
// if (window.navigator.userAgent.includes('Chrome')) {
//   console.log('Wir sind im Chrome Browser und machen deshalb xyz');
// }
