const members = {
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }
  

//Punto 1
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())




//Punto 2
app.get('/productos', (req, res) => {
    res.json(members)
})

//Punto 3
app.post('/productos', (req, res) => {
    // console.log(req.body)
    const newMember = { 
     id: members.items.length +1,
     nombre: req.body.nombre,
     precio: req.body.precio 
    }

    members.items.push(newMember)
    res.json(members)
});

//Punto 4
// app.put('/productos/:nombre', (req, res) => {
//     const found = members.items.some(product => product.nombre === req.params.nombre)
//     if (found) {
//         for (const item of members.items) {
//             if (item.nombre !== req.params.nombre) {
//                 item.nombre = 'Taza del CEU'

//                 res.json(members)
//             }
//         }
//     } else {
//         res.status(404).json({ msg: `Producto con el nombre ${req.params.nombre} no encontrado` })
//     }
// })

//Punto 5
// app.delete('/productos/:id',(req,res)=>{
//     const found = members.items.some(product =>product.id === +req.params.id)
    
//     if (found) {
//         res.json( members.items.filter(product => product.id !== +req.params.id))
//     } else {
//         res.status(404).json({ msg: `Producto con el id ${req.params.id} no encontrado` })
//     }
//   })

//Punto 6
//   app.get('/productos/:precio', (req, res) => {
//     const found = members.items.some(product =>product.precio === +req.params.precio)
    
//         if (found) {
//             res.json( members.items.filter(product => product.precio === +req.params.precio))
//         } else {
//             res.status(404).json({ msg: `Producto con el precio ${req.params.precio} no encontrado` })
//         }    
// })

//Punto 7
// app.get('/productos', (req, res) => {    
//     res.json( members.items.filter(product => product.precio > 50 && product.precio < 250))
// })

//Punto 8
// app.get('/productos/:id',(req,res)=>{
//     const found = members.items.some(product =>product.id === +req.params.id)
    
//     if (found) {
//         res.json( members.items.filter(product => product.id === +req.params.id))
//     } else {
//         res.status(404).json({ msg: `Producto con el id ${req.params.id} no encontrado` })
//     }
//   })

//Punto 9
// app.get('/productos/:nombre',(req,res)=>{
//     const found = members.items.some(product =>product.nombre === req.params.nombre)
    
//     if (found) {
//         res.json( members.items.filter(product => product.nombre === req.params.nombre))
//     } else {
//         res.status(404).json({ msg: `Producto con el nombre ${req.params.nombre} no encontrado` })
//     }
//   })

app.listen("3000", () => {
  console.log("Server started on port 3000");
});