var express = require('express');
var router = express.Router();

router.route('/via/:id_via')
    // Obter informações de horários de uma via
    .get(function(req, res) {
        var id_via = req.params.id_via;
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM horarios WHERE id_via = ?', id_via, function(err, rows) {
                if (err) {
                    res.status(200).json({
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
                            message: 'Não existe via com esse id.'
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
                    res.status(200).json({
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
                            message: 'Não existe via com esse id.'
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
                    res.status(200).json({
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
                            message: 'Não existe via com esse id.'
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
                    res.status(200).json({
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
                            message: 'Não existe via com esse id.'
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
                    res.status(200).json({
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
                            message: 'Não existe via com esse id.'
                        });
                    }
                }
            });
        });
    });


router.route('/')
    // Adiciona um novo horario de onibus
    .post(function(req, res) {

    });


router.route('/:id')
    // Editar um registro de horário de ônibus
    .put(function(req, res) {

    })

    // Deletar um registro de horário de ônibus
    .delete(function(req, res) {

    });


module.exports = router;