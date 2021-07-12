const Exams = require('../models/Exams');

const createExams = async ({ name, type, status }) => {
  if (!name) {
    throw new Error('name is required');
  }

  if (!type) {
    throw new Error('type is required');
  }

  const savedExam = await Exams.findOne({ where: { name } });
  if (savedExam) {
    throw new Error('there is a exam with the same name');
  }

  return await Exams.create({ name, type, status });
};

const getByExams = async () => {
  const exams = await Exams.findAll();
  return exams;
};

const getExamsActive = async () => {
  const examsActive = await Exams.findAll({ where: { status: true } });
  return examsActive;
};

const updateExams = async ({ id, name, type, status }) => {
  const getExamId = await Exams.findOne({ where: { id } });

  if (!getExamId) {
    throw new Error('exam not found');
  }

  getExamId.name = name;
  getExamId.type = type;
  getExamId.status = status;
  await getExamId.save();

  return getExamId;
};

const logicalDeleteExam = async (id) => {
  const getExamId = await Exams.findOne({ where: { id } });

  if (!getExamId) {
    throw new Error('exam not found');
  }

  getExamId.status = false;
  return await getExamId.save();
};

module.exports = {
  createExams,
  getByExams,
  getExamsActive,
  updateExams,
  logicalDeleteExam
};