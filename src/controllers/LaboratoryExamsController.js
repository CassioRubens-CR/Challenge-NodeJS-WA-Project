const laboratoryExamesService = require('../services/LaboratoryExamsService');

module.exports = {
  async getByIdLaboratory(req, res) {
    const { laboratory_id } = req.params;
    try {
      const laboratory = await laboratoryExamesService.getByIdLaboratory({ laboratory_id });
      return res.status(200).json(laboratory)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getExamByLaboratory(req, res) {
    const { name } = req.body;

    try {
      const examName = await laboratoryExamesService.getExamByLaboratory({ name });
      return res.status(200).json(examName)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async connect(req, res) {
    const { laboratory_id } = req.params;
    const { name, type, status } = req.body;

    try {
      const laboratory = await laboratoryExamesService.connect({ laboratory_id, name, type, status });
      return res.status(201).json(laboratory)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async disconnect(req, res) {
    const { laboratory_id, exam_id } = req.params;

    try {
      const laboratory = await laboratoryExamesService.disconnect({ laboratory_id, exam_id });
      return res.status(200).json(laboratory)
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};
