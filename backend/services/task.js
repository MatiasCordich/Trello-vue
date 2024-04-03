const TaskModel = require('../models/Task')
const { ObjectId } = require('mongoose').Types;

// Obtener todas las tareas
const getAllTasks = async () => {
  const response = await TaskModel.find({})

  return response
}

// Obtener tarea por id
const getOneTask = async (id) => {

  const response = await TaskModel.findOne({_id: id})

  return response
}
// Crear una nueva tarea 
const insertTask = async (task) => {
  const response = await TaskModel.create(task)
  return response
}
// Editar tarea
// Eliminar tarea


module.exports = {getAllTasks, getOneTask, insertTask}