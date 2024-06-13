// - Lege eine Datei homework.ts an
// - Lege dort drei Promises vom Typ string an
// - Das erste Promise gibt nach 20 Sekunden “Exercise 1 done.” zurück
// - Das erste Promise gibt nach 30 Sekunden “Exercise 2 done.” zurück
// - Das erste Promise gibt nach 40 Sekunden “Exercise 3 done.” zurück
// - Lege eine homework.html an und verbinde sie mit homework.ts
// - Lege dort eine Überschrift “Doing my homework” an
// - Darunter soll ein Paragraph angeordnet sein - dort steht am Anfang “Starting…”
// - Wenn das erste Promise resolved wird, wird der entsprechende Text “Exercise 1 done.” im Paragraph angezeigt
// - Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

const workingOnHomeworks = document.getElementById('continueHomework') as HTMLParagraphElement

const promise20Seconds: Promise<string> = new Promise((resolve, reject) => {
  const nach20Sekunden = setTimeout(()=>{
    if (nach20Sekunden) {
      resolve("Exercise 1 done");
    } else {
      reject("not finished");
    }
  },20*1000)
       

});

const promise30Seconds: Promise<string> = new Promise((resolve, reject) => {
    const nach30Sekunden = setTimeout(()=>{
      if (nach30Sekunden) {
        resolve("Exercise 2 done");
      } else {
        reject("not finished");
      }

    },30*1000)
       
});

const promise40Seconds: Promise<string> = new Promise((resolve, reject) => {
    const nach40Sekunden = setTimeout(()=>{
      if (nach40Sekunden) {
        resolve("Exercise 3 done");
      } else {
        reject("not finished");
      }
    },40*1000)
      

});


if(workingOnHomeworks) {
    promise20Seconds
    .then(()=>{
        const homework1 = document.createElement('p');
        homework1.innerHTML = "Exercise 1 done.<br>";
          workingOnHomeworks.appendChild(homework1);
    })
    .catch((inProgress: string) => {
        console.log(inProgress);
    })
}

if(workingOnHomeworks) {
    promise30Seconds
    .then(()=>{
        const homework2 = document.createElement('p');
        homework2.innerHTML = "Exercise 2 done.<br>";
          workingOnHomeworks.appendChild(homework2);
    })
    .catch((inProgress: string) => {
        console.log(inProgress);
    })
}

if(workingOnHomeworks) {
    promise40Seconds
    .then(()=>{
        const homework3 = document.createElement('p');
        homework3.innerHTML = "Exercise 3 done.<br>";
          workingOnHomeworks.appendChild(homework3);
    })
    .catch((inProgress: string) => {
        console.log(inProgress);
    })
}







