console.log('hello');
const invitedPeople = [
  ['Suzy Sue', 'suzy@gmail.com'],
  ['Tommy Top', 'tommy@gmail.com'],
  ['Lucy Ludwigsen', 'l.ludwig@gmx.com'],
  ['Frankie Forster', 'f.foster@gmail.com']
];

const invitationOutput = document.getElementById('invitation-output');
if (invitationOutput) {
  for (const invitedPerson of invitedPeople) {
    console.log(invitedPerson);
    // ['Suzy Sue', 'suzy@gmail.com']
    const headlineElement = document.createElement('h2');
    // <h2>...</h2>
    headlineElement.innerText = invitedPerson[0];
    invitationOutput.appendChild(headlineElement);

    const emailElement = document.createElement('p');
    emailElement.innerText = invitedPerson[1];
    invitationOutput.appendChild(emailElement);
  }
}