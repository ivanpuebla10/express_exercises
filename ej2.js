const express = require("express");

const app = express();

app.listen("4000", () => {
  console.log("Server started on port 4000");
});

//Punto 1
app.get('/',(req,res)=>{
    res.send('Bienvenidos a mi servidor')
})

//Punto 2
// app.get('/productos',(req,res)=>{
//     res.send('Listado de productos')
// })

//Punto 3
// app.post('/productos', (req,res)=>{
//     res.send('crear un producto')
// })

//Punto 4
// app.put('/productos',(req,res)=>{
//     res.send('actualizar un producto')
// })

//Punto 5
// app.delete('/productos',(req,res)=>{
//     res.send('borrar un producto')
// })

//Punto 6
app.get('/usuarios',(req,res)=>{
    res.send('listado de usuarios')
})

//Punto 7
// app.post('/usuarios', (req,res)=>{
//     res.send('crear un usuario')
// })

//Punto 8
// app.put('/usuarios', (req,res)=>{
//     res.send('actualizar un usuario')
// })

//Punto 9
// app.delete('/usuarios',(req,res)=>{
//     res.send('borrar un usuario')
// })



