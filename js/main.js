(function (){
  'use strict';

  angular
    .module('angular1.6-inbox', [])
    .component('inbox', {
      controller: function (){
        console.log("hi");
      },
      templateUrl: 'templates/inbox.html'
    });
})();
