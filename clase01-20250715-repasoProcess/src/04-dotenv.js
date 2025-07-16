import express from 'express';
import { config } from './config/config.js';
// process.loadEnvFile("./.env.prod")
const PORT=config.PORT;
console.log(`La db sera ${config.DB_NAME}`)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
