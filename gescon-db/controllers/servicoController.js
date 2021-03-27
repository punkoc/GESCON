const model = require("../models");

const ServicoModel = model.servicoModel;

const create = (request, response) => {
    ServicoModel.create(request.body)
        .then((object) => {
            response.send(object.DataValues);
        })
        .catch((error) => response.send(error));
};

//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
    ServicoModel.findAll({
        attributes: [
            "idservico",
            "descricao",
        ],
        raw: true,
    })
        .then((object) => {
            console.log(object);
            response.status(200);
            response.send(object);
        })
        .catch((error) => response.status(400).send(error));
};

//Seleciona um evento acadêmico por ID
const getById = (request, response) => {
    ServicoModel.findByPk(request.params.id)
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

//Altera um evento acadêmico dado um ID
const alterById = (request, response) => {
    const paData = {
        descricao: request.body.descricao,
    };
    ServicoModel.update(paData, {
        raw: true,
        where: { idservico: request.params.id },
    })
        .then((object) => {
            response
                .status(200)
                .send("Serviço de id = " + request.params.id + " Atualizado!");
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const deleteById = (request, response) => {
    ServicoModel.destroy({
        where: { idservico: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum Serviço foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Serviço com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

module.exports = {
    create,
    getAll,
    getById,
    alterById,
    deleteById,
};