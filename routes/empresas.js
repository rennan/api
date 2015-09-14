var express = require('express');
var moment = require('moment');
var router = express.Router();
var timestamp = moment(Date.now()).format('DD/MM/YYYY HH:mm:ss');

router.route('/')
    // Obter todas as empresas
    .get(function(req, res) {
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM empresas', function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json({
                            status: true,
                            empresas: rows
                        });
                    } else {
                        res.status(404).json({
                            status: false,
                            message: 'Não existem empresas cadastradas.'
                        });
                    }
                }
            });
        });
    })

    // Adiciona uma nova empresa
    .post(function(req, res) {

        var empresa = {
            data_criacao: timestamp,
            data_atualizacao: timestamp
        };

        if (req.body.id_cidade && req.body.nome) {
            empresa.id_cidade = req.body.id_cidade;
            empresa.nome = req.body.nome;

            req.getConnection(function(err, connection) {
                connection.query('INSERT INTO empresas SET ?', empresa, function(err, result) {
                    if (err) {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe cidade com esse id.'
                        });
                    } else {
                        res.status(201).json({
                            status: true,
                            id: result.insertId,
                            message: 'Empresa cadastrada com sucesso.'
                        });
                    }
                });
            });

        } else {
            res.status(200).json({
                status: false,
                message: 'Os campos "id_cidade", e "nome" são obrigatórios.'
            });
        }
    });

router.route('/:id')
    // Obter informações de uma empresa
    .get(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM empresas WHERE id = ?', id, function(err, rows) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Erro desconhecido. Por favor tente novamente.'
                    });
                } else {
                    if (rows.length > 0) {
                        res.json({
                            status: true,
                            empresa: rows
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe empresa com esse id.'
                        });
                    }
                }
            });
        });
    })

    // Editar um registro de uma empresa
    .put(function(req, res) {
        var id = req.params.id;
        var empresa = {
            data_atualizacao: timestamp
        };

        if (req.body.id_cidade && req.body.nome) {
            empresa.id_cidade = req.body.id_cidade;
            empresa.nome = req.body.nome;

            req.getConnection(function(err, connection) {
                connection.query('UPDATE empresas SET ? WHERE id = ?', [empresa, id], function(err, result) {
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
                                message: 'Empresa editada com sucesso.',
                                data_atualizacao: timestamp
                            });
                        } else {
                            res.status(200).json({
                                status: false,
                                id: req.params.id,
                                message: 'Não existe empresa com esse id.'
                            });
                        }
                    }
                });
            });
        } else {
            res.status(200).json({
                status: false,
                message: 'Os campos "id_cidade" e "nome" são obrigatórios.'
            });
        }
    })

    // Deletar um registro de uma empresa
    .delete(function(req, res) {
        var id = req.params.id;
        req.getConnection(function(err, connection) {
            connection.query('DELETE from empresas WHERE id = ?', id, function(err, result) {
                if (err) {
                    res.status(200).json({
                        status: false,
                        message: 'Não é possível deletar esta empresa.'
                    });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({
                            status: true,
                            message: 'Empresa removida com sucesso.'
                        });
                    } else {
                        res.status(200).json({
                            status: false,
                            message: 'Não existe empresa com esse id.'
                        });
                    }
                }
            });
        });
    });

module.exports = router;