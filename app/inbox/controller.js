(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('inboxController',function($http){

    const vm = this;

    vm.$onInit = function(){
    const baseUrl = "https://damp-cliffs-50496.herokuapp.com/api"
      $http.get(baseUrl + '/messages')
      .then(function(messages){
          vm.messages = messages.data._embedded.messages
          console.log(messages.data._embedded.messages);
      })
    }
    vm.showFrom={
      flag:true
    }
    console.log('inbox');
  });
}());
