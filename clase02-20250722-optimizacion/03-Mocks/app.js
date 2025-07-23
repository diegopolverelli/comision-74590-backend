import {fakerES_MX as fa} from "@faker-js/faker"

for(let i=0; i<10; i++){
    console.log(fa.animal.dog())
    console.log(fa.commerce.productName())
    console.log(fa.commerce.price({ min: 1800, max: 20000, dec: 2, symbol: '$' }))
    let nombre=fa.person.firstName("male")
    let apellido=fa.person.lastName()
    console.log(nombre)
    console.log(apellido)
    console.log(fa.internet.email({
        firstName: nombre, 
        lastName: apellido, 
        provider: "hotmail.com"
    }))
}