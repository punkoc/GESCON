const { sequelize } = require("../models");
const model = require("../models");

const Administradora = model.administradoraModel;
const Endereco = model.endereco;

Administradora.hasOne(Endereco, { foreignKey: "idendereco" });

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
        const adm = {
            nome: request.body.nome,
            cnpj: request.body.cnpj,
            idendereco: result.idendereco
        };
        console.log(adm);
        Administradora.create(adm)
            .then((result) => {
                response.send(result.dataValues);
            }).catch((error) => { response.send(error) });
    }).catch((error) => { response.send(error) });
};

const getAll = (request, response) => {
    Administradora.findAll({        
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
            "idadministradora",
            "nome",
            "cnpj",
        ],
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.send(error) });
};

module.exports = {
    create,
    getAll,
};