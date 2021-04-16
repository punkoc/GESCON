const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idlogin: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idlogin"
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "usuario"
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "senha"
    }
  };
  const options = {
    tableName: "login",
    comment: "",
    indexes: []
  };
  const LoginModel = sequelize.define("login", attributes, options);
  return LoginModel;
};