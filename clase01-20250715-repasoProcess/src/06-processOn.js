process.on("exit", code=>{
    // procesos de limpieza
    if(code>0){
        console.log(`Escribiendo log de errores...`)
    }
    console.log(`Saliendo del sistema con codigo ${code}`)
})

process.on("uncaughtException", e=>{
    console.log(`ocurrió un error: ${e.message}`)
})

let contador=0
let i01=setInterval(() => {
    contador++
    console.log(`Ejecutando proceso ${contador}`)
    if(contador>6){
        clearInterval(i01)
    }
}, 500);

setTimeout(() => {
    throw new Error("Error...!!!")
}, 1500);