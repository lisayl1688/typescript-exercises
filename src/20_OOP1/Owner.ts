
class Owner {
    name: string;
    address: string;
    postalCode: string;
    city: string;
    birthday?: Date;
  
    constructor(name: string, address: string, pc: string, city: string) {
      this.name = name;
      this.address = address;
      // ? die Parameter müssen nicht genauso heißen wie die Eigenschaften, es empfiehlt sich aber aus Lesbarkeitsgründen
      this.postalCode = pc;
      this.city = city;
    }
  }
  
  export default Owner;
  