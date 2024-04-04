const TaskModel = require("../models/Task");

// Obtener todas las tareas
const getAll = async () => {
  try {
    const response = await TaskModel.find({});
    return response;
  } catch (error) {
    throw new Error("Error al obtener todas las tareas: " + error.message);
  }
};

// Obtener tarea por id
const getOne = async (id) => {
  try {
    const response = await TaskModel.findOne({ _id: id });
    return response;
  } catch (error) {
    throw new Error("Error al obtener la tarea: " + error.message);
  }
};
// Crear una nueva tarea
const insert = async (taskData) => {
  try {
    const response = await TaskModel.create(taskData);
    return response.save();
  } catch (error) {
    throw new Error("Error al insertar la tarea: " + error.message);
  }
};

// Editar tarea
const update = async (id, newData) => {
  try {
    if (newData.subtasks && newData.subtasks.length > 0) {
      const isExist = await TaskModel.findById(id);
      if (!isExist) {
        throw new Error("Tarea no encontrada");
      }

      newData.subtasks.forEach((newSubtask) => {
        isExist.subtasks.push(newSubtask);
      });

      const response = await isExist.save();

      return response;
    } else {
      const response = await TaskModel.findByIdAndUpdate({ _id: id }, newData, {
        new: true,
      });

      return response;
    }
  } catch (error) {
    throw new Error("Error al actualizar la tarea: " + error.message);
  }
};

// Eliminar tarea
const deleteT = async (id, subtaskID) => {
  try {
    const isExist = await TaskModel.findById(id);

    if (!isExist) {
      throw new Error("Tarea no encontrada");
    }

    if (subtaskID) {
      isExist.subtasks.pull({ _id: subtaskID });
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
