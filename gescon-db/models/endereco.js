const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idendereco: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idendereco"
    },
    logradouro: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "logradouro"
    },
    bairro: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bairro"
    },
    cidade: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cidade"
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numero"
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cep"
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "uf"
    }
  };
  const options = {
    tableName: "endereco",
    comment: "",
    indexes: []
  };
  const EnderecoModel = sequelize.define("endereco", attributes, options);
  return EnderecoModel;
};