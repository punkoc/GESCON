const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idservico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idservico"
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    }
  };
  const options = {
    tableName: "servico",
    comment: "",
    indexes: []
  };
  const ServicoModel = sequelize.define("servico", attributes, options);
  return ServicoModel;
};