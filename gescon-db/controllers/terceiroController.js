const model = require("../models");

const Terceiro = model.terceiro;
const Servico = model.servico;
const Endereco = model.endereco;

Terceiro.belongsTo(Servico, { foreignKey: "idservico" });
Terceiro.belongsTo(Endereco, { foreignKey: "idendereco" })

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
        const ter = {
            nome: request.body.nome,
            telefone: request.body.telefone,
            cnpj: request.body.cnpj,
            idservico: request.body.idservico,
            idendereco: result.idendereco
        };
        console.log(ter);
        Terceiro.create(ter)
            .then((result) => {
                response.send(result.dataValues);
            }).catch((error) => { response.status(400).send(error) });
    }).catch((error) => { response.status(400).send(error) });
};


const getAll = (request, response) => {
    Terceiro.findAll({
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
            {
                model: Servico,
                require: true,
                attributes: [
                    "descricao"
                ]
            }
        ],
        attributes: [
            "idterceiro",
            "nome",
            "telefone",
            "cnpj"
        ],
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.status(400).send(error) });
};

const getById = (request, response) => {
    Terceiro.findByPk(request.params.id,
        {
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
                {
                    model: Servico,
                    require: true,
                    attributes: [
                        "descricao"
                    ]
                }
            ]
        })
        .then((object) => {
            response.status(200).send(object.dataValues);
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const deleteById = (request, response) => {
    Terceiro.destroy({
        where: { idterceiro: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum terceiro foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Terceiro com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const ter = {
        nome: request.body.nome,
        telefone: request.body.telefone,
        cnpj: request.body.cnpj,
        idservico: request.body.idservico
    };
    Terceiro.update(ter, {
        raw: true,
        where: { idterceiro: request.params.id },
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
            Terceiro.findByPk(request.params.id).then((result) => {
            console.log(result.dataValues);
            Endereco.update(end, {
                    raw: true,
                    where: { idendereco: result.dataValues.idendereco },
                })
            });            
        }
        response.status(200)
                .send("Terceiro de id = " + request.params.id + " Atualizado!")
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