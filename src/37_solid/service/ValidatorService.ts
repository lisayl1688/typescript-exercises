// * Wir legen eine Service-Klasse für die Validierung von Email-Adressen, Passwörtern und Usernamen an
// * diese Klasse kann dann in unserer ganzen Anwendung nutzen - den Code gibt es nur einmal
class ValidatorService {
  static validateEmail(email: string): boolean {
    // ? wie muss die Email aussehen - Regulärer Ausdruck/regular expression
    const regularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    // ? mit .test kann ich eine konrekte email regeben und prüfen, ob sie dem regulären Ausdruck entspricht
    // ? test gibt true oder false zurück
    return regularExpression.test(email);
  }

  static validatePassword(password: string): boolean {
    return password.length >= 12;
  }

  // ? ich muss nur an einer Stelle festlegen, wie lange der Username in meiner Anwendung sein muss
  static validateUsername(userName: string): boolean {
    return userName.length > 3;
  }
}

export default ValidatorService;
