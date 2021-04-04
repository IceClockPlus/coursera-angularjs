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

angular.module('calculadorNombre',[])
.controller('calculadorNombreController',function($scope){
    $scope.nombre = "";
    $scope.valorTotal = 0;
    $scope.mostrarNumerico = function(){
        var valorTotalNombre = calcularNumericoParaString($scope.nombre);
        $scope.valorTotal = valorTotalNombre;
    };

    function calcularNumericoParaString(string){
        var valorTotalString = 0;
        for(var i = 0; i < string.length; i++){
            valorTotalString += string.charCodeAt(i);
        }
        return valorTotalString;
    }

});



} )();