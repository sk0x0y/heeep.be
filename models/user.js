module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      point: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
    },
    {
      paranoid: true,
      underscored: true,
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
