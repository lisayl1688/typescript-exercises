let infoElement = document.getElementById('info')as HTMLElement;
let containerElement = document.getElementById('container')as HTMLElement;

if(infoElement){
    infoElement.innerHTML="<h1>Hello World</h1>";
    infoElement.innerHTML+="<h2>How are you?</h2>";
}
if(containerElement){
    containerElement.innerHTML="<p>This is a paragraph</p>";
    containerElement.innerHTML+="<input type='text'>";
}