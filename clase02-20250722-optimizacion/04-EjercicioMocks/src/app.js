import express from 'express';
import mongoose from "mongoose"
import { generaTicket } from './mocks/mocks.js';
import { modeloDatos } from './models/datos.model.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/mocks/ticket", async(req, res)=>{
    let {cantidad}=req.query
    if(cantidad<0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Cantidad debe ser positiva`})
    }
    if(!cantidad) cantidad=1

    let datos=[]
    for(let i=0; i<cantidad; i++){
        datos.push(generaTicket())
    }

    let {db}=req.query
    if(db){
        datos=await modeloDatos.insertMany(datos)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({datos});

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const connDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName: "comisPruebas"
            }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()
