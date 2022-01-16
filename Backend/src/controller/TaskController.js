const TaskModel = require('../model/TaskModel');
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns')

const current = new Date();
// faz a requisição no banco
class TaskController{
    //Criar tarefa
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task.save()
                    .then(response =>{
                        return res.status(200).json(response);
                    })
                    .catch(error =>{
                        return res.status(500).json(error);
                    })
    }
    //Atualizar uma tarefa
    async update(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    }
    //Listar as tarefas
    async all(req, res) {
        await TaskModel.find({ macaddress: {'$in': req.params.macaddress} })
            .sort('when')
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            })
    }
    // Mostra uma tarefa especifica
    async show(req, res) {
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'tarefa nao existe'})
        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }
    //Deleta uma tarefa especifica
    async delete(req, res) {
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })

        
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id},
        {'done': req.params.done},
        {new: true})
        .then(response => {
            return res.status(200).json(response);

        })
        .catch(error => {
            return res.status(500).json(error)
        })
    }

    async late(req, res) {
        await TaskModel.find({'when': {'$lt': current},
    'macaddress': {'$in': req.params.macaddress}})
    .sort('when')
    .then( response =>{
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
    }
    // Filtra tarefas do dia, pegando o primeiro segundo do dia e o ultimo
    async today(req, res) {
        await TaskModel.find({'macadrress': {'$in': req.params.macaddress},
    'when': {'$gte': startOfDay(current), '$lt': endOfDay(current)} })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
    }

    async week(req, res) {
        await TaskModel.find({'macadrress': {'$in': req.params.macaddress},
    'when': {'$gte': startOfWeek(current), '$lt': endOfWeek(current)} })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
    }

    async month(req, res) {
        await TaskModel.find({'macadrress': {'$in': req.params.macaddress},
    'when': {'$gte': startOfMonth(current), '$lt': endOfMonth(current)} })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
    }

    async year(req, res) {
        await TaskModel.find({'macadrress': {'$in': req.params.macaddress},
    'when': {'$gte': startOfYear(current), '$lt': endOfYear(current)} })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response)
    })
    .catch(error => {
        return res.status(500).json(error)
    })
    }
}
    
module.exports = new TaskController();