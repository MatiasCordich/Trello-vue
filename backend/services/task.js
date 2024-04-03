const TaskModel = require('../models/Task')

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
const updateTask = async (data, id) => {
  const response = await TaskModel.findByIdAndUpdate({_id: id}, data, {new: true})

  return response
}
// Eliminar tarea
const deleteTask = async (id) => {
  const response = await TaskModel.findByIdAndDelete({_id: id})

  return response
}

module.exports = {getAllTasks, getOneTask, insertTask, updateTask, deleteTask}