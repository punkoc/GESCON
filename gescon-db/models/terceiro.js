const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idterceiro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idterceiro"
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
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefone"
    },
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cnpj"
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
    },
    idservico: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idservico",
      references: {
        key: "idservico",
        model: "servicoModel"
      }
    }
  };
  const options = {
    tableName: "terceiro",
    comment: "",
    indexes: [{
      name: "fk_endereco_terceiro_idx",
      unique: false,
      type: "BTREE",
      fields: ["idendereco"]
    }, {
      name: "fk_servico_terceiro_idx",
      unique: false,
      type: "BTREE",
      fields: ["idservico"]
    }]
  };
  const TerceiroModel = sequelize.define("terceiro", attributes, options);
  return TerceiroModel;
};