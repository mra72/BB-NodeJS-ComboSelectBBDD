define([
  'jquery',
  'underscore',
  'backbone',
  'collections/usersCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/citiesListTemplate.html',
], function($, _, Backbone, UsersCollection,CitiesListTemplate,Form){
  var CitiesListView = Backbone.View.extend({
    el: '.page', 
    render: function(){
    
      var that = this;	
      var usersCollection = new UsersCollection();	
      
      /*
       FETCH:
		Este método se encarga de traer el conjunto de MODELOS del SERVIDOR y cargarlos en la COLECCIÓN, reseteándola. El server debe de 
		encargarse de devolver la colección de los modelos en formato JSON, si estás trabajando sobre una API del servidor antigüa y no 
		puedes generar dicha respuesta, te interesará sobreescribir el método 'parse'.
       */
      usersCollection.fetch({
    	 success: function(){
    		 var compiledTemplate = _.template(CitiesListTemplate,{usersCollection:usersCollection.models});
    		 //that.$el.html('¡CONTENT SHOULD SHOW HERE!'); 
    		 that.$el.html(compiledTemplate); 
    	 } 
      });
    }
  });
  // Our module now returns our view
  return CitiesListView;
});