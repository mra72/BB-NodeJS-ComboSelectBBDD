define([
  'jquery',
  'underscore',
  'backbone',
  'collections/communitiesCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/communitiesListTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone,CommunitiesCollection, CommunitiesListTemplate){//function($, _, Backbone, UsersCollection,CitiesListTemplate,Form)--function($, _, Backbone, ContenidoTemplate)
  var CommunitiesListView = Backbone.View.extend({
    el: 'body', //<div class='page'></div> definido dentro del <div class='container'> en el index.html
    initialize: function()
	  {
		if(typeof(Storage)!=="undefined")
		  {
		  	console.log('Yes! localStorage and sessionStorage support!');
		  	
		  }
		else
		  {
		  	console.log('Sorry! No web storage support..');
		  }

		  
	  },


  
	render: function(eventName,options) {
		 console.log('render citiesListView'); 
		 var that = this;	

	      /*
	       FETCH:
			Este método se encarga de traer el conjunto de MODELOS del SERVIDOR y cargarlos en la COLECCIÓN, reseteándola. El server debe de 
			encargarse de devolver la colección de los modelos en formato JSON, si estás trabajando sobre una API del servidor antigüa y no 
			puedes generar dicha respuesta, te interesará sobreescribir el método 'parse'.
	       */
	       var communitiesCollection = new CommunitiesCollection();
	       communitiesCollection.fetch({
	    	 success: function(collection, response){

		    	 	console.log('CORRECTO ya tengo los SERVICIOS response!!!!!---->'+response);

	    		 	var compiledTemplate = _.template(CommunitiesListTemplate);
	    			that.$el.html(compiledTemplate); 

	    		 	
					var objJson = response; 
					var arrayComunidades = [];
					for (var i= 0; i <= objJson.length-1; i++){
						var aux = objJson[i].nom_comunidades;
						if (i==0) arrayComunidades.push(aux);
						else {
							for (var j=0; j<=arrayComunidades.length-1; j++){

								if (arrayComunidades.indexOf(aux)==-1) arrayComunidades.push(aux); //Devuelve -1 si el elemento no se encuentram si está devolverá su POSICION
							}

						}

					}
					console.log('arrayComunidades-->'+arrayComunidades);

					//Llenamos el combo despues de recibir el Json con la informacion necesaria para ello.
				

					$("#comboCommunities").append('<option value=""></option>');
					$.each(arrayComunidades, function(i,comunidad){ //$.each(response.autonomias, function(i,obj){
							$("#comboCommunities").append('<option value="' + comunidad + '">' + comunidad + '</option>');
					});
					

	    	 } 

	    });

	   
	   
	 },//Cierre 'render'



	events:{
    	'submit form.busqueda':'buscar' // Esto se traduce que al hacer click en combo
    									//se lleva a cabo las acciones descritas en el método 'clickSelectCities'.
    },


    buscar:function(ev){
	    	console.log('click en BUSCAR--->');

	    	//Tras seleccionar COMUNIDAD en combo, se procederá a pulsar el botón de 'buscar' para que dependiendo de 
	    	//la comunidad seleccionada, se lleve a cabo la consulta en la BBDD y tengamos de vuelta un JSON con las
	    	//capitales de provicia que correspondan a dicha comunidad.
	    	ev.preventDefault();
	    	var dat = $(ev.currentTarget).serializeObject();
	    	console.log('dat---->'+dat+'y-->dat.comboCommunities='+dat.comboCommunities);// En 'dat' tendremos 	Object { comboCommunities="Madrid"}
	    	
	    	
	    	sessionStorage.comboCommunities=dat.comboCommunities;

	    	if (sessionStorage.comboCommunities != null)
			  {

	    		window.App.router.navigate("link1", {trigger: true});
			  }
			else
			  {
			  	sessionStorage.comboCommunities=null;
			  }

	    	
	    	
			
		    return false;
	},

	
});
  // Our module now returns our view

 
  return CommunitiesListView;
});
