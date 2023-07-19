import { pais } from "./barrio";
export class Pais extends Pais {
    constructor(nombre: string, public tamano: string) {
      super(nombre);
    }
  
    mostrarDetalle(): void {
      console.log("Bebida:", this.nombre);
      console.log("Tamaño:", this.tamano);
    }
  }