export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcionE: string;


    constructor(nombre:string, apellido:string, img:string, descripcionE:string){
      this.nombre = nombre;
      this.apellido = apellido;
      this.img = img;
      this.descripcionE = descripcionE;
    }
}
