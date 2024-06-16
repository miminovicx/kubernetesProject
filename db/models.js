const { Sequelize, DataTypes } = require('sequelize');

// Initialiser la connexion à SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Définir le modèle "Course"
const Course = sequelize.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Synchroniser le modèle avec la base de données
sequelize.sync();

module.exports = {
  Course
};
