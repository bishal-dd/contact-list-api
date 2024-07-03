module.exports = (sequelize, DataTypes) => {
  const validation = {
    notEmpty: true,
  };

  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID, // or any other type that suits your needs
      primaryKey: true,
      allowNull: false,
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: validation,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: validation,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: validation,
    },
  });

  return User;
};
