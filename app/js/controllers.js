'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function(data) {
    console.log(data)

  }])
  .controller('MyCtrl2', [function(data) {
    console.log(data)
  }]);
