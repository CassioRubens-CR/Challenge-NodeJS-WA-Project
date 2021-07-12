const { Model, DataTypes } = require('sequelize');

class Laboratory extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Exams, { foreignKey: 'laboratory_id', through: 'laboratory_exams', as: 'exams' });
  }
}

module.exports = Laboratory;
