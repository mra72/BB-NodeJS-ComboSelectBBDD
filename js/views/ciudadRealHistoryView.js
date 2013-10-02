define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/ciudadRealTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, CiudadRealTemplate){
  var ToledoHistoryView = Backbone.View.extend({
    el: 'body', 
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render CiudadRealTemplate');
		 console.log('CORRECTO en render CiudadRealHistoryView!!!!!');
	     var compiledTemplate = _.template(CiudadRealTemplate);
		 this.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():
	
		$('.btn_back').click(function(){
			window.App.router.navigate("link1", {trigger: true});
		})
	 },//Cierre 'render'

	});

  return ToledoHistoryView;
});
