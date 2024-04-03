const { getAllTasks, getOneTask, insertTask } = require("../services/task");

// Obtener todas las tareas
const getAll = async (req, res) => {
  try {
    const response = await getAllTasks();

    if (response.length === 0) {
      return res.status(202).send({
        msg: "No hay tareas todavia",
      });
    }

    return res.status(200).send({
      response,
    });
  } catch (error) {
    return res.status(505).send({
      msg: "ERROR AL OBTENER LAS TAREAS",
    });
  }
};

//Obtener tarea por ID
const getByID = async (req, res) => {
  try {
    console.log(req.params.id);
    const id_task = req.params.id;

    const response = await getOneTask(id_task);

    if (!response) {
      return res.status(404).send({
        msg: "Tarea no encontrada",
      });
    }

    return res.status(200).send({
      response,
    });
  } catch (error) {
    return res.status(505).send({
      msg: "ERROR AL OBTENER LA TAREA",
    });
  }
};

const postTask = async (req, res) => {
    try {

        const newTask = await insertTask(req.body)

        res.status(200).send({
            msg: "Se ha agregado correctamente",
            newTask
        })
    } catch (error) {
        return res.status(505).send({
            msg: "ERROR AL CREAR LA TAREA",
          }); 
    }
}

module.exports = { getAll, getByID, postTask };
