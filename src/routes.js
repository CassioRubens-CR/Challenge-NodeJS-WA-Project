const express = require('express');
const LaboratoryController = require('./controllers/LaboratoryController');
const ExamsController = require('./controllers/ExamsController');
const LaboratoryExamsController = require('./controllers/LaboratoryExamsController');

const routes = express.Router();

// Rotas Laboratorio
// lista de laboratorios
routes.get('/laboratories', LaboratoryController.getByLaboratory);

// criando laboratorios
routes.post('/laboratories', LaboratoryController.createLaboratory);

// lista de laboratorios Ativos
routes.get('/laboratories/active', LaboratoryController.getActive);

// Atualizando laboratorios
routes.put('/laboratories/:id', LaboratoryController.update);

// Remover logicamente um laboratório ativo
routes.patch('/laboratories/:id', LaboratoryController.logicalDelete);

// Rotas Exames
// lista de exames
routes.get('/exams', ExamsController.getByExams);

// criando exames
routes.post('/exams', ExamsController.createExams);

// lista de exames Ativos
routes.get('/exams/active', ExamsController.getExamsActive);

// Atualizando exames
routes.put('/exams/:id', ExamsController.updateExams);

// Remover logicamente um exames ativo
routes.patch('/exams/:id', ExamsController.logicalDeleteExam);

// Rotas associação
// lista de associação por laboratorio 
routes.get('/association/:laboratory_id', LaboratoryExamsController.getByIdLaboratory);

// lista de associação por Exame 
routes.get('/association/:exam_id/exam', LaboratoryExamsController.getExamByLaboratory);

// criando associação
routes.post('/association/:laboratory_id', LaboratoryExamsController.connect);

// excluindo associação
routes.delete('/association/:laboratory_id', LaboratoryExamsController.disconnect);

module.exports = routes;
