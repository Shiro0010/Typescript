import { Soldado } from "./soldado";
export class Comandante{
    private nombre:string
    private rango:string
    private genero:string
    private lista:Array<Soldado>

    constructor(nombre:string, rango:string, genero:string){
        this.nombre = nombre
        this.rango = rango
        this.genero = genero
        this.lista = []
    }
    setNombre (nombre:string){
        this.nombre
    }
    setRango (rango:string){
        this.rango
    }
    setGenero (genero:string){
        this.rango
    }
    //getters
    getNombre(){
        return this.nombre
    }
    getRango() {
        return this.rango
    }
    getGenero(){
        return this.genero
    }   

    //Methods
    public ingresarSoldado(soldado: Soldado){
        this.lista.push(soldado)
    }
    public NumeroSoldados(){
        console.log("el comandante " + this.nombre + " maneja: " + this.lista.length + " soldados")
    }
    public MostrarDatosCm(){
        console.log("el comandante se llama: " + this.nombre + "\n ",
        "se identifica como: " + this.genero + "\n",
        "Su rango es: " + this.rango);
    }

    public MostrarDatosSoldados() {
        console.log("Soldados bajo el mando del comandante " + this.nombre + ":");
        this.lista.forEach((soldado) => {
          console.log("Nombre: " + soldado.getNombre());
          console.log("fecha de ingreso: " + soldado.getFechaDeIngreso());
          console.log("Gender: " + soldado.getGenero());
          console.log("------------------------");
        });
      }
    public MostrarTodosLosDatos() {
        console.log("el comandante se llama: " + this.nombre + "\n ",
        "se identifica como: " + this.genero + "\n",
        "Su rango es: " + this.rango + "\n",
        "y los soldados bajo su mando son: " + "\n",
        "------------------------");
        this.lista.forEach((soldado) => {
          console.log("Nombre: " + soldado.getNombre());
          console.log("fecha de ingreso: " + soldado.getFechaDeIngreso());
          console.log("Gender: " + soldado.getGenero());
          console.log("------------------------");
        });
      }
}
