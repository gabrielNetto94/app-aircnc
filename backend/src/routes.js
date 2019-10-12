const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionControler = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControler.store); //cria usuário
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //cria spot
routes.get('/spots', SpotController.index); //retorna todos os spots
routes.get('/dashboard', DashboardController.show);//retorna spots de um usuári específico
routes.post('/spots/:spot_id/bookings',BookingController.store); // armazena a solicitação de usuário para spot
routes.get('/',(req,res) =>{
    return res.send(("asda"));
}); //retorna todos os spots
module.exports = routes;  