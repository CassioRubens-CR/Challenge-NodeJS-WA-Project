const { Model, DataTypes } = require('sequelize');

class Exams extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM,
        values: ['analise clinica', 'imagem'],
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsToMany(models.Laboratory, { foreignKey: 'exam_id', through: 'laboratory_exams', as: 'laboratories' });
  }
}

module.exports = Exams;
