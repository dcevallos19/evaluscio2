export class MonedaDecorator 

{}

class Ciudad1 {
  private _nombre: string;
  private _poblacion: number;
  private _pais: string;
  private _codigoPostal: string;

  constructor(nombre = "", poblacion = 0, pais = "", codigoPostal = "") {
    this._nombre = nombre;
    this._poblacion = poblacion;
    this._pais = pais;
    this._codigoPostal = codigoPostal;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get poblacion(): number {
    return this._poblacion;
  }

  set poblacion(poblacion: number) {
    this._poblacion = poblacion;
  }

  get pais(): string {
    return this._pais;
  }

  set pais(pais: string) {
    this._pais = pais;
  }

  get codigoPostal(): string {
    return this._codigoPostal;
  }

  set codigoPostal(codigoPostal: string) {
    this._codigoPostal = codigoPostal;
  }

  public obtenerInformacion(): string {
    return `Ciudad: ${this._nombre} - Población: ${this._poblacion} - País: ${this._pais} - Código Postal: ${this._codigoPostal}`;
  }
}

const ciudad1 = new Ciudad1();
ciudad1.nombre = "Madrid";
ciudad1.poblacion = 3266126;
ciudad1.pais = "España";
ciudad1.codigoPostal = "28001";

const ciudad0 = new Ciudad1("Londres", 8908081, "Reino Unido");

console.log(ciudad0.obtenerInformacion());
console.log(ciudad1.obtenerInformacion());