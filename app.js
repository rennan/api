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
		host: 'us-cdbr-iron-east-03.cleardb.net', //'localhost',
		user: 'bf16362c3ebda0', //'root',
		password: '1acf436a',
		database: 'heroku_906decab4935e66' //'db_api_transporte_coletivo',
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
app.use('/api/cidades', cidades);
app.use('/api/empresas', empresas);
app.use('/api/onibus', onibus);
app.use('/api/vias', vias);
app.use('/api/horarios', horarios);
app.use('/api/itinerarios', itinerarios);

// catch 404 and forward to error handler
// Tratamento para servicos que nao existirem
app.use(function(req, res, next) {
	var err = new Error('Service Not Found');
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