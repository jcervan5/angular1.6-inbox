(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('formController',function($http){
    var url = 'https://damp-cliffs-50496.herokuapp.com/api/messages'
    const vm=this
    vm.$onInit = function(){

    }
    vm.addMessage = funciton(messages, txtBody, txtSubject, hideform){
      hideform.flag= true
      var mainBody = {
        subject: txtSubject,
        body:txtBody
      }
      $http.post(url, JSON.stringify(mainBody))
      .then(function(response){
        messages.push(response.data)
      })
    }
    console.log('form');
  })
}());
