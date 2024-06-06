class Singer {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class TaylorSwift extends Singer {
    constructor(name: string) {
      super(name);
    }
    sing(): string {
      return "Welcome to New York";
    }
  }
  
  class JohnnyCash extends Singer {
    constructor(name: string) {
      super(name);
    }
    sing(): string {
      return "Because you're mine, I walk the line";
    }
  }
  
  class HansiHinterseer extends Singer {
    constructor(name: string) {
      super(name);
    }
    sing(): string {
      return "Hände zum Himmel, komm lass uns fröhlich sein.";
    }
  }
  
  class Adele extends Singer {
    constructor(name: string) {
      super(name);
    }
    sing(): string {
      return "We could have had it all, rolling in the deep.";
    }
  }
  
  export { Singer, TaylorSwift, JohnnyCash, HansiHinterseer, Adele };