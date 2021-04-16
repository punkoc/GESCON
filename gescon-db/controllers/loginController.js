const model = require("../models");

const Login = model.login;

const create = (request, response) => {
    Login.create(request.body)
        .then((object) => {
            response.send(object.dataValues);
        })
        .catch((error) => response.send(error));
};

//Lista todos os eventos acadêmicos
const getAll = (request, response) => {
    Login.findAll({
        attributes: [
            "idlogin",
            "usuario",
            "senha"
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
    Login.findByPk(request.params.id)
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
        usuario: request.body.usuario,
        senha: request.body.senha,
    };
    Servico.update(paData, {
        raw: true,
        where: { idlogin: request.params.id },
    })
        .then((object) => {
            response
                .status(200)
                .send("Login de id = " + request.params.id + " Atualizado!");
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const deleteById = (request, response) => {
    Login.destroy({
        where: { idlogin: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum Login foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Login com id = " + request.params.id + " deletado!"
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