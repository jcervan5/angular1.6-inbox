(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('messagesController',function(){
    const vm = this;


    vm.toggleStar = function(message) {
      var status=message.starred
      message.starred = !message.starred;
        console.log(message)
  }
    vm.selectMessages = function(selected, messages){
      messages.selected = selected;
      console.log(messages);
  }

  })
}());
