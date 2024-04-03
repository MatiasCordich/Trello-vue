const { Router } = require("express");
const { getAll, getByID, postTask } = require("../controllers/task.controller");

const router = Router()

router.post('/', postTask)
router.get('/', getAll)
router.get('/:id', getByID)


module.exports = router