var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/cidades', function(req, res, next) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM cidades', function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('cidades', { 
					title: 'Cidades',
					setMenu: 'cidades',
					script: 'cidades',
					cidades: rows
				});
			}
		});
	});
});

router.get('/empresas', function(req, res, next) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM empresas', function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('empresas', { 
					title: 'Empresas',
					setMenu: 'empresas',
					empresas: rows
				});
			}
		});
	});
});

router.get('/linhas', function(req, res, next) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM circulares', function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('linhas', { 
					title: 'Linhas',
					setMenu: 'linhas',
					circulares: rows
				});
			}
		});
	});
});

router.get('/vias', function(req, res, next) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM vias', function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('vias', { 
					title: 'Vias',
					setMenu: 'vias',
					vias: rows
				});
			}
		});
	});
});

router.get('/horarios', function(req, res, next) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT * FROM horarios', function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('horarios', { 
					title: 'Horários',
					setMenu: 'horarios',
					horarios: rows
				});
			}
		});
	});
});

router.get('/itinerarios', function(req, res, next) {
	res.render('itinerarios', { title: 'Itinerários' });
});

module.exports = router;
