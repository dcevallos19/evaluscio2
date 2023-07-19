class Singleton {
    private constructor() {}
  }
  
  let singleton = new Singleton(); // NOT ALLOWED

  
  class Singleton {
    private static instance: Singleton;
  
    private constructor(public name: string) {}
  
    static getInstance() {
      if (this.instance) return this.instance;
      this.instance = new Singleton("cuidad");
      return this.instance;
    }
  }
  
  let singleton = Singleton.getInstance();
  
  console.log(singleton); // Singleton {name: 'cuidad'}
  
let singleton1 = Singleton.getInstance(); // Singleton {name: 'Madrid'}
let singleton2 = Singleton.getInstance(); // Singleton {name: 'Londres'}