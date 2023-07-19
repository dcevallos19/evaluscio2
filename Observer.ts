
interface Observer {
    actualizar(ciudad: Ciudad1): void;
  }
  
  class Ciudad0{
  
    private observadores: Observer[] = [];
  
    agregarObservador(observador: Observer): void {
      this.observadores.push(observador);
    }
  
    eliminarObservador(observador: Observer): void {
      const index = this.observadores.indexOf(observador);
      if (index !== -1) {
        this.observadores.splice(index, 1);
      }
    }
  
    notificarObservadores(): void {
      for (const observador of this.observadores) {
        observador.actualizar(this);
      }
    }
  
    set poblacion(poblacion: number) {
      this.poblacion = poblacion;
      this.notificarObservadores();
    }
  }
  
  class ObservadorConsola implements Observer {
    actualizar(ciudad: Ciudad1): void {
      console.log(`Población actualizada de ${ciudad.ciudad1}: ${ciudad.ciudad1}`);
    }
  }
  
  const ciudad1 = new Ciudad1();
  ciudad1.nombre = "Madrid";
  ciudad1.poblacion = 3266126;
  
  const observadorConsola = new ObservadorConsola();
  ciudad1.agregarObservador++(observadorConsola);
  
  ciudad1.poblacion1 = 4000000;
  