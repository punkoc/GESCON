const model = require("../models");

const Cobranca = model.cobranca;
const Unidade = model.unidade;
const Condominio = model.condominio;

Cobranca.belongsTo(Unidade, { foreignKey: "idunidade" });
Unidade.belongsTo(Condominio, {foreignKey: "idcondominio"});

const create = (request, response) => {
    const cob = {
        descricao: request.body.descricao,
        valor: request.body.valor,
        idunidade: request.body.idunidade
    };

    Cobranca.create(cob).then((result) => {
        console.log(result);
        response.send(result.dataValues);
    }).catch((error) => { response.status(400).send(error) });
};


const getAll = (request, response) => {
    Cobranca.findAll({
        include: [
            {
                model: Unidade,
                required: true,
                include:[
                    {
                        model: Condominio,
                        require: true,
                        attributes: [
                            "idcondominio",
                            "nome",
                            "telefone"
                        ]
                    }
                ],
                attributes: [
                    "idunidade",
                    "numero"
                ],
            }           
        ],
        attributes: [
            "idcobranca",
            "descricao",
            "valor"
        ],
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.status(400).send(error) });
};

const getById = (request, response) => {
    Cobranca.findByPk(request.params.id,
        {
            include: [
                {
                    model: Unidade,
                    required: true,
                    attributes: [
                        "numero"
                    ],
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
    Cobranca.destroy({
        where: { idcobranca: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhuma cobrança foi encontrada para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Cobrança com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const cob = {
        descricao: request.body.descricao,
        valor: request.body.valor,
        idunidade: request.body.idunidade
    };

    Cobranca.update(cob, {
        raw: true,
        where: { idunidade: request.params.id },
    }).then((object) => {
        response.status(200)
            .send("Cobrança de id = " + request.params.id + " Atualizado!")
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