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
					horarios: rows,
					script: 'horarios'
				});
			}
		});
	});
});

router.get('/itinerarios', function(req, res, next) {
	res.render('itinerarios', { title: 'Itinerários' });
});

router.get('/buscar-horario', function(req, res) {
	req.getConnection(function(err, connection) {
		var query = connection.query('SELECT circulares.nome AS linha, circulares.linha AS codigo, vias.nome AS via FROM circulares INNER JOIN vias ON vias.id_onibus = circulares.id WHERE ' + (req.query.tipo == 'nome' ? ('CONCAT(circulares.nome, " ", vias.nome) LIKE "%' + req.query.texto + '%"') : 'circulares.linha = "' + req.query.texto + '"'), function(err, rows) {
			if (err) {
				res.status(400).json({
					status: false,
					message: 'Erro desconhecido. Por favor tente novamente.'
				});
			} else {
				res.render('tabela-linhas', {
					status: true,
					linhas: rows
				});
			}
		});
	});
});

module.exports = router;
