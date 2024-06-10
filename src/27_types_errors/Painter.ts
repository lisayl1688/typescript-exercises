import Artist from './Artist';

class Painter extends Artist {
  public style: string = '';
  constructor(name: string, yearOfBirth: number, yearOfDeath?: number) {
    super(name, yearOfBirth, yearOfDeath);
  }
}

export default Painter;
