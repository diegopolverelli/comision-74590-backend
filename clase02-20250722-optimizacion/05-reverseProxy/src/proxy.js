const express = require('express');
const PORT=3000

const app = express();

app.get("/config", (req, res)=>{
    res.send("Bienvenido al server Proxy...!!!")
})

app.listen(PORT, ()=>console.log(`Server online in port ${PORT}!`));