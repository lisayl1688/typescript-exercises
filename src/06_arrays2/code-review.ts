let toDoItems = ['Putzen', 'Einkaufen'];

function askForUserInput() {
  let userInputTasks = window.prompt('Bitte gib 5 Tasks durch Komma getrennt ein.');
  if (!userInputTasks) {
    console.log('Du hast keine Tasks eingegeben.');
    return;
  }
  let allUserInputTasks = userInputTasks.split(',');
  if (allUserInputTasks.length !== 5) {
    console.log('Bitte gib 5 Tasks an.');
    return;
  }

  console.log(allUserInputTasks);
  // ? neue Möglichkeit um Array anzuhängen
  toDoItems = [...toDoItems, ...allUserInputTasks];
  toDoItems.concat(allUserInputTasks);

  toDoItems.push(allUserInputTasks[0]);
  toDoItems.push(allUserInputTasks[1]);
  toDoItems.push(allUserInputTasks[2]);
  toDoItems.push(allUserInputTasks[3]);
  toDoItems.push(allUserInputTasks[4]);
}

askForUserInput();