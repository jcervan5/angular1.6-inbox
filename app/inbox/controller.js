(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('inboxController',function(){

    const vm = this;

    vm.$onInit = function(){
      const data = angular.fromJson(jsonData)
      vm.messages = data;
    }

    console.log('inbox');
  });
}());
