var express = require('express');
var router = express.Router();

router.route('/')
    // Obter todas as cidades
    .get(function(req, res) {
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM cidades', function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json({
                            status: true,
                            cidades: rows
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existem cidades cadastradas.'
                        });
                    }
                }
            });
        });
    })

    // Adiciona uma nova cidade
    .post(function(req, res) {
        var cidade = {
            nome: req.body.nome,
            estado: req.body.estado
        };
        req.getConnection(function(err, connection) {
            connection.query('INSERT INTO cidades SET ?', cidade, function(err, result) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    res.status(201).json({
                        status: true,
                        id: result.insertId,
                        message: 'Cidade cadastrada com sucesso.'
                    });
                }
            });
        });
    });

router.route('/:id')
    // Obter informações de uma cidade
    .get(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM cidades WHERE id = ?', id, function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json(rows);
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe cidade com esse id.'
                        });
                    }
                }
            });
        });
    })

    // Editar um registro de uma cidade
    .put(function(req, res) {
        var id = req.params.id;
        var cidade = {};
        if (req.body.nome)
            cidade.nome = req.body.nome;
        if (req.body.estado)
            cidade.estado = req.body.estado;
        req.getConnection(function(err, connection) {
            connection.query('UPDATE cidades SET ? WHERE id = ?', [cidade, id], function(err, result) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({
                            status: true,
                            id: req.params.id,
                            message: 'Cidade editada com sucesso.'
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe cidade com esse id.'
                        });
                    }
                }
            });
        });
    })

    // Deletar um registro de uma cidade
    .delete(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            connection.query('DELETE from cidades WHERE id = ?', id, function(err, result) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({
                            status: true,
                            message: 'Cidade removida com sucesso.'
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe cidade com esse id.'
                        });
                    }
                }
            });
        });
    });

module.exports = router;