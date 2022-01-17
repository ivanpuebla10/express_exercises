const express = require("express");

const app = express();
const puerto = 3000;

app.listen(puerto, (err) => {

  if(err) {
    console.log(`No se pudo levantar el servidor en el puerto ${puerto}`)
  }
  else {
    console.log(`Servidor levantado en el puerto ${puerto}`);
  }
});

app.get('/',(req,res)=>{
  res.send('Bienvenidos a Node.js Server Side')
})
