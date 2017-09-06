(function() {
  'use strict';
  angular
  .module('angular1.6-inbox')
  .controller('toolbarController', toolbarController)
   function toolbarController(){
     const vm = this;
     vm.$onInit = function(){
       vm.allSelected=function (messages) {
         return status=messages.every(function(data){
           return data.selected == true
         })
       }
       vm.someSelected=function (messages){
         const someMsgs=messages.some(function(data){
           return data.selected == true
         })
         const allMsgs=messages.every(function(data){
           return data.selected == true
         })
         return someMsgs && !allMsgs
       }
       vm.allNotSelected= function(messages){
         return status = messages.every(function(data){
           return data.selected !==true
         })
       }
     }
       vm.markAsRead=function(messages){
         for (var i = 0; i < messages.length; i++) {
           if(messages[i].selected){
             messages[i].read = true
             console.log(messages[i]);
           }
         }
       }
       vm.markAsUnRead=function(messages){
         for (var i = 0; i < messages.length; i++) {
           if (messages[i].selected) {
             messages[i].read = false
           }
         }
       }
       vm.addLabel=function(messages, label){
         for (var i = 0; i < messages.length; i++) {
           var labelExist = messages[i].labels.includes(label)
           if (messages[i].selected && !labelExist) {
             messages[i].labels.push(label)
           }
         }
       }
       vm.removeLabel=function(messages,label){
         for (var i = 0; i < messages.length; i++) {
           if(messages[i].selected){
           var index=messages[i].labels.indexOf(label)
           if(index > -1){
             messages[i].labels.splice(index, 1);
           }
         }
       };
     }
     vm.changeSelect=function(data){

       if(vm.allSelected(data)){
         for (var i = 0; i < data.length; i++) {
           data[i].selected = false
         }
       }
       else if (vm.someSelected(data)) {

          for (var i = 0; i < data.length; i++) {
            data[i].selected = true
          }
       }
       else if (vm.allNotSelected(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i].selected = true
          }
       }
     }
     vm.countUnreadMessages = function(messages){
       var count = 0
       for (var i = 0; i < messages.length; i++) {
        if (messages[i].read == false) {
          count++
        }
       }
       return count
     }
     vm.deleteMessage = function(messages) {
       for (var i = 0; i < messages.length; i++) {
         if(messages[i].selected) {
           messages.splice(i, 1);
           i--
         }
       }
     }
 }
}());
