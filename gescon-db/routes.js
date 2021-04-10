const express = require("express");
const router = express.Router();

const servicoController = require('./controllers/servicoController');
const administradoraController = require('./controllers/administradoraController');
const condominioController = require('./controllers/condominioController');

router.post("/servico", servicoController.create);
router.get("/servico", servicoController.getAll);
router.get("/servico/:id", servicoController.getById);
router.put("/servico/:id", servicoController.alterById);
router.delete("/servico/:id", servicoController.deleteById);

router.post("/administradora", administradoraController.create);
router.get("/administradora", administradoraController.getAll);
router.delete("/administradora/:id", administradoraController.deleteById);
router.put("/administradora/:id", administradoraController.alterById);

router.post("/condominio", condominioController.create);
router.get("/condominio", condominioController.getAll);
router.delete("/condominio/:id", condominioController.deleteById);
router.put("/condominio/:id", condominioController.alterById);

module.exports = router;