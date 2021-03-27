const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idunidade: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idunidade"
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
    idcondominio: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idcondominio",
      references: {
        key: "idcondominio",
        model: "condominioModel"
      }
    },
    idproprietario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idproprietario",
      references: {
        key: "idproprietario",
        model: "proprietarioModel"
      }
    }
  };
  const options = {
    tableName: "unidade",
    comment: "",
    indexes: [{
      name: "fk_proprietario_unidade_idx",
      unique: false,
      type: "BTREE",
      fields: ["idproprietario"]
    }, {
      name: "fk_condominio_unidade_idx",
      unique: false,
      type: "BTREE",
      fields: ["idcondominio"]
    }]
  };
  const UnidadeModel = sequelize.define("unidadeModel", attributes, options);
  return UnidadeModel;
};