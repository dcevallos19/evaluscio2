import { Ciudad } from "./ciudad1";
import { cuidades } from "./cuidades";
import { Pais } from "./pais";
import { Poblacion } from "./barrio";
export class cuidades {
    private static instancia: Ciudad;
    private barrios: barrios[];
  
    private constructor(public nombre: string) {
      this.barrios = [];
    }
  
    public static obtenerInstancia(nombre: string): barrios {
      if (!ciudad.instancia) {
        Ciudad.instancia = new Ciudad(nombre);
      }
      return Ciudad.instancia;
    }
  
    public agregarbarrio(barrio: barrio): void {
      this.barrios.push(barrio);
    }
  
    public mostrarDetalleCliente(cliente: Cliente): void {
      console.log("Nombre del barrio:", barrio.nombre);
      console.log("barrio escogida:", cliente.barrio.nombre);
      console.log("Sala de cine:", cliente.sala.numero);
    
    
      }
  
    }
