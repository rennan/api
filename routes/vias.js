var express = require('express');
var router = express.Router();

router.route('/')
	// Obter todas as vias de onibus
	.get(function(req, res) {
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM vias', function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							vias: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existem vias cadastradas.'
						});
					}
				}
			});
		});
	})

	// Adiciona uma nova via de onibus
	.post(function(req, res) {
		var via = {};
		if (req.body.id_onibus && req.body.nome) {
			via.id_onibus = req.body.id_onibus;
			via.nome = req.body.nome;

			req.getConnection(function(err, connection) {
				var query = connection.query('INSERT INTO vias SET ?', via, function(err, result) {
					if (err) {
						res.status(200).json({
							status: false,
							message: 'Não existe ônibus com esse id.'
						});
					} else {
						res.status(201).json({
							status: true,
							id: result.insertId,
							message: 'Via cadastrada com sucesso.'
						});
					}
				});
			});

		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_onibus" e "nome" são obrigatórios.'
			});
		}
	});

router.route('/onibus/:id_onibus')
	// Obter informações de todas vias de ônibus
	.get(function(req, res) {
		var id_onibus = req.params.id_onibus;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM vias WHERE id_onibus = ?', id_onibus, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							vias: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) via(s) para o ônibus'
						});
					}
				}
			});
		});
	});

router.route('/:id')
	// Obter informações de uma via de onibus
	.get(function(req, res) {
		var id = req.params.id;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM vias WHERE id = ?', id, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							vias: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe via com esse id.'
						});
					}
				}
			});
		});
	})

	// Editar um registro de uma via de onibus
	.put(function(req, res) {
		var id = req.params.id;
		var via = {};

		if (req.body.id_onibus && req.body.nome) {
			via.id_onibus = req.body.id_onibus;
			via.nome = req.body.nome;

			req.getConnection(function(err, connection) {
				var query = connection.query('UPDATE vias SET ? WHERE id = ?', [via, id], function(err, result) {
					if (err) {
						res.status(200).json({
							status: false,
							message: 'Não existe ônibus com este id.'
						});
					} else {
						if (result.affectedRows > 0) {
							res.status(200).json({
								status: true,
								message: 'Via editada com sucesso.'
							});
						}
					}
				});
			});

		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_onibus" e "nome" são obrigatórios.'
			});
		}
	})

	// Deletar um registro de uma via de onibus
	.delete(function(req, res) {
		var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('DELETE from vias WHERE id = ?', id, function(err, result) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (result.affectedRows > 0) {
						res.status(200).json({
							status: true,
							message: 'Via removida com sucesso.'
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe via com esse id.'
						});
					}
				}
			});
		});
	});

module.exports = router;
