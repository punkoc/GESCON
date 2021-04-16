const express = require("express");
const router = express.Router();

const servicoController = require('./controllers/servicoController');
const administradoraController = require('./controllers/administradoraController');
const condominioController = require('./controllers/condominioController');
const proprietarioController = require('./controllers/proprietarioController');
const unidadeController = require('./controllers/unidadeController');
const terceiroController = require('./controllers/terceiroController');
const cobrancaController = require('./controllers/cobrancaController');
const loginController = require('./controllers/loginController');

router.post("/servico", servicoController.create);
router.get("/servico", servicoController.getAll);
router.get("/servico/:id", servicoController.getById);
router.put("/servico/:id", servicoController.alterById);
router.delete("/servico/:id", servicoController.deleteById);

router.post("/administradora", administradoraController.create);
router.get("/administradora", administradoraController.getAll);
router.delete("/administradora/:id", administradoraController.deleteById);
router.put("/administradora/:id", administradoraController.alterById);
router.get("/administradora/:id", administradoraController.getById);

router.post("/condominio", condominioController.create);
router.get("/condominio", condominioController.getAll);
router.delete("/condominio/:id", condominioController.deleteById);
router.put("/condominio/:id", condominioController.alterById);
router.get("/condominio/:id", condominioController.getById);

router.post("/proprietario", proprietarioController.create);
router.get("/proprietario", proprietarioController.getAll);
router.delete("/proprietario/:id", proprietarioController.deleteById);
router.put("/proprietario/:id", proprietarioController.alterById);
router.get("/proprietario/:id", proprietarioController.getById);

router.post("/unidade", unidadeController.create);
router.get("/unidade", unidadeController.getAll);
router.delete("/unidade/:id", unidadeController.deleteById);
router.put("/unidade/:id", unidadeController.alterById);
router.get("/unidade/:id", unidadeController.getById);

router.post("/terceiro", terceiroController.create);
router.get("/terceiro", terceiroController.getAll);
router.delete("/terceiro/:id", terceiroController.deleteById);
router.put("/terceiro/:id", terceiroController.alterById);
router.get("/terceiro/:id", terceiroController.getById);

router.post("/cobranca", cobrancaController.create);
router.get("/cobranca", cobrancaController.getAll);
router.delete("/cobranca/:id", cobrancaController.deleteById);
router.put("/cobranca/:id", cobrancaController.alterById);
router.get("/cobranca/:id", cobrancaController.getById);

router.post("/login", loginController.create);
router.get("/login", loginController.getAll);
router.delete("/login/:id", loginController.deleteById);
router.put("/login/:id", loginController.alterById);
router.get("/login/:id", loginController.getById);

module.exports = router;