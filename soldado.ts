export class Soldado{
    private nombre:string
    private fechaDeIngreso:string
    private genero:string

    constructor(nombre:string, fechaDeIngreso:string, genero:string){
        this.nombre = nombre
        this.fechaDeIngreso = fechaDeIngreso
        this.genero = genero
    }
    setNombre (nombre:string){
        this.nombre
    }
    setRango (fechaDeIngreso:string){
        this.fechaDeIngreso
    }
    setGenero (genero:string){
        this.genero
    }
    //getters
    getNombre(){
        return this.nombre
    }
    getFechaDeIngreso() {
        return this.fechaDeIngreso
    }
    getGenero(){
        return this.genero
    }   
    public mostrarSoldado(){
        return "Nombre: "+ this.nombre + 
        "\nFecha: "+ this.fechaDeIngreso +
        "\ngenero: "+ this.genero
    }
}
