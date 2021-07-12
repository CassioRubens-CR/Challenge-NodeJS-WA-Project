const ExamsService = require('../services/ExamsService');

module.exports = {
  async createExams(req, res) {
    const { name, type, status } = req.body;

    try {
      const exam = await ExamsService.createExams({ name, type, status });
      return res.status(201).json(exam);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getByExams(req, res) {
    const exams = await ExamsService.getByExams();

    return res.json(exams);
  },

  async getExamsActive(req, res) {
    const examsActive = await ExamsService.getExamsActive({ where: { status: true } });

    return res.json(examsActive);
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
