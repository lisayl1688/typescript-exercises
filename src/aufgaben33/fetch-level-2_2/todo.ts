// - Nutze die [JSON-Placeholder API](https://jsonplaceholder.typicode.com/posts/1/comments) und hole dort mit fetch alle Aufgaben unter https://jsonplaceholder.typicode.com/todos ab
// - Die Antwort/Response sieht so aus

import { IToDo } from "./contracts/IToDo";

// ```tsx
// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   ...
// ]
// ```

 

// - Lege ein Interface IToDo mit den entsprechenden Datentypen an
// - Verwende das Interface beim fetch
// - Zeige die Aufgaben in deiner HTML-Seite an
// - Die Aufgaben sollen alphabetisch nach Titel sortiert werden
// - Verwende unterschiedliche Farben, je nachdem ob die Aufgabe erledigt oder noch offen ist
// - Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

// #

//? url connecten
const todoURL = 'https://jsonplaceholder.typicode.com/todos';

//? html connecten
const todoOutput = document.getElementById('output') as HTMLOutputElement;

//? todos fetchen und in html anzeigen lassen
fetch (todoURL)
.then((response: Response) => {
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  // ? hier können einmal Wizards, Spells oder Houses drinstecken, deshalb data so allgemein
  .then ((todo: IToDo[]) => {
      const allTodoTitels = todo.map((todo) => todo.title);
      const sortedTitels = allTodoTitels.sort();
      const titlesHtml = sortedTitels.map(title => `<p>${title}</p>`).join('');
      const allComlplete= todo.map((todo) => todo.completed);
      const allNotCompleted = allComlplete.every(completed => completed === false);
      if(allNotCompleted) {
        todoOutput.style.color = 'red';
      }
      else{
        todoOutput.style.color = 'olive';
      }
      todoOutput.innerHTML = titlesHtml;
      
  })
  .catch((error: Error) => {
    console.error(error);
  });


