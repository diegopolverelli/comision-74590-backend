import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

const PORT=process.env.PORT || 3005;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/ruta1', async(req,res,next)=>{
    try {
        let {error1}=req.query
        if(error1){
            throw new Error("Error 1...")
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"ruta 1"});
    } catch (error) {
        next(error)
    }
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
