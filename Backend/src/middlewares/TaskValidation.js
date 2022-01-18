const TaskModel = require('../model/TaskModel')
const {isPast} = require('date-fns')

const TaskValidation = async(req, res, next) => {
    const {macaddress, type, title, description, when} = req.body

    if(!macaddress)
    return res.status(400).json({error: 'macaddress é obrigatorio!'})
    else if (!title)
    return res.status(400).json({error: 'titulo é obrigatorio!'})
    else if (!description)
    return res.status(400).json({error: 'Descrição é obrigatorio!'})
    else if (!when)
    return res.status(400).json({error: 'data e hora são obrigatorio!'})
    else if(isPast(new Date(when)))
    return res.status(400).json({error: 'Escolha uma data e hora futura'})
    else {
        let exists;
        
        if(req.params.id) {
            exists = await TaskModel.findOne({'_id': {'$ne': req.params.id},'when': {'$eq': new Date(when)},
        'macaddress': {'$in': macaddress}})
        } else {
        exists = await TaskModel.findOne({'when': {'$eq': new Date(when)},
        'macaddress': {'$in': macaddress}})
    }
        if(exists){
            return res.status(400).json({error: 'Já existe uma tarefa nesse dia e hora'})
        }
        next();
    }

}

module.exports = TaskValidation