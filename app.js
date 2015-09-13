// Dependencias
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    connection = require('express-myconnection'),

    // Rotas
    routes = require('./routes/index'),
    cidades = require('./routes/cidades'),
    empresas = require('./routes/empresas'),
    onibus = require('./routes/onibus'),
    vias = require('./routes/vias'),
    horarios = require('./routes/horarios'),
    itinerarios = require('./routes/itinerarios');

var app = express();

// Conexao no BD
app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_api_transporte_coletivo',
    }, 'request')
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/cidades', cidades);
app.use('/empresas', empresas);
app.use('/onibus', onibus);
app.use('/vias', vias);
app.use('/horarios', horarios);
app.use('/itinerarios', itinerarios);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;