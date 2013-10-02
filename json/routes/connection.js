//----Para establecer la conexion a la BBDD

var connection = mysql.createConnection(
    {
      // esto es para conectarme a casa
      host     : 'localhost',
      user     : 'root',
      password : 'Manuel_72',
      database : 'Autonomias',
    }
);

// log, conectando a mi BBDD
console.log('EOEOEO________------_______Connecting to MySQL...');


// me conecto a mi BBDD 
connection.connect(function(error, results) {
	if(error) {
		console.log('PPPPPPP________------_______Connection Error: ' + error.message);
		return;
	}
	console.log('LOLLLLL________------_______Connected to MySQL');
	
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

        //ClientReady(connection);
    });
};

//-----------------------------------------
