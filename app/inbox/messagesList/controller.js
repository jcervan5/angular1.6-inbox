(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('messagesListController', messagesListController)
  function messagesListController($http){
    const vm=this
    console.log('messagesList');
  }
}());
