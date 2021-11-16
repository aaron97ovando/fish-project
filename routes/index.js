var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Compañia', author: 'Aaron Ovando', appName: 'Web Pack' });
});

/* Agregando una ruta */
router.get('/greeting', function(req, res, next) {
  res.send('Hola Este sera el Proyecto final del la Materia');
})

module.exports = router;
