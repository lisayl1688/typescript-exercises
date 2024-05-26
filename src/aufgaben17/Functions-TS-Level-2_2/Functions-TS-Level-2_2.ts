// Functions-TS-Level-2_2

const firstName17= document.getElementById('firstName') as HTMLInputElement;
const lastName17= document.getElementById('lastName')as HTMLInputElement;
const email17= document.getElementById('email')as HTMLInputElement;
const phone17= document.getElementById('phone')as HTMLInputElement;
const submitButton17 = document.getElementById('submitButton')as HTMLButtonElement;
const greetingOutput = document.getElementById('greetingOutput')as HTMLElement;

// - Diese Aktionen sollen ausgeführt werden, wenn man auf den Submit-Button klickt
//     - ein Objekt vom Typ NewCustomer wird angelegt
//     - greetNewUser1 wird aufgerufen
//     - greetNewUser2 wird aufgerufen
//     - das Ergebnis von greetNewUserVar1 wird auf die Konsole geloggt
//     - das Ergebnis von greetNewUserVar2 wird im HTML unterhalb des Submit-Buttons ausgegeben

submitButton17.addEventListener('click', (event:Event) => {
    event.preventDefault();
    const newCustomer: NewCustomer17 = {
        firstName17: firstName17.value,
        lastName17: lastName17.value,
        email17: email17.value,
        phone17: phone17.value,
    };

    console.log(newCustomer);
    let greetNewUser2Mesage = greetNewUser2(newCustomer.firstName17, newCustomer.lastName17, newCustomer.email17, newCustomer.phone17);
    const showGreetNewUser2 = document.createElement('p');
    showGreetNewUser2.innerHTML = `${greetNewUser2Mesage}`;
    greetingOutput.appendChild(showGreetNewUser2);
});


type NewCustomer17 = { firstName17 : string; lastName17: string; email17?: string; phone17?: string };


function greetNewUser1(costumer:NewCustomer17) : string {
    if (costumer.email17) {
        console.log(`Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via ${costumer.email17}`);
        return `Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via ${costumer.email17}` ;
    } else if (costumer.phone17){
        console.log(`Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via ${costumer.phone17}`);
        return `Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via ${costumer.phone17}`;
    }else if (costumer.email17&&costumer.phone17){
        console.log(`Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via  ${costumer.email17} and ${costumer.phone17}`);
        return`Hello ${costumer.firstName17} ${costumer.lastName17}. We will contact you via  ${costumer.email17} and ${costumer.phone17}`;
    }else {
        console.log(`Hello ${costumer.firstName17} We will not contact you`);
        return `Hello ${costumer.firstName17} We will not contact you`;
    }
    }
function greetNewUser2(firstName17:string,  lastName17: string, email17?: string, phone17?: string) :string{
    if (email17) {
        console.log(`Hello ${firstName17} ${lastName17}. We will contact you via  ${email17}`);
        return `Hello ${firstName17} ${lastName17}. We will contact you via ${email17}` ;
    } else if (phone17){
        console.log(`Hello ${firstName17} ${lastName17}. We will contact you via ${phone17}`);
        return `Hello ${firstName17} ${lastName17}. We will contact you via ${phone17}`;
    }else if (email17&&phone17){
        console.log(`Hello ${firstName17} ${lastName17}. We will contact you via  ${email17} and ${phone17}`);
        return`Hello ${firstName17} ${lastName17}. We will contact you via  ${email17} and ${phone17}`;
    }else {
        console.log(`Hello ${firstName17} We will not contact you`);
        return `Hello ${firstName17} We will not contact you`;
    }
  }

