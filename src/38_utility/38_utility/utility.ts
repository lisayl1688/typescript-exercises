
export {};
interface IPerson {
  name: string;
  age?: number;
  email: string;
  address: string;
  phone: string;
  gender: string;
  // ? readonly kann ich auch selbst im Interface verwenden
  // readonly gender: string;
}

const person1: IPerson = {
  name: 'Joe',
  email: 'joe@gmail.com',
  address: 'Main Street 22, NYC',
  phone: '0545456 546454',
  gender: 'male'
};

// * ich will bei der Person nur einige Eigenschaften vergeben - ich will dabei das ursprüngliche Interface nicht verändern
// ? utility type : Partial
// ? ich lege einen Datentyp an, der auf IPerson beruht, aber es müssen nicht alle Eigenschaften gesetzt werden
// ? bei Partial muss ich in eckigen Klammern den Datentyp angeben
type PartialPerson = Partial<IPerson>;

// ? ich kann auch ein Partial interface nutzen, dann muss ich extends benutzen:
interface IPartialPerson extends Partial<IPerson> {}

const partialPerson: PartialPerson = {
  name: 'Sam',
  email: 'sam@gmx.de'
};

console.log(person1);
console.log(partialPerson);

// ? partial bei Klassen
class User {
  // ? Kurzschreibweise für direkt Eigenschaften anlegen und public machen
  constructor(public id: number, public name: string, public email: string) {
    // ? ich spare mir diese lange Schreibweise
    // ? this.email = email...
  }
}

// ? in den eckigen Klammern der Klassenname (=Datentyp)
// ? diesen Typ erzeugt TypeScript dadurch
// ? type PartialUser = {
// ?    id?: number | undefined;
// ?    name?: string | undefined;
// ?    email?: string | undefined;
// ? }
type PartialUser = Partial<User>;

// * ich hab eine Oberfläche, in der ich Userdaten ändern kann und will nur einzelne Eigenschaften neu setzen, nicht den ganzen User
const existingUser: User = new User(33, 'John Doe', 'j.d@gmail.com');
const changedUserData: PartialUser = { email: 'john.d@web.de' };

// ? in der Funktion soll der Ursprungsuser und die geänderten Felder/Eigenschaften des Users übergeben werden
function updateUser(user: User, userToUpdate: PartialUser) {
  // ? mit {} ein neues Objekt erzeugen
  // ? alle Eigenschaften und Werte von user setzen
  // ? alle vorhanden Eigenschaften mit denen von userToUpdate überschreiben
  return { ...user, ...userToUpdate };
}

const updatedUser = updateUser(existingUser, changedUserData);
console.log(updatedUser);

// ? Rückblick: so sah der Spread-Operator bei Arrays aus
const names1 = ['Susan', 'Mike'];
const names2 = ['Frank', 'Lily'];
// ? 2 Arrays zusammenführen
const allNames = [...names1, ...names2];
console.log(allNames);

// * ich will, dass bei IPerson alle Eigenschaften - auch age - Pflicht sind, will das eigentlich Interface nicht verändern
// ? Utility Type: Required
// ? type RequiredPerson = {
// ?     name: string;
// ?     age: number;
// ?     email: string;
// ?     address: string;
// ?     phone: string;
// ?     gender: string;
// ? }
type RequiredPerson = Required<IPerson>;
const person2: RequiredPerson = {
  name: 'Tommy',
  age: 41,
  email: 'tommy@gmx.de',
  address: 'Main Street 22, NYC',
  phone: '0545456 546454',
  gender: 'male'
};

console.log(person2);

// * ich will mir nur name, address und phone aus dem Ursprungsinterface holen
// ? Utility Type: Pick
// ? ich pick mir nur einige Eigenschaften raus
// ? ich gebe zuerst den Datentyp an, hier IPerson
// ? dann gebe ich als String die Eigenschaften an, die ich herauspicken will und trennen sie mit |
// ?  type PickPerson = {
// ?      name: string;
// ?      address: string;
// ?      phone: string;
// ?  }
type PickPerson = Pick<IPerson, 'name' | 'address' | 'phone'>;
const pickPerson: PickPerson = {
  name: 'Johnny',
  address: 'Forrest Hills 33, NYC',
  phone: '546545646454'
};

console.log(pickPerson);

// * ich will bestimmte Eigenschaften weglassen, z. B. phone und email
// ? Utility Type: Omit - Gegenteil von Pick
// ? type OmitPerson = {
// ?     name: string;
// ?     age?: number | undefined;
// ?     address: string;
// ?     gender: string;
// ? }

// * Union type - nutze ich nur bei Type definitionen
type Continents = 'Africa' | 'Europe' | 'America';

// ! bei Utility Types bedeutet das nicht oder sondern "und" bzw. steht für eine Auflistung von Werten mit Pipe-Symbol getrennt
type OmitPerson = Omit<IPerson, 'phone' | 'email'>;
const omitPerson: OmitPerson = {
  name: 'Dee Dee',
  age: 55,
  address: '53rd Street, NYC',
  gender: 'male'
};

console.log(omitPerson);

// * Readonly - alle Eigenschaften schreibschützen
// * alle Eigenschaften von IPerson sollen einmal gesetzt und nicht wieder geändert werden können
type ReadonlyPerson = Readonly<IPerson>;
// ? type ReadonlyPerson = {
// ?     readonly name: string;
// ?     readonly age?: number | undefined;
// ?     readonly email: string;
// ?     readonly address: string;
// ?     readonly phone: string;
// ?     readonly gender: string;
// ? }
const readonlyPerson: ReadonlyPerson = {
  name: 'Marky',
  age: 77,
  address: 'Central Park 1, NYC',
  phone: '',
  email: '',
  gender: ''
};
console.log(readonlyPerson);
// ? ich kann die Eigenschaften nicht mehr setzen, dann kommt ein Fehler
// readonlyPerson.email = 'marky@gmail.com';
// readonlyPerson.address = 'new address'

// * ich will einzelne Werte aus einem Type ausschließen
// ? ähnlich wie Enum nur als Type geschrieben
type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

// * alle Werte von Orderstatus übernehmen,aber Cancelled weglassen
// ? für UnionTypes besser Exclude verwenden
type OrderStatusWithoutCancel = Exclude<OrderStatus, 'Cancelled'>;
const orderStatus1: OrderStatus = 'Cancelled';

let orderStatus2: OrderStatusWithoutCancel = 'Delivered';
// orderStatus2 = 'Cancelled' - geht nicht
console.log(orderStatus1);
console.log(orderStatus2);
