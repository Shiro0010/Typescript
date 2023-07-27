export class Cuenta{
    private propietario:string
    private numeroDeCuenta:number
    private dinero:number

    constructor(propietario:string,numeroDeCuenta:number, dinero:number){
        this.propietario = propietario
        this.numeroDeCuenta = numeroDeCuenta
        this.dinero = dinero
    }
    //getters
    getPropietario(){
        return this.propietario
    }
    getNumeroDeCuenta(){
        return this.numeroDeCuenta
    }
    getDinero(){
        return this.dinero
    }
    //setters, ns si sirvan de algo aca ._.xd
    setPropietario(propietario:string){
        this.propietario = propietario
    }
    setNumeroDeCuenta(numeroDeCuenta:number){
        this.numeroDeCuenta = numeroDeCuenta
    }
    setDinero (dinero:number){
        this.dinero = dinero
    }
    //metodos
    public mostrar(){
        console.log("los datos de la cuenta son: " + "Propietario: " + this.propietario + " " + "numero de cuenta: " + this.numeroDeCuenta + " " + "dinero disponible: " + this.dinero)
    }
    public ingresarDineros(dinero:number){
        let ae = this.dinero + dinero 
        this.dinero = ae
        console.log("se han ingresado con exito: " + dinero + "$" + " " + "la cuenta ahora tiene: " + ae + "$");
    }
    public retiarDineros(dinero:number){
        if (dinero > this.dinero){
            console.log("No se ha podido realizar el retiro de " + dinero +  "$, fondos insuficientes.");   
        }
        else{
            console.log("anteriormente, se tenian: ", this.dinero + "$");
            let aea = this.dinero - dinero 
            this.dinero = aea
            console.log("Actualmente, se han retirado con exito: " + dinero + "$" + " " + "la cuenta ahora tiene: " + aea + "$");
        }
    }

}