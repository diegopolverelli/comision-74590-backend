import express from 'express';
import handlebars from 'express-handlebars'
import compress from "express-compression"
import zlib from "zlib"
const PORT=3000;

const app=express();

// app.use(compress())
app.use(compress({brotli:{enabled:true}}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/heroes',(req,res)=>{

    res.render("prueba")
})

app.get('/texto1',(req,res)=>{

    let texto="texto muy largo".repeat(250_000)
    // let textoComprimido=zlib.gzipSync(texto)
    let textoComprimido=zlib.brotliCompressSync(texto)

    res.setHeader('Content-Type','text/plain');
    // res.setHeader('Content-Encoding','gzip');
    res.setHeader('Content-Encoding','br');
    res.status(200).send(textoComprimido);
})

app.get('/texto2',(req,res)=>{

    let texto="texto muy largo".repeat(250_000)
    res.setHeader('Content-Type','text/plain');
    res.status(200).send(texto);
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
