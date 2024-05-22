


const farbAuswahl = document.getElementById('farbeAuswahlen')as HTMLSelectElement;
const deleteButton = document.getElementById('button')as HTMLButtonElement;


deleteButton?.addEventListener('click', (event:Event) => {
event.preventDefault();
console.log('Simple button was clicked');
const farbeIndex = farbAuswahl.selectedIndex;
farbAuswahl.options[farbeIndex].remove();
});




  
  


