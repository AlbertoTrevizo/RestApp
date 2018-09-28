var express = require('express');
var router = express.Router();
const resultsController = require('../controllers/resultsController');

router.get('/:n1/:n2', resultsController.sumar);

/* GET users listing. */
router.post('/', resultsController.multiplicar);

router.put('/', resultsController.dividir);

router.delete('/:n1/:n2', resultsController.restar);

module.exports = router;
