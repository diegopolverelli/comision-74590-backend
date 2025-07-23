export const errorHandler=(error, req, res, next)=>{

    if(error.custom){
        console.log(`Error: ${error.name}:${error.message}. Detalle: ${error.cause}`)
        res.setHeader('Content-Type','application/json');
        return res.status(error.code).json({error:`Internal Server Error`})
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }
}