'use strict';

var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function($scope, statuses) {
    $scope.showTypes = [];
    connection.query("SELECT DISTINCT show_type FROM anime", function(err, row) {
        $scope.showTypes = angular.copy(row);
        for(var i = 0; i < $scope.showTypes.length - 1; i++) {
            angular.element('.show-type-input').append('<span><input id="'+'type'+i+'" type="checkbox"/><label class="control-label">'+ $scope.showTypes[i].show_type +'</label> </span>');
        }
    });
    //console.log($location.path());
    $scope.statuses = statuses;
    connection.query("SELECT DISTINCT status FROM anime", function(err, row) {
       $scope.statuses = angular.copy(row);
        for(var i = 0; i < $scope.statuses.length; i++) {
            angular.element('#stSel').append('<option id="'+'st'+i+'" value="'+$scope.statuses[i].status+'">'+$scope.statuses[i].status+'</option>')
        }
    });

    $scope.genres = [];
    connection.query("SELECT DISTINCT name FROM genres", function(err, row) {
       $scope.genres = angular.copy(row);
        for(var i = 0; i < $scope.genres.length; i++) {
            angular.element('.i-genres').append('<div><input type="checkbox" id="'+'ig'+i+'"/><label>'+$scope.genres[i].name+'</label></div>')
        }
        for(var i = 0; i < $scope.genres.length; i++) {
            angular.element('.e-genres').append('<div><input type="checkbox" id="'+'eg'+i+'"/><label>'+$scope.genres[i].name+'</label></div>')
        }
    });


    $scope.roll = function () {
        //TODO shity db query so much brainfuck incoming Keepo
    }
}]);
