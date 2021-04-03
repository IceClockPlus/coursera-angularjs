//IIFE (Funcion invocada inmediatamente)
(function(){
'user strict';

angular.module('myFirstApp', [])
.controller('myFirstController', function($scope){
    $scope.name = "Alexis"    
    $scope.sayHello = function() {
        return "Hello Coursera!"
    };
});

} )();