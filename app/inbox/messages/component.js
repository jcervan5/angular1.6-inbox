(function() {
  'use strict';
  angular.module('angular1.6-inbox')
  .component('ngmessages', {
    controller:'messagesController',
    templateUrl:'app/inbox/messages/messages-temp.html',
    bindings: {
      msg: '<'
    }
  })
}());
