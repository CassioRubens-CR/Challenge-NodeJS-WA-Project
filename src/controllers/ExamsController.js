const ExamsService = require('../services/ExamsService');

module.exports = {
  async getByExams(req, res) {
    try {
      const exams = await ExamsService.getByExams();
      return res.status(200).json(exams);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async createExams(req, res) {
    const { name, type, status } = req.body;

    try {
      const exam = await ExamsService.createExams({ name, type, status });
      return res.status(201).json(exam);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async createExamsBatch(req, res) {
    const exams = req.body;
    console.log('exams controller', exams);

    try {
      const examsBatch = await ExamsService.createExamsBatch(exams);
      return res.status(201).json(examsBatch);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getExamsActive(req, res) {
    try {
      const examsActive = await ExamsService.getExamsActive({ where: { status: true } });
      return res.status(200).json(examsActive);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async updateExams(req, res) {
    const id = req.params.id;
    const { name, type, status } = req.body;

    try {
      const getExamId = await ExamsService.updateExams({ id, name, type, status });
      return res.json(getExamId);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async logicalDeleteExam(req, res) {
    const id = req.params.id;

    try {
      const getExamId = await ExamsService.logicalDeleteExam(id);
      return res.json(getExamId);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};
