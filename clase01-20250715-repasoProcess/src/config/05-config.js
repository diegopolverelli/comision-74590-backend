import dotenv from "dotenv"
import {Command} from "commander"

const program=new Command()

program.option("-m, --mode <MODE>", "Modo de ejecución (dev / prod)", "dev")

program.parse()
const {mode}=program.opts()

if(mode!="dev" && mode!="prod"){
    console.log(`Para el argumento -m / --mode solo se aceptan los valores prod o dev`)
    process.exit()
}

// console.log("mode", mode)

dotenv.config({
    path: mode=="dev"?"./.env":"./.env.prod",
    override:true, 
    quiet:true   
})

export const config={
    GENERALES:{
        PORT: process.env.PORT || 3009, 
        SECRET: process.env.SECRET, 
    },
    DATABASE:{
        MONGO_URL: process.env.MONGO_URL, 
        DB_NAME: process.env.DB_NAME
    }, 
    MAIL:{
        USERNAME: "user@gmail.com",
        PASSMAIL: "1231231231"
    }
}