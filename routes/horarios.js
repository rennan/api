var express = require('express');
var router = express.Router();

router.route('/horarios/via/:id_via')
    // Obter informações de horários de uma via
    .get()


router.route('/horarios/via/:id_via/dias-uteis')
    // Obter informações de horários de uma via em dias úteis
    .get();


router.route('/horarios/via/:id_via/sabado')
    // Obter informações de horários de uma via aos sabados
    .get();


router.route('/horarios/via/:id_via/domingo')
    // Obter informações de horários de uma via aos domingos
    .get();


router.route('/horarios/via/:id_via/feriados')
    // Obter informações de horários de uma via aos feriados
    .get();


router.route('/')
    // Adiciona um novo horario de onibus
    .post();


router.route('/horarios/:id')
    // Editar um registro de horário de ônibus
    .put()

    // Deletar um registro de horário de ônibus
    .delete();


module.exports = router;