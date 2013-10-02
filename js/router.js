define([
  'jquery',
  'underscore',
  'backbone',
   'views/communitiesListView',
   'views/linkUnoView',
   'views/toledoHistoryView',
   'views/albaceteHistoryView',
   'views/cuencaHistoryView',
   'views/ciudadRealHistoryView',
   'views/guadalajaraHistoryView'
//  'views/editUserView'
], function($, _, Backbone,CommunitiesListView,LinkUnoView,ToledoHistoryView,AlbaceteHistoryView,CuencaHistoryView,
  CiudadRealHistoryView, GuadalajaraHistoryView){
  var AppRouter = Backbone.Router.extend({

    //globalVar:'globalVar',

    routes: {
      // Default
      '': 'home',
      'link1':'link1_f',
      'toledoHistory' : 'toledoHistory_link',
      'albaceteHistory' : 'albaceteHistory_link',
      'cuencaHistory' : 'cuencaHistory_link',
      'ciudadRealHistory' : 'ciudadRealHistory_link',
      'guadalajaraHistory' : 'guadalajaraHistory_link'
    },


    
    home:function()
    {
    	//console.log('We have loaded the home page');
    	var communitiesListView = new CommunitiesListView();
      communitiesListView.render();
    },

    link1_f:function()
    {
      //console.log('We have loaded the home page LINK1');
      var linkUnoView = new LinkUnoView();
      linkUnoView.render();
    },

    toledoHistory_link:function()
    {
      //console.log('link para ir a historia de Toledo');
      var toledoHistoryView = new ToledoHistoryView();
      toledoHistoryView.render();
    },

    albaceteHistory_link:function()
    {
      //console.log('link para ir a historia de Albacete');
      var albaceteHistoryView = new AlbaceteHistoryView();
      albaceteHistoryView.render();
    },

     cuencaHistory_link:function()
    {
      //console.log('link para ir a historia de cuenca');
      var cuencaHistoryView = new CuencaHistoryView();
      cuencaHistoryView.render();
    },

     ciudadRealHistory_link:function()
    {
      //console.log('link para ir a historia de ciudadReal');
      var ciudadRealHistoryView = new CiudadRealHistoryView();
      ciudadRealHistoryView.render();
    },

     guadalajaraHistory_link:function()
    {
      //console.log('link para ir a historia de guadalajara');
      var guadalajaraHistoryView = new GuadalajaraHistoryView();
      guadalajaraHistoryView.render();
    }

  });

  var initialize = function(){
    var app_router = new AppRouter;
    window.App.router=app_router;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});