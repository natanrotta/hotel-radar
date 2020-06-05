const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    nome: String,
    informacao: String
});

//Nome do nosso model e o nome de como ele é no banco;
module.exports = mongoose.model('Hotel', HotelSchema)