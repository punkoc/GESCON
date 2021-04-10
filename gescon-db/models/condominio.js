const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idcondominio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idcondominio"
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
        model: "endereco"
      }
    },
    idadministradora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idadministradora",
      references: {
        key: "idadministradora",
        model: "administradoraModel"
      }
    }
  };
  const options = {
    tableName: "condominio",
    comment: "",
    indexes: [{
      name: "fk_idendereco_condominio_idx",
      unique: false,
      type: "BTREE",
      fields: ["idendereco"]
    }, {
      name: "fk_idadministradora_idx",
      unique: false,
      type: "BTREE",
      fields: ["idadministradora"]
    }]
  };
  const CondominioModel = sequelize.define("condominio", attributes, options);
  return CondominioModel;
};