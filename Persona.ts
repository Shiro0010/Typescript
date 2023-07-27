export class Persona{
    //atributos de la clase
    private nombre:string
    private edad:number
    private telefono:number
    private direccion:string
    private ciudad:string

    //getters, hare el get"cosa" para ser especifico
    public getNombre(){
        return this.nombre
    }
    public getEdad(){

        return this.edad
    }
    public getTelefono(){
        return this.telefono
    }
    public getDireccion(){
        return this.direccion
    }
    public getCiudad(){
        return this.ciudad
    }
    //estos seran los setters, me baso en el ejemplo del carrito
    public setNombre (nombre:string){
        this.nombre = nombre
    }
    public setEdad (edad:number){
        this.edad = edad
    }
    public setTelefono(telefono:number){
        this.telefono = telefono
    }
    public setDireccion (direccion:string){
        this.direccion = direccion
    }
    public setCiudad (ciudad:string){
        this.ciudad = ciudad
    }
    // sigue el contructor, el cual nos ayuda a... nose, me doy una idea pero nose.

    constructor(nombre:string, edad:number, telefono:number, direccion:string, ciudad:string){
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    
    }
    // seguimos con los metodos, o acciones :v
    public mostrarDatosPersona():void{
        console.log("los datos de la persona son: "+ this.nombre + " " + this.edad+ " " + this.telefono+ " " + this.direccion+ " " + this.ciudad)
    }
    public mayorDeEdad():void{
        if (this.edad >= 18) {
            console.log("La persona es mayor de edad")
        } 
        else {
            console.log("la persona es menor de edad");      
        }
    }

}