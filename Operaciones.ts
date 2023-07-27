export class Operaciones{
    private numero1:number
    private numero2:number
    //constructor primero? bno
    constructor(numero1:number, numero2:number){
        this.numero1 = numero1
        this.numero2 = numero2
    }
    //getters
    getNumero1(){
        return this.numero1        
    }
    getNumero2(){
        return this.numero2
    }
    //setters
    setNumero1(numero1:number){
        this.numero1 = numero1
    }
    setNumero2(numero2:number){
        this.numero2 = numero2
    }
    //metodos
    public suma (){
        let rsuma:number = this.numero1 + this.numero2
        console.log(rsuma);
        
    }
    public resta (){
        let rresta:number = this.numero1 - this.numero2
        console.log(rresta);
        
    }
    public multiplicacion (){
        let producto:number = this.numero1 * this.numero2
        console.log(producto);
         
    }
    public division (){
        let rsdiv:number = this.numero1 / this.numero2
        console.log(rsdiv);
         
    }


}