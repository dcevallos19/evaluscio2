import { poblacion } from "./barrio";
export class Poblacion extends Poblacion {
    constructor(nombre: string, public tipo: string) {
      super(nombre);
    }
  
    mostrarDetalle(): void {
      console.log("poblacion:", this.nombre);
      console.log("Tipo:", this.tipo);
    }
  }