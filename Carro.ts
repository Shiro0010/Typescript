//declaracon de una clase
export class Carro {
    private modelo:number 
    private placa:string
    private marca:string
    private puertas:number
    private color:string

    public getModelo(){
        return this.modelo 
    }
    public getplaca(){
        return this.placa
    }
    public getMarca(){
        return this.marca
    }
    public getPuertas(){
        return this.puertas
    }
    public getColor (){
        return this.color
    }

    public setModelo (modelo:number){
        this.modelo = modelo 
    }

    public setPlaca (placa:string){
        this.placa = placa
    }

    public setMarca (marca:string){
        this.marca = marca 
    }
    
    public setPuertas(puertas:number){
        this.puertas = puertas
    }

    public setColor (color:string){
        this.color = color
    }
    constructor(modelo:number, placa:string, marca:string, color:string, puertas:number){
     this.modelo = modelo
     this.placa = placa
     this.marca= marca
     this.puertas = puertas
     this.color = color


    }

    public encender():void{
        console.log("el carro encendio")
    }
    public desplazarCarro():void{
        console.log("el carro esta en movimiento!")
    }

}

