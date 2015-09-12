var express = require('express');
var router = express.Router();

router.route('/')
    // Obter todos os onibus
    .get(function(req, res) {
        req.getConnection(function(err, connection) {
            var query = connection.query('SELECT * FROM circulares', function(err, rows) {
                if (rows.length > 0) {
                    res.json({
                        status: true,
                        linhas: rows
                    });
                } else {
                    res.status(404).json({
                        status: false,
                        message: 'Não existem ônibus cadastrados'
                    });
                }
            });
        });
    })

    // Adiciona um novo onibus
    .post(function(req, res){
        
    });

router.route('/:id')
    // Obter informações de um onibus
    .get(function(req, res){
        
    })

    // Editar um registro de um onibus
    .put(function(req, res){
        
    })

    // Deletar um registro de um onibus
    .delete(function(req, res){
        
    });

module.exports = router;
