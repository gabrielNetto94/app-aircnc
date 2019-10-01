const express = require('express');

const app = express();

//req.query  = Acessar query params (url) (para filros)
//req.params = acessar route params (edição, delete)
//req.body = acessar corpo da requisição (criação / edição)

app.use(express.json());//parsear json na aplicação

app.post('/users/:id', (req, res) =>{
    return res.json(req.body);
})

app.listen(3333);