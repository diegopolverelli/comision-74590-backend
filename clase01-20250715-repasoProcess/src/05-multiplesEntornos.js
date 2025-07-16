import express from 'express';
import { config } from './config/05-config.js';
import { connDB } from './config/db.js';
const PORT=config.GENERALES.PORT;

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

connDB(config.DATABASE.MONGO_URL, config.DATABASE.DB_NAME)
