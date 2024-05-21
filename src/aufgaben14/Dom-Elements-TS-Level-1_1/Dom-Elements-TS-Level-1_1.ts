const inputEinkaufElement = document.getElementById('inputText')as HTMLInputElement;
const addToListButton = document.getElementById('addToList')as HTMLButtonElement;  
const myListElement = document.getElementById('myList')as HTMLUListElement;

addToListButton.addEventListener('click', () => {
   let inputValue:string = inputEinkaufElement.value;
   let listElement = document.createElement('li');
   listElement.textContent = inputValue;
   myListElement.appendChild(listElement);
   inputEinkaufElement.value="";
  });

