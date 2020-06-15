module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        max: 10,
        type: Sequelize.STRING,
      },
      nickname: {
        unique: true,
        max: 20,
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        max: 30,
        type: Sequelize.STRING,
      },
      password: {
        max: 20,
        type: Sequelize.STRING,
      },
      point: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
