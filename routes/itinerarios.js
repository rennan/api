var express = require('express');
var router = express.Router();

router.route('/')
    // Obter todos os itinerarios de um onibus
    .get(function(req, res) {
        
    })

    // Adiciona um novo horario para uma via de onibus
    .post(function(req, res){
        
    });

router.route('/:id')
    // Obter informações itinerarios de um onibus
    .get(function(req, res){
        
    })

    // Editar um registro de um itinerarios de um onibus
    .put(function(req, res){
        
    })

    // Deletar um registro de um itinerarios de um onibus
    .delete(function(req, res){
        
    });

module.exports = router;
