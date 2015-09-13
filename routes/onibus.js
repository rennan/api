var express = require('express');
var moment = require('moment');
var router = express.Router();
var timestamp = moment(Date.now()).format('DD/MM/YYYY HH:mm:ss');

router.route('/')
    // Obter todos os onibus
    .get(function(req, res) {
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM circulares', function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json({
                            status: true,
                            onibus: rows
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existem ônibus cadastrados.'
                        });
                    }
                }
            });
        });
    })

    // Adiciona um novo onibus
    .post(function(req, res) {

        var onibus = {
            linha: req.body.linha,
            data_criacao: timestamp,
            data_atualizacao: timestamp
        };

        if (req.body.id_empresa && req.body.nome) {
            onibus.id_empresa = req.body.id_empresa;
            onibus.nome = req.body.nome;

            req.getConnection(function(err, connection) {
                connection.query('INSERT INTO circulares SET ?', onibus, function(err, result) {
                    if (err) {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe empresa com esse id.'
                        });
                    } else {
                        res.status(201).json({
                            status: true,
                            id: result.insertId,
                            message: 'Ônibus cadastradao com sucesso.'
                        });
                    }
                });
            });

        } else {
            res.status(200).json({
                status: false,
                message: 'Os campos "id_empresa" e "nome" são obrigatórios.'
            });
        }
    });

router.route('/:id')
    // Obter informações de um onibus
    .get(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM circulares where id = ?', id, function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json({
                            status: true,
                            onibus: rows
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe ônibus com esse id.'
                        });
                    }
                }
            });
        });
    })

    // Editar um registro de um onibus
    .put(function(req, res) {
        var id = req.params.id;
        var onibus = {
            data_atualizacao: timestamp
        };

        if (req.body.linha) {
            onibus.linha = req.body.linha;
        }

        if (req.body.id_empresa && req.body.nome) {
            onibus.id_empresa = req.body.id_empresa;
            onibus.nome = req.body.nome;

            req.getConnection(function(err, connection) {
                connection.query('UPDATE circulares SET ? WHERE id = ?', [onibus, id], function(err, result) {
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
                                message: 'Ônibus editado com sucesso.'
                            });
                        } else {
                            res.status(200).json({
                                status: false,
                                message: 'Não existe ônibus com esse id.'
                            });
                        }
                    }
                    
                });
            });

        } else {
            res.status(200).json({
                status: false,
                message: 'Os campos "id_empresa" e "nome" são obrigatórios.'
            });
        }
    })

    // Deletar um registro de um onibus
    .delete(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            connection.query('DELETE from circulares WHERE id = ?', id, function(err, result) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({
                            status: true,
                            message: 'Ônibus removido com sucesso.'
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe ônibus com esse id.'
                        });
                    }
                }
            });
        });
    });

module.exports = router;
