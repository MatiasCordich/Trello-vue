const TaskModel = require("../models/Post");

// Obtener todas las tareas
const getAll = async () => {
  try {
    // Buscamos todas las tareas
    const response = await TaskModel.find({});
    return response;
  } catch (error) {
    throw new Error("Error al obtener todas las tareas: " + error.message);
  }
};

// Obtener tarea por id
const getOne = async (id) => {
  try {
    // Buscamos la taera por ID
    const response = await TaskModel.findOne({ _id: id });
    return response;
  } catch (error) {
    throw new Error("Error al obtener la tarea: " + error.message);
  }
};

// Crear una nueva tarea
const insert = async (taskData) => {
  try {
    // Crear una nueva instancia del modelo con los datos proporcionados
    const response = new TaskModel(taskData);

    // Guardar la nueva tarea a la DB
    return await response.save();
  } catch (error) {
    throw new Error("Error al insertar la tarea: " + error.message);
  }
};

// Editar tarea
const update = async (id, newData, subtaskId) => {
  try {
    // Buscar la tarea por su ID en la base de datos
    const task = await TaskModel.findById(id);
    if (!task) {
      throw new Error("Tarea no encontrada");
    }

    // Si se proporcionó el ID de la subtarea, modificar la subtarea correspondiente
    if (subtaskId) {
      const subtask = task.subtasks.id(subtaskId);
      if (!subtask) {
        throw new Error("Subtarea no encontrada");
      }

      // Actualizar los campos de la subtarea con los datos proporcionados
      subtask.set(newData);
      await task.save();
      return "Subtarea modificada";
    } else {
      // Si no se proporcionó el ID de la subtarea, modificar la tarea principal
      Object.assign(task, newData)
      await task.save();
      return "Tarea modificada";
    }
  } catch (error) {
    throw new Error("Error al actualizar la tarea: " + error.message);
  }
};

// Eliminar tarea
const deleteT = async (id, subtaskID) => {
  try {
    // Buscar la tarea por su ID en la DB
    const isExist = await TaskModel.findById(id);

    if (!isExist) {
      throw new Error("Tarea no encontrada");
    }

    if (subtaskID) {
      // Si se proporciona el ID de la subtarea, eliminar la subtarea de la lista de subtareas de la tarea
      isExist.subtasks.pull({ _id: subtaskID });
      // Guardar los cambios y devolver un mensaje de éxito
      await isExist.save();
      return "Subtarea eliminada correctamente";
    }

    // Si no se proporciona el ID de la subtarea, eliminar la tarea
    await TaskModel.findByIdAndDelete({ _id: id });
    return "Tarea eliminada correctamente";
  } catch (error) {
    throw new Error("Error al obtener todas las tareas: " + error.message);
  }
};

module.exports = {
  getAll,
  getOne,
  insert,
  update,
  deleteT,
};
