const Hotel = require('../models/Hotel')

// Realiza a inserção do hotel
module.exports = {
    async buscarHoteis(request, response) {
        const hoteis = await Hotel.find();

        return response.json(hoteis);
    },

    async buscaHotel(request, response) {
        const nome = request.query.nome;
        const hotel = await Hotel.findOne({ "nome": nome });

        return response.json(hotel);
    },


    async adicionarHotel(request, response) {
        const { nome, informacao } = request.body;

        hotel = await Hotel.create({
            nome,
            informacao
        })

        return response.json(hotel)
    },

    async removerHotel(request, response) {
        let nome = request.query.nome;

        await Hotel.deleteOne({ nome })

        return response.json('Deletado com sucesso')
    },

    async atualizarHotel(request, response) {
        let nomeAntigo = request.query.nomeAntigo;
        let nome = request.query.nome;
        let informacao = request.query.informacao;

        await Hotel.updateOne({ "nome": nomeAntigo }, { "nome": nome, "informacao": informacao }, { upsert: false }, null)

        return response.json('Atualizado')
    }
}