var express = require('express');
var router = express.Router();

router.route('/via/:id_via')
	// Obter informações de horários de uma via
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM horarios WHERE id_via = ?', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) cadastrado(s) para o id desta via.'
						});
					}
				}
			});
		});
	});


router.route('/via/:id_via/dias-uteis')
	// Obter informações de horários de uma via em dias úteis
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM horarios WHERE id_via = ? AND dias_uteis = 1', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) cadastrado(s) ou para o id desta via.'
						});
					}
				}
			});
		});
	});


router.route('/via/:id_via/sabado')
	// Obter informações de horários de uma via aos sabados
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM horarios WHERE id_via = ? AND sabado = 1', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) para sábado ou para o id desta via.'
						});
					}
				}
			});
		});
	});


router.route('/via/:id_via/domingo')
	// Obter informações de horários de uma via aos domingos
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM horarios WHERE id_via = ? AND domingo = 1', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) para domingo ou para o id desta via.'
						});
					}
				}
			});
		});
	});


router.route('/via/:id_via/feriados')
	// Obter informações de horários de uma via aos feriados
	.get(function(req, res) {
		var id_via = req.params.id_via;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT * FROM horarios WHERE id_via = ? AND feriado = 1', id_via, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) para feriado ou para o id desta via.'
						});
					}
				}
			});
		});
	});


router.route('/')
	// Adiciona um novo horario de onibus
	.post(function(req, res) {
		var horario = {};
		if (req.body.dias_uteis)
			horario.dias_uteis = req.body.dias_uteis;
		if (req.body.sabado)
			horario.sabado = req.body.sabado;
		if (req.body.domingo)
			horario.domingo = req.body.domingo;
		if (req.body.feriado)
			horario.feriado = req.body.feriado;

		if (req.body.id_via && req.body.ponto_inicial && req.body.hora) {

			horario.id_via = req.body.id_via;
			horario.ponto_inicial = req.body.ponto_inicial;
			horario.hora = req.body.hora;

			req.getConnection(function(err, connection) {
				connection.query('INSERT INTO horarios SET ?', horario, function(err, result) {
					if (err) {
						res.status(200).json({
							status: false,
							message: 'Não existe cidade com esse id.'
						});
					} else {
						res.status(201).json({
							status: true,
							id: result.insertId,
							message: 'Horário de via cadastrado com sucesso.'
						});
					}
				});
			});

		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_via", "ponto_inicial" e "hora" são obrigatórios.'
			});
		}
	});


router.route('/:id')
	// Editar um registro de horário de ônibus
	.put(function(req, res) {
		var id = req.params.id;
		var horario = {};
		if (req.body.dias_uteis)
			horario.dias_uteis = req.body.dias_uteis;
		if (req.body.sabado)
			horario.sabado = req.body.sabado;
		if (req.body.domingo)
			horario.domingo = req.body.domingo;
		if (req.body.feriado)
			horario.feriado = req.body.feriado;

		if (req.body.id_via && req.body.ponto_inicial && req.body.hora) {

			horario.id_via = req.body.id_via;
			horario.ponto_inicial = req.body.ponto_inicial;
			horario.hora = req.body.hora;

			req.getConnection(function(err, connection) {
				connection.query('UPDATE horarios SET ? WHERE id = ?', [horario, id], function(err, result) {
					if (err) {
						res.status(400).json({
							status: false,
							message: 'Erro desconhecido. Por favor tente novamente.'
						});
					} else {
						if (result.affectedRows > 0) {
							res.status(200).json({
								status: true,
								id: req.params.id,
								message: 'Horário de via editado com sucesso.'
							});
						} else {
							res.status(200).json({
								status: false,
								id: req.params.id,
								message: 'Não existe horário de via com esse id.'
							});
						}
					}
				});
			});
		} else {
			res.status(200).json({
				status: false,
				message: 'Os campos "id_via", "ponto_inicial" e "hora" são obrigatórios.'
			});
		}
	})

	// Deletar um registro de horário de ônibus
	.delete(function(req, res) {
		var id = req.params.id;
		req.getConnection(function(err, connection) {
			connection.query('DELETE from horarios WHERE id = ?', id, function(err, result) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (result.affectedRows > 0) {
						res.status(204); // Response 204 nao possui mensagem de status
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe horário de via com esse id.'
						});
					}
				}
			});
		});
	});


router.route('/linha/:linha')
	// Obter informações de horários de uma linha
	.get(function(req, res) {
		var linha = req.params.linha;
		req.getConnection(function(err, connection) {
			var query = connection.query('SELECT circulares.linha AS linha, circulares.nome AS nome, vias.nome AS via, horarios.hora as hora, horarios.ponto_inicial as local FROM circulares INNER JOIN vias ON vias.id_onibus = circulares.id INNER JOIN horarios ON horarios.id_via = vias.id WHERE circulares.linha = ? AND dias_uteis = 1 ORDER BY horarios.hora', linha, function(err, rows) {
				if (err) {
					res.status(400).json({
						status: false,
						message: 'Erro desconhecido. Por favor tente novamente.'
					});
				} else {
					if (rows.length > 0) {
						res.json({
							status: true,
							horarios: rows
						});
					} else {
						res.status(200).json({
							status: false,
							message: 'Não existe(m) horário(s) para esta linha.'
						});
					}
				}
			});
		});
	});


module.exports = router;