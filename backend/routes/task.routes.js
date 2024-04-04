const { Router } = require("express");
const { postTask, updateTask, getAllTasks, getTaskByID, deleteTask } = require("../controllers/task.controller");

const router = Router()

router.post('/', postTask)
router.get('/', getAllTasks)
router.get('/:id', getTaskByID)
router.put('/:id', updateTask)
router.delete('/:id/:stID?', deleteTask)


module.exports = router