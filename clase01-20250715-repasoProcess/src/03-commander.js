import {Command} from "commander"

const program=new Command()

program.option("-p, --port <PORT>", "Puerto para escucha del Server", 3005)
program.option("-d, --debug", "Activa modo debug")
program.option("-c, --colores [COLORES...]", "Listado colores fuentes")
program.option("-m, --mode <MODE>", "Modo de ejecución (dev / prod)", "dev")
program.requiredOption("-u, --user <USER>", "Usuario que corre el scipt")

program.parse()
const opciones=program.opts()

if(opciones.mode!="dev" && opciones.mode!="prod"){
    console.log(`Para el argumento -m / --mode solo se aceptan los valores prod o dev`)
    process.exit()
}

console.log(opciones) 
console.log(`Server on line en puerto ${opciones.port}`)