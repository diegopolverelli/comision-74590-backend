import bcrypt from "bcrypt"
import { usuarioModelo } from "./models/modelo.usuarios.js"

export const inicializaUsuarios=async()=>{
    let usuarios1 = [
        { nombre: "Carla", email: "carla@test.com", rol: "user", password: "123" },
        { nombre: "Jimana", email: "jimena@test.com", rol: "user", password: "123" },
        { nombre: "Diego", email: "diegopolverelli@hotmail.com", rol: "user", password: "123" },
        { nombre: "Manuel", email: "manuel@test.com", rol: "user", password: "123" },
        { nombre: "Ignacio", email: "ignacio@test.com", rol: "user", password: "123" },
        { nombre: "Lorena", email: "lorena@test.com", rol: "user", password: "123" },
        { nombre: "admin", email: "admin@admin.com", rol: "admin", password: "123" },
        { nombre: "root", email: "root@admin.com", rol: "admin", password: "123" },
        { nombre: "administrador", email: "administrador@admin.com", rol: "admin", password: "123" },
    ]
    
    usuarios1=usuarios1.map(u=>{
        return {
            ...u,
            password:bcrypt.hashSync(u.password, 10)
        }
    })
    
    
    await usuarioModelo.deleteMany({})
    await usuarioModelo.insertMany(usuarios1)
    console.log(`Usuarios dados de alta!`)
}