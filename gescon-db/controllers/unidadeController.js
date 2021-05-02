const model = require("../models");

const Unidade = model.unidade;
const Condominio = model.condominio;
const Proprietario = model.proprietario;

Unidade.belongsTo(Condominio, { foreignKey: "idcondominio" });
Unidade.belongsTo(Proprietario, { foreignKey: "idproprietario" })

const create = (request, response) => {
    const und = {
        numero: request.body.numero,
        idcondominio: request.body.idcondominio,
        idproprietario: request.body.idproprietario
    };

    Unidade.create(und).then((result) => {
        console.log(result);
        response.send(result.dataValues);
    }).catch((error) => { response.status(400).send(error) });
};


const getAll = (request, response) => {
    Unidade.findAll({
        include: [
            {
                model: Proprietario,
                required: true,
                attributes: [
                    "idproprietario",
                    "nome",
                    "cpf",
                    "telefone",
                ],
            },
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
    })
        .then((object) => {
            response.status(200);
            response.send(object);
        }).catch((error) => { response.status(400).send(error) });
};

const getById = (request, response) => {
    Unidade.findByPk(request.params.id,
        {
            include: [
                {
                    model: Proprietario,
                    required: true,
                    attributes: [
                        "nome",
                        "cpf",
                        "telefone",
                    ],
                },
                {
                    model: Condominio,
                    require: true,
                    attributes: [
                        "nome",
                        "telefone"
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
    Unidade.destroy({
        where: { idunidade: request.params.id },
    })
        .then((object) => {
            if (object === 0) {
                response
                    .status(200)
                    .send("Nenhuma unidade foi encontrada para deletar!");
            } else {
                response
                    .status(200)
                    .send(
                        "Unidade com id = " + request.params.id + " deletado!"
                    );
            }
        })
        .catch((error) => {
            console.error(error);
            response.status(400).send(error);
        });
};

const alterById = (request, response) => {
    const unid = {
        numero: request.body.numero,
        idproprietario: request.body.idproprietario
    };

    Unidade.update(unid, {
        raw: true,
        where: { idunidade: request.params.id },
    }).then((object) => {
        response.status(200)
            .send("Unidade de id = " + request.params.id + " Atualizado!")
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