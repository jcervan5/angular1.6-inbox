(function() {
  'use strict';
  angular.module('angular1.6-inbox')
  .component('ngform', {
    controller:'formController',
    templateUrl:'app/inbox/Form/form-temp.html',
    bindings: {
      msgbinding: '<',
      hidefrm: '<'
    }
  })
}());
