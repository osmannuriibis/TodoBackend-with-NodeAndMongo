const router = require('express').Router();
const todoController = require('../controller/todoController');


 router.post("/todo", todoController.todoAdd);
 router.get("/todo", todoController.todoGetAll);
 router.put("/todo/:di", todoController.todoUpdate);
 router.delete("/todo/:id", todoController.todoDelete);
 router.get("/todo/:id", todoController.todoGet);

module.exports = router;