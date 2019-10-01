const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect("mongodb+srv://admin:admin@cluster0-ovsj1.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', err =>{
    console.log(err);
})

//req.query  = Acessar query params (url) (para filros)
//req.params = acessar route params (edição, delete)
//req.body = acessar corpo da requisição (criação / edição)

app.use(express.json());//parsear json na aplicação
app.use(routes);

app.listen(3333);
console.log("Server running on port 3333");