const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idproprietario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idproprietario"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    telefone: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefone"
    },
    cpf: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cpf"
    },
    idendereco: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idendereco",
      references: {
        key: "idendereco",
        model: "enderecoModel"
      }
    }
  };
  const options = {
    tableName: "proprietario",
    comment: "",
    indexes: [{
      name: "fk_endereco_proprietario_idx",
      unique: false,
      type: "BTREE",
      fields: ["idendereco"]
    }]
  };
  const ProprietarioModel = sequelize.define("proprietario", attributes, options);
  return ProprietarioModel;
};