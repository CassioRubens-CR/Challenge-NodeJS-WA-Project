const express = require('express');
const LaboratoryController = require('./controllers/LaboratoryController');
const ExamsController = require('./controllers/ExamsController');
const LaboratoryExamsController = require('./controllers/LaboratoryExamsController');

const routes = express.Router();

routes.get('/laboratories', LaboratoryController.getByLaboratory);

routes.post('/laboratories', LaboratoryController.createLaboratory);

routes.get('/laboratories/active', LaboratoryController.getActive);

routes.put('/laboratories/:id', LaboratoryController.update);

routes.patch('/laboratories/:id', LaboratoryController.logicalDelete);

routes.get('/exams', ExamsController.getByExams);

routes.post('/exams', ExamsController.createExams);

routes.get('/exams/active', ExamsController.getExamsActive);

routes.put('/exams/:id', ExamsController.updateExams);

routes.patch('/exams/:id', ExamsController.logicalDeleteExam);

routes.get('/association/:laboratory_id', LaboratoryExamsController.getByIdLaboratory);

routes.get('/association', LaboratoryExamsController.getExamByLaboratory);

routes.post('/association/:laboratory_id', LaboratoryExamsController.connect);

routes.delete('/association/:laboratory_id/:exam_id', LaboratoryExamsController.disconnect);

module.exports = routes;
