import {fakerES as fa} from "@faker-js/faker"

export const generaCliente=()=>{
    let nombre= fa.person.firstName()
    let apellido= fa.person.lastName()
    let dni=fa.number.int({
        min:10_500_000, max: 40_000_000
    })
    let email=fa.internet.email({firstName: nombre, lastName: apellido})

    return {
        nombre,
        apellido, 
        email, 
        dni
    }
}

// console.log(generaCliente())

const generaProducto=()=>{
    let producto=fa.commerce.product() 
    let precio=fa.number.float({min: 2000, max:25000, multipleOf: .50})
    let cantidad= fa.number.int({min: 1, max: 100}) 
    let id=fa.database.mongodbObjectId()

    return {
        producto, 
        precio, 
        cantidad, 
        id
    }
}

// console.log(generaProducto())

export const generaTicket=()=>{
    let nroComp="00002-000"+fa.string.numeric(5)
    let fecha=fa.date.past({ years: 1 })
    let cliente=generaCliente()
    let total=0
    let carrito=[]
    for(let i=0; i<fa.number.int({min:1, max:12}); i++){
        let producto=generaProducto()
        carrito.push(producto)
        total+=producto.cantidad*producto.precio
    }

    return {
        nroComp, 
        fecha, 
        cliente, 
        carrito,
        total
    }
}

// console.log(generaTicket())