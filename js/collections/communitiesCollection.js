define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/communitiesModel'
], function(_, Backbone, CommunitiesModel){
	 
  var CommunitiesCollection = Backbone.Collection.extend({
	  
      model: CommunitiesModel,
      initialize : function(models, options) {

      },
   
      url: 'http://localhost:3000/autonomias',//Llamamos al servicio que nos devolvera la coleccion de CIUDADES para rellenar el combo.
      
  });
  // You don't usually return a collection instantiated
  return CommunitiesCollection;
});