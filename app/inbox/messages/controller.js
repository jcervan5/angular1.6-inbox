(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('messagesController', function messagesController($http) {
    const vm = this;


    vm.toggleStar = function(message) {
      // var status=message.starred
      // message.starred = !message.starred;
      //   console.log(message)
      var body = {
       messageIds: [message.id],
       command: 'star',
       star: !message.starred
     };

  $http.patch('https://damp-cliffs-50496.herokuapp.com/api/messages', JSON.stringify(body))
    .then(function(response){
      console.log(message);
      message.starred = !message.starred;
  });
};
    vm.selectMessages = function(selected, messages){
      messages.selected = selected;
      console.log(messages);
    };
  });
}());
