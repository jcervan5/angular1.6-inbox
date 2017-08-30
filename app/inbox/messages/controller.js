(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('messagesController',function(){
    const vm = this;
    vm.$onInit = function(){
    const data = angular.fromJson(jsonData)
      vm.messages = data;
    }

    vm.toggleStar = function(message) {
      message.starred = !message.starred;
        console.log(message)
    }

  })
}());
