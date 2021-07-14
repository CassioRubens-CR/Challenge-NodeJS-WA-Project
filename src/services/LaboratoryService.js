const Laboratories = require('../models/Laboratory');

const getByLaboratory = async () => {
  const laboratory = await Laboratories.findAll();
  return laboratory;
};

const createLaboratory = async ({ name, address, status }) => {
  if (!name) {
    throw new Error('name is required');
  }

  if (!address) {
    throw new Error('address is required');
  }

  const savedLaboratory = await Laboratories.findOne({ where: { name } });
  if (savedLaboratory) {
    throw new Error(`there is a laboratory with the same name: ${name}`);
  }

  return await Laboratories.create({ name, address, status });
};

const createLaboratoryBatch = async (laboratories) => {
  const result = {
    successes: [],
    errors: []
  };

  for (const labortory of laboratories) {
    try {
      result.successes.push(await createLaboratory(labortory));
    } catch (e) {
      result.errors.push(e.message);
    }
  }

  return result;
};

const getActive = async () => {
  const laboratoryActive = await Laboratories.findAll({ where: { status: true } });
  return laboratoryActive;
};

const update = async ({ id, name, address, status }) => {
  const getLaboratoryId = await Laboratories.findOne({ where: { id } });

  if (!getLaboratoryId) {
    throw new Error('labortory not found');
  }

  getLaboratoryId.name = name;
  getLaboratoryId.address = address;
  getLaboratoryId.status = status;
  await getLaboratoryId.save();

  return getLaboratoryId;
};

const logicalDelete = async (id) => {
  const getLaboratoryId = await Laboratories.findOne({ where: { id } });

  if (!getLaboratoryId) {
    throw new Error('Laboratory not found');
  }

  getLaboratoryId.status = false;
  return await getLaboratoryId.save();
};

module.exports = {
  getByLaboratory,
  createLaboratory,
  createLaboratoryBatch,
  getActive,
  update,
  logicalDelete
};
