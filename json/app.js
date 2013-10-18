
/**
 * Module dependencies.
 */

var express = require('express')
  , mysql = require('mysql') //Añadiendo 
  , routes = require('./routes')
  , user = require('./routes/user')
  //, connection = require('./routes/connection')
  //, autonomias = require('./routes/autonomias')
  ,	capitalxcommunity = require('./routes/capitalxcommunity')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("jsonp callback", true);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//----Para establecer la conexion a la BBDD

var connection = mysql.createConnection(
    {
      // Aqui los datos de conexion a mySql que correspondan
      host     : 'localhost',
      user     : 'root',
      password : 'Manuel_72',
      database : 'Autonomias',
    }
);

// log, conectando a mi BBDD
console.log('Connecting to MySQL...');


// me conecto a mi BBDD --> ESTABLECIENDO LA CONEXION A LA BBDD
connection.connect(function(error, results) {
	if(error) {
		console.log('Connection Error: ' + error.message);
		return;
	}
	console.log('Connected to MySQL');
	
	ClientConnectionReady(connection);
});


// le digo que tabla usare
ClientConnectionReady = function(connection)
{
	connection.query('USE Autonomias', function(error, results) {
        if(error) {
            console.log('ClientConnectionReady Error: ' + error.message);
            connection.end();
            return;
        }

    });
};


//METODO DE CONSULTA A LA BBDD AUTONIMIAS, EL CUAL ME DEVOLVERA TODAS LAS COMUNIDADES AUTONOMAS DE LA BASE DE DATOS.
app.get('/autonomias',  function(req, res) {

	 //var qery = "select * from comunidades"; //Nos devolvera todas las comunidades autónomas de la BBDD

	  var qery = "select * from comunidades c, provincias p where c.id_comunidades = p.id_comunidades";
	  console.log(qery);
	  console.log('req--->'+req);//estos CONSOLE salen por la consola del node: localhost:3000

	  connection.query(qery,
		function(err, results, fields) {
		console.log('\nESTAMOS EN LA FUNCION ERROR - RESULT - CAMPOS');
		
	        if(err) { throw err; }
	        
	        if (results && results.length > 1) {
				console.log('\nESTAMOS EN LA PARTE DE RESULTADOS , PORQUE EXISTE POR LO MENOS 1');
			
				res.header("Access-Control-Allow-Origin","*");
	            
	            
	            var json = JSON.stringify(results[0]);
	            console.log('\nEste es el JSON... o eso creo -->  ' + json);
	            
	            res.end(JSON.stringify(results));
	          

	        } else {
	        	console.log('\nALGO NO FUE TAN BIEN');
	        
	            //req.session.destroy();
	            res.writeHead(401, { 'Content-Type': 'text/html' });
	            res.end();
	        }
	    });
});
//-----------------------------------------



app.get('/', routes.index);
app.get('/users', user.list);



//Definicion de nuestros SERVICIOS DE PRUEBA
app.get('/capitalxcommunity',capitalxcommunity.getCapitalxcommunity);


//-------------------------------------------



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

});




