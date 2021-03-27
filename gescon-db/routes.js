const express = require("express");
const router = express.Router();

const servicoController = require('./controllers/servicoController');

router.post("/servico", servicoController.create);
router.get("/servico", servicoController.getAll);
router.get("/servico/:id", servicoController.getById);
router.put("/servico/:id", servicoController.alterById);
router.delete("/servico/:id", servicoController.deleteById);

module.exports = router;