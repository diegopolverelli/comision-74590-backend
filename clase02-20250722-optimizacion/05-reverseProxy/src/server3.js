const express=require('express');
const PORT=3003;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/suma',(req,res)=>{

    let {a, b}=req.query
    if(!a || !b){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese a y b por query param`})
    }

    a=Number(a)
    b=Number(b)
    if(isNaN(a) || isNaN(b)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`a y b deben ser numéricos`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`${a+b} - calculo realizado x server 3`});
})

app.get('/users',(req,res)=>{

    console.time(`Server 3 - pid: ${process.pid} - Tiempo de procesamiento de la solicitud`)

    let usuarios=[
        {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
        {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
        {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
    ]

    console.timeEnd(`Server 3 - pid: ${process.pid} - Tiempo de procesamiento de la solicitud`)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarios, message:`Petición resuelta por server 3 - id de proceso: ${process.pid}`});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT} - id proceso SO: ${process.pid}`);
});
