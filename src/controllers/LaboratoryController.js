const LaboratoryService = require('../services/LaboratoryService');

module.exports = {
  async getByLaboratory(req, res) {
    try {
      const laboratories = await LaboratoryService.getByLaboratory();
      return res.status(200).json(laboratories);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async createLaboratory(req, res) {
    const { name, address, status } = req.body;

    try {
      const laboratory = await LaboratoryService.createLaboratory({ name, address, status });
      return res.status(201).json(laboratory);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async getActive(req, res) {
    try {
      const laboratoryActive = await LaboratoryService.getActive({ where: { status: true } });
      return res.status(200).json(laboratoryActive);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const { name, address, status } = req.body;

    try {
      const getLaboratory = await LaboratoryService.update({ id, name, address, status });
      return res.json(getLaboratory);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async logicalDelete(req, res) {
    const id = req.params.id;

    try {
      const getLaboratoryId = await LaboratoryService.logicalDelete(id);
      return res.json(getLaboratoryId);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },
};