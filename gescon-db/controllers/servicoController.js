const model = require("../models");

const Servico = model.servico;

const create = (request, response) => {
    Servico.create(request.body)
        .then((object) => {
            response.send(object.dataValues);
        })
        .catch((error) => response.send(error));
};

//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
    Servico.findAll({
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
    Servico.findByPk(request.params.id)
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
    Servico.update(paData, {
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
    Servico.destroy({
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