
class Breed {
    name: string;
    activityFactor: number = 5;
    temperament: string = '';
    maxHeight: number = 0;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  export default Breed;
  