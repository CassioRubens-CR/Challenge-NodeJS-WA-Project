const Exams = require('../models/Exams');
const Laboratory = require('../models/Laboratory');

module.exports = {
  async getByIdLaboratory(req, res) {
    const { laboratory_id } = req.params;

    const laboratory = await Laboratory.findByPk(laboratory_id, {
      include: { association: 'exams', through: { attributes: [] } }
    });

    return res.json(laboratory);
  },

  async getExamByLaboratory(req, res) {

    const { exam_id } = req.params;

    const exam = await Exams.findByPk(exam_id, {
      include: { association: 'laboratories', through: { attributes: [] } }
    });

    return res.json(exam);
  },

  async connect(req, res) {
    const { laboratory_id } = req.params;
    const { name, type, status } = req.body;

    const laboratory = await Laboratory.findByPk(laboratory_id);

    if (!laboratory) {
      return res.status(404).json({ error: 'laboratory not found'});
    }

    const [exam] = await Exams.findOrCreate({
      where: { name, type, status }
    });

    await laboratory.addExams(exam)

    return res.json(exam);
  },

  async disconnect(req, res) {
    const { laboratory_id } = req.params;
    const { name } = req.body;

    const laboratory = await Laboratory.findByPk(laboratory_id);

    if (!laboratory) {
      return res.status(404).json({ error: 'laboratory not found'});
    }

    const exam = await Exams.findOne({
      where: { name }
    });

    await laboratory.removeExams(exam)

    return res.json();
  },
};
