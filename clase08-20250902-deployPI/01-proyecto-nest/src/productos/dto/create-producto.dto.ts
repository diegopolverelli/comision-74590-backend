import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductoDto {

    @IsString({message:`La propiedad title es requerido y tiene que ser un string!`})
    title: string

    @IsNumber()
    price: number
    
    @IsNumber()
    @IsOptional()
    stock?: number

    @IsString()
    descrip: string 

    // constructor(){
    //     this.descrip=""
    //     this.price=100
    // }
}


class Carts{
    cart:[]
    nombre:string
    // #codigo
    constructor(){
        this.cart=[]
        this.nombre="Juan"
        // this.#codigo
    }
}
