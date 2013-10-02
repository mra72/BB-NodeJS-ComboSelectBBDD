define([
  'jquery',
  'underscore',
  'backbone',
  'collections/communitiesCollection',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/linkUnoTemplate.html',
  'i18n!internalization/nls/i18n',
], function($, _, Backbone, CommunitiesCollection, LinkUnoTemplate){
  var LinkUnoView = Backbone.View.extend({
    el: 'body',
    initialize: function()
	  {

	  	
	  },

  
	render: function(eventName,options) {
		 //console.log('render LinkUnoTemplate');
		 //console.log('CORRECTO en render LINKUNO!!!!!'+eventName+'-----'+options);
		
		var communitiesCollection = new CommunitiesCollection();
		var data = {};
		var that = this;
		
	   communitiesCollection.fetch({
    	 success: function(collections, response){
    	 	       
		    	 	console.log('CORRECTO ya tengo los SERVICIOS en communitiesCollection!!!!!');
					data = response;//obj JSON
       				console.log('data-->'+data);//Contiene el objeto JSON de datos que necesitaremos.

					var compiledTemplate = _.template(LinkUnoTemplate, data);
					that.$el.empty().html(compiledTemplate); //Machaca el html anterior, pero si queremos limpiarlo. Haremos previamente esto EMPTY():


					$("a.external").click(function() {
					      url = $(this).attr("href");
					      window.open(url, '_blank');
					      return false;
				   	});
					

					$('.btn_home').click(function(){
						window.App.router.navigate(" ", {trigger: true});
					});
					
					/*En este trozo de codigo le damos funcionalidad a todos os botones History de cada una de las
					provinvias por comunidad autonoma, vinculandonos a su pagina correspondiente.*/
					$('button.history').click(function() {
						var name_provincia = $(this).attr('name');
						if (name_provincia == 'Ciudad Real') {
							name_provincia = 'ciudadReal';
							window.App.router.navigate(name_provincia+'History', {trigger: true});
						}
						//toLowerCase() este metodo convierte mayusculas en minusculas.
						else window.App.router.navigate(name_provincia.toLowerCase()+'History', {trigger: true});
					});

	    	 } 

	    });

	 },//Cierre 'render'
	});

  return LinkUnoView;
});
