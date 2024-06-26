// ? ich kann die Methode hier direkt aufrufen, weil sie statisch ist
import ValidatorService from './ValidatorService';

// ? ich muss keinen new ValidatorService anlegen
if (ValidatorService.validateEmail('testasdfasdf')) {
  console.log('This is a valid email');
} else {
  console.log('This is not a valid email');
}

if (ValidatorService.validatePassword('9340ru2jkserfjskejrlekrje3irudf')) {
  console.log('This is a valid password');
}
