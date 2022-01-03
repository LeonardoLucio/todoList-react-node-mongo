const express = require('express')
const router = express.Router()

//Define as rotas a serem utilizados para acessar a API
const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')
const MacaddressValidation = require('../middlewares/MacaddressValidation')

router.post('/task', TaskValidation, TaskController.create);
router.put('/task/:id', TaskController.update);
router.get('/task/filter/all', MacaddressValidation, TaskController.all);
router.get('/task/:id', TaskController.show)
router.delete('/task/:id', TaskController.delete)
router.put('/task/:id/:done', TaskController.done);
router.get('/task/filter/late', MacaddressValidation, TaskController.late)

module.exports = router;