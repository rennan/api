var express = require('express');
var router = express.Router();

router.route('/via/:id_via')
	// Obter todas paradas do itinerário de um ônibus
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM itinerarios WHERE id_via = ?', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							paradas: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe itinerário para esta via de ônibus.'
						});
					}
				}
			});
		});
	});


router.route('/')
	// Adiciona uma nova parada do itinerário do ônibus
	.post(function(req, res) {
		var parada = {
			latitude: req.body.latitude,
			longitude: req.body.longitude
		};

		if (req.body.id_via && req.body.ordem && req.body.nome) {
			parada.id_via = req.body.id_via;
			parada.ordem = req.body.ordem;
			parada.nome = req.body.nome;

			req.getConnection(function(err, connection) {
				connection.query('INSERT INTO itinerarios SET ?', parada, function(err, result) {
					if (err) {
						res.status(200).json({
							status: false,
							message: 'Não existe via com esse id.'
						});
					} else {
						res.status(201).json({
							status: true,
							id: result.insertId,
							message: 'Itinerário cadastradao com sucesso.'
						});
					}
				});
			});
		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_via", "ordem" e "nome" são obrigatórios.'
			});
		}
	});


router.route('/:id')
	// Editar um registro de parada do itinerário do ônibus
	.put(function(req, res) {
		var id = req.params.id;
		var parada = {};

		if (req.body.latitude)
			parada.latitude = req.body.latitude;

		if (req.body.longitude)
			parada.longitude = req.body.longitude;

		if (req.body.id_via && req.body.ordem && req.body.nome) {
			parada.id_via = req.body.id_via;
			parada.ordem = req.body.ordem;
			parada.nome = req.body.nome;

			req.getConnection(function(err, connection) {
				connection.query('UPDATE itinerarios SET ? WHERE id = ?', [parada, id], function(err, result) {
					if (err) {
						res.status(200).json({
							status: false,
							message: 'Não existe via de ônibus com esse id'
						});
					} else {
						if (result.affectedRows > 0) {
							res.status(200).json({
								status: true,
								message: 'Parada do itinerário editada com sucesso.'
							});
						} else {
							res.status(200).json({
								status: false,
								message: 'Não existe parada de ônibus com esse id'
							});
						}
					}
				});
			});
		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_via", "ordem" e "nome" são obrigatórios.'
			});
		}
	})

	// Deletar um registro de parada do itinerário do ônibus
	.delete(function(req, res) {
		var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('DELETE from itinerarios WHERE id = ?', id, function(err, result) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (result.affectedRows > 0) {
						res.status(200).json({
							status: true,
							message: 'Parada de itinerário removida com sucesso.'
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe parada de itinerário com esse id.'
						});
					}
				}
			});
		});
	});


module.exports = router;