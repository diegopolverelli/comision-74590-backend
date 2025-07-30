import __dirname, { logger, logger2, middLog } from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(middLog)
app.use(express.static(path.join(__dirname,'/public')));


app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.get("/testlogger", (req, res)=>{
    req.logger.error(`Prueba log error...`)
    req.logger.warn(`Prueba log warning...`)
    req.logger.info(`Prueba log info...`)
    req.logger.http(`Prueba log verbose...`)
    req.logger.verbose(`Prueba log verbose...`)
    req.logger.debug(`Prueba log debug...`)
    req.logger.silly(`Prueba log silly...`)

    logger2.grave(`Error grave...!!!`)
    logger2.intermedio(`Error medio...!!!`)
    logger2.leve(`Error leve...!!!`)
    logger2.info(`Error info...!!!`)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Pruebas log generadas...!!!"});
})

const server=app.listen(PORT,()=>{
    // console.log(`Server escuchando en puerto ${PORT}`);
    logger.info(`Server escuchando en puerto ${PORT}`)
});
