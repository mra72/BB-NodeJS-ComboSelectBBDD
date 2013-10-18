define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/albaceteTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, AlbaceteTemplate){
  var AlbaceteHistoryView = Backbone.View.extend({
    el: 'body', 
    
    initialize: function()
	  {
		  
	  },
  
	render: function(eventName,options) {
		 console.log('render AlbaceteTemplate');
		 console.log('CORRECTO en render albaceteHistoryView!!!!!');
	     var compiledTemplate = _.template(AlbaceteTemplate);
		 this.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():
	
		$('.btn_back').click(function(){
			window.App.router.navigate("link1", {trigger: true});
		})
	 },//Cierre 'render'

	});

  return AlbaceteHistoryView;
});
