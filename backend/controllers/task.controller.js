const { getAll, getOne, insert, update, deleteT } = require("../services/task");

// Obtener todas las tareas
const getAllTasks = async (req, res) => {
  try {
    const response = await getAll();

    if (response.length === 0) {
      return res.status(202).send({
        msg: "No hay tareas todavia",
      });
    }

    return res.json({
      response,
    });
  } catch (error) {
    return res.status(505).send({
      msg: "ERROR AL OBTENER LAS TAREAS",
    });
  }
};

//Obtener tarea por ID
const getTaskByID = async (req, res) => {
  try {
    console.log(req.params.id);
    const id_task = req.params.id;

    const response = await getOne(id_task);

    if (!response) {
      return res.status(404).send({
        msg: "Tarea no encontrada",
      });
    }

    return res.send({
      response,
    });
  } catch (error) {
    return res.status(505).send({
      msg: "ERROR AL OBTENER LA TAREA",
    });
  }
};

// Crear tarea
const postTask = async (req, res) => {
  try {
    const newTask = req.body;
    const createdTask = await insert(newTask);

    return res.send({
      msg: "Se ha agregado correctamente",
      createdTask,
    });
  } catch (error) {
    return res.status(505).send({
      msg: "ERROR AL CREAR LA TAREA",
    });
  }
};

// Editar tarea
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedTask = await update(id, newData);
    return res.send({
      msg: "Se ha editado correctamente",
      updatedTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(505).send({
      msg: "ERROR AL EDITAR LA TAREA",
    });
  }
};

// Eliminar tarea
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const subtaskID = req.params.stID;

    const response = await deleteT(id, subtaskID);

    return res.send({ msg: response });
  } catch (error) {
    console.log(error);
    return res.status(505).send({
      msg: "ERROR AL EDITAR LA TAREA",
    });
  }
};

module.exports = { getAllTasks, getTaskByID, postTask, updateTask, deleteTask };
