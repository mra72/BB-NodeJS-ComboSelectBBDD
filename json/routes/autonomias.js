exports.getAutonomias = function(req, res){
  //res.send("respond with a resource cars");
  
  console.log('getAutonomias');

  /*
  var qery = "select * from comunidades";

  console.log(qery);

  connection.query(q,
	function(err, results, fields) {
	console.log('\nESTAMOS EN LA FUNCION ERROR - RESULT - CAMPOS');
	
        if(err) { throw err; }
        
        if (results && results.length > 1) {
			console.log('\nESTAMOS EN LA PARTE DE RESULTADOS , PORQUE EXISTE POR LO MENOS 1');
		
			res.header("Access-Control-Allow-Origin","*");
            
            
            var json = JSON.stringify(results[0]);
            console.log('\nEste es el JSON... o eso creo -->  ' + json);
            
            //res.write(JSON.stringify(results[0]), 'utf8');
            res.end(JSON.stringify(results));
          

        } else {
        	console.log('\nALGO NO FUE TAN BIEN');
        
            //req.session.destroy();
            res.writeHead(401, { 'Content-Type': 'text/html' });
            res.end();
        }
    });
  */



 

  var json = JSON.stringify({
			    "autonomias": [
	 					{
					        "text": "Castilla-La Mancha"

					    },
					    {
					        "text": "Aragón"
					        
					    }
					]
			});
   res.header("Access-Control-Allow-Origin", "*");
   res.send(json);


};