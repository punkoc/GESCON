const model = require("../models");

const Administradora = model.administradora;
const Endereco = model.endereco;

Administradora.belongsTo(Endereco, { foreignKey: "idendereco" });

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
            }).catch((error) => { response.status(400).send(error) });
    }).catch((error) => { response.status(400).send(error) });
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
        }).catch((error) => { response.status(400).send(error) });
};

const deleteById = (request, response) => {
    Administradora.destroy({
        where: { idadministradora: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhuma Administradora foi encontrada para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Administradora com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const adm = {
        nome: request.body.nome,
        cnpj: request.body.cnpj,
    };

    Administradora.update(adm, {
        raw: true,
        where: { idadministradora: request.params.id },
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
            Administradora.findByPk(request.params.id).then((result) => {
            console.log(result.dataValues);
            Endereco.update(end, {
                    raw: true,
                    where: { idendereco: result.dataValues.idendereco },
                })
            });            
        }
        response.status(200)
                .send("Administradora de id = " + request.params.id + " Atualizado!")
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