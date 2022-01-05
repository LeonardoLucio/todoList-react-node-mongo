const express = require('express')
const router = express.Router()

//Define as rotas a serem utilizados para acessar a API
const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')

router.post('/task', TaskValidation, TaskController.create);
router.put('/task/:id', TaskController.update);
router.get('/task/filter/all/:macaddress', TaskController.all);
router.get('/task/:id', TaskController.show)
router.delete('/task/:id', TaskController.delete)
router.put('/task/:id/:done', TaskController.done);

router.get('/task/filter/late/:macaddress', TaskController.late)
router.get('/task/filter/today/:macaddress', TaskController.today)
router.get('/task/filter/week/:macaddress', TaskController.week)
router.get('/task/filter/month/:macaddress', TaskController.month)
router.get('/task/filter/year/:macaddress', TaskController.year)

module.exports = router;