const model = require("../models");

const Proprietario = model.proprietario;
const Endereco = model.endereco;

Proprietario.belongsTo(Endereco, { foreignKey: "idendereco" });

const create = (request, response) => {
    const end = {
        logradouro: request.body.endereco.logradouro,
        bairro: request.body.endereco.bairro,
        cidade: request.body.endereco.cidade,
        numero: request.body.endereco.numero,
        cep: request.body.endereco.cep,
        uf: request.body.endereco.uf
    };

    Endereco.create(end).then((result) => {
        const prop = {
            nome: request.body.nome,
            telefone: request.body.telefone,
            cpf: request.body.cpf,
            idendereco: result.idendereco
        };
        console.log(prop);
        Proprietario.create(prop)
            .then((result) => {
                response.send(result.dataValues);
            }).catch((error) => { response.status(400).send(error) });
    }).catch((error) => { response.status(400).send(error) });
};

const getById = (request, response) => {
    Proprietario.findByPk(request.params.id,{
        include: [
            {
                model: Endereco,
                required: true,
                attributes: [
                    "logradouro",
                    "bairro",
                    "cidade",
                    "numero",
                    "cep",
                    "uf",],
            },
        ],
        attributes: [
            "idproprietario",
            "nome",
            "telefone",
            "cpf",
        ],
    })
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const getAll = (request, response) => {
    Proprietario.findAll({
        include: [
            {
                model: Endereco,
                required: true,
                attributes: [
                    "logradouro",
                    "bairro",
                    "cidade",
                    "numero",
                    "cep",
                    "uf",],
            },
        ],
        attributes: [
            "idproprietario",
            "nome",
            "telefone",
            "cpf",
        ],
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.status(400).send(error) });
};

const deleteById = (request, response) => {
    Proprietario.destroy({
        where: { idproprietario: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum proprietario foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Proprietario com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const prop = {
        nome: request.body.nome,
        telefone: request.body.telefone,
        cpf: request.body.cpf
    };

    Proprietario.update(prop, {
        raw: true,
        where: { idproprietario: request.params.id },
    }).then((object) => {
        if (request.body.endereco != null) {
            const end = {
                logradouro: request.body.endereco.logradouro,
                bairro: request.body.endereco.bairro,
                cidade: request.body.endereco.cidade,
                numero: request.body.endereco.numero,
                cep: request.body.endereco.cep,
                uf: request.body.endereco.uf
            };
            console.log(end);
            Proprietario.findByPk(request.params.id).then((result) => {
            console.log(result.dataValues);
            Endereco.update(end, {
                    raw: true,
                    where: { idendereco: result.dataValues.idendereco },
                })
            });            
        }
        response.status(200)
                .send("Proprietario de id = " + request.params.id + " Atualizado!")
    }).catch((error) => {
        console.error(error);
        response.status(400).send(error);
    });
};

module.exports = {
    create,
    getById,
    getAll,
    deleteById,
    alterById,
};