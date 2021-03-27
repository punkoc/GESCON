const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idadministradora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idadministradora"
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
    cnpj: {
      type: DataTypes.STRING(20),
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
    }
  };
  const options = {
    tableName: "administradora",
    comment: "",
    indexes: [{
      name: "fk_endereco_administrador_idx",
      unique: false,
      type: "BTREE",
      fields: ["idendereco"]
    }]
  };
  const AdministradoraModel = sequelize.define("administradoraModel", attributes, options);
  return AdministradoraModel;
};