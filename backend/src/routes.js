const { Router } = require('express');
const HotelController = require('./controllers/HotelController');

const routes = Router();

routes.post('/hotel', HotelController.adicionarHotel);
routes.get('/hotel', HotelController.buscarHoteis);
routes.get('/buscaHotel', HotelController.buscaHotel);
routes.delete('/hotel', HotelController.removerHotel);
routes.put('/hotel', HotelController.atualizarHotel);

module.exports = routes;