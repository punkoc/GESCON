const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idcobranca: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idcobranca"
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descricao"
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor"
    },
    idunidade: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idunidade",
      references: {
        key: "idunidade",
        model: "unidadeModel"
      }
    }
  };
  const options = {
    tableName: "cobranca",
    comment: "",
    indexes: [{
      name: "fk_unidade_cobranca_idx",
      unique: false,
      type: "BTREE",
      fields: ["idunidade"]
    }]
  };
  const CobrancaModel = sequelize.define("cobranca", attributes, options);
  return CobrancaModel;
};