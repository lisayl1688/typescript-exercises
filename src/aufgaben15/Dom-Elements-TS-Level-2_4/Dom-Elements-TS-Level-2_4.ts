

const farbAuswahlSelect = document.getElementById('farbeAuswahlen')as HTMLSelectElement;
const changeColorButton = document.getElementById('button')as HTMLButtonElement;
const body = document.getElementById('body')as HTMLElement;


changeColorButton?.addEventListener('click', (event:Event) => {
event.preventDefault();
const farbAuswahlValue = farbAuswahlSelect.value
const valueWithoutSpaces = farbAuswahlValue.split(' ').join('');
const valueToLowercaseWithoutSpace = valueWithoutSpaces.toLowerCase();
body.style.backgroundColor = valueToLowercaseWithoutSpace;

});


