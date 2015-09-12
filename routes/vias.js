var express = require('express');
var router = express.Router();

router.route('/')
    // Obter todas as vias
    .get(function(req, res) {
        
    })

    // Adiciona uma nova via
    .post(function(req, res){
        
    });

router.route('/:id')
    // Obter informações de uma via
    .get(function(req, res){
        
    })

    // Editar um registro de uma via
    .put(function(req, res){
        
    })

    // Deletar um registro de uma via
    .delete(function(req, res){
        
    });

module.exports = router;
