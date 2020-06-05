/*
    Verbos HTTP: GET, POST, PUT, DELETE

    Tipo de parâmetros:
    -Query Params: acessamos através de: request.query, usamos em: (Filtro, ordenação, paginação. [...]);
    -Route Params: acessamos através de: request.params (Identificar um recurso na alteração ou remoção, Ex: /users/:id);
    -Body: acessamos através de: request.body (Dados para a criação ou alteração de um registro);
*/
const { Router } = require('express');
const HotelController = require('./controllers/HotelController');

const routes = Router();

routes.post('/hotel', HotelController.adicionarHotel);
routes.get('/hotel', HotelController.buscarHoteis);
routes.get('/buscaHotel', HotelController.buscaHotel);
routes.delete('/hotel', HotelController.removerHotel);
routes.put('/hotel', HotelController.atualizarHotel);

module.exports = routes;