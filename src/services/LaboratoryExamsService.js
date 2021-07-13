const Exams = require('../models/Exams');
const Laboratory = require('../models/Laboratory');

const getByIdLaboratory = async ({ laboratory_id }) => {

  const laboratory = await Laboratory.findByPk(laboratory_id, {
    include: { association: 'exams', through: { attributes: [] } }
  });

  return laboratory;
};

const getExamByLaboratory = async ({ name }) => {

  if (!name) {
    throw new Error('name is required');
  }

  const examName = await Exams.findOne({ where: { name } });

  if (!examName) {
    return res.status(404).json({ error: 'name not found' });
  }

  const exam = await Exams.findByPk(examName.id, {
    include: { association: 'laboratories', through: { attributes: [] } }
  });

  return exam;
};

const connect = async ({ laboratory_id, name, type, status }) => {

  const laboratory = await Laboratory.findByPk(laboratory_id);

  if (!laboratory) {
    return res.status(404).json({ error: 'laboratory not found' });
  }

  const [exam] = await Exams.findOrCreate({
    where: { name, type, status }
  });

  return await laboratory.addExams(exam)
};

const disconnect = async ({ laboratory_id, exam_id }) => {

  const laboratory = await Laboratory.findByPk(laboratory_id);

  if (!laboratory) {
    return res.status(404).json({ error: 'laboratory not found' });
  }

  const exam = await Exams.findByPk(exam_id);

  await laboratory.removeExams(exam)

  return exam;
};

module.exports = {
  getByIdLaboratory,
  getExamByLaboratory,
  connect,
  disconnect,
};
