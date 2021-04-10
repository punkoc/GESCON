const model = require("../models");
const administradora = require("../models/administradora");

const Condominio = model.condominio;
const Administradora = model.administradora;
const Endereco = model.endereco;

Condominio.belongsTo(Endereco, { foreignKey: "idendereco" });
Condominio.belongsTo(Administradora, { foreignKey: "idadministradora" })

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
        console.log(result);
        const cond = {
            nome: request.body.nome,
            telefone: request.body.telefone,
            idadministradora: request.body.idadministradora,
            idendereco: result.idendereco
        };
        console.log(cond);
        Condominio.create(cond)
            .then((result) => {
                response.send(result.dataValues);
            }).catch((error) => { response.status(400).send(error) });
    }).catch((error) => { response.status(400).send(error) });
};

const getAll = (request, response) => {
    Condominio.findAll({
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
                    "uf"
                ],
            },
            {
                model: Administradora,
                require: true,
                attributes: [
                    "nome",
                    "cnpj"
                ]
            }
        ],
        attributes: [
            "idcondominio",
            "nome",
            "telefone",
        ],
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.status(400).send(error) });
};

const deleteById = (request, response) => {
    Condominio.destroy({
        where: { idcondominio: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhum condominio foi encontrado para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Condominio com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const cond = {
        nome: request.body.nome,
        telefone: request.body.telefone,
        idadministradora: request.body.idadministradora
    };

    Condominio.update(cond, {
        raw: true,
        where: { idcondominio: request.params.id },
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
            Condominio.findByPk(request.params.id).then((result) => {
            console.log(result.dataValues);
            Endereco.update(end, {
                    raw: true,
                    where: { idendereco: result.dataValues.idendereco },
                })
            });            
        }
        response.status(200)
                .send("Condominio de id = " + request.params.id + " Atualizado!")
    }).catch((error) => {
        console.error(error);
        response.status(400).send(error);
    });
};

module.exports = {
    create,
    getAll,
    deleteById,
    alterById,
};