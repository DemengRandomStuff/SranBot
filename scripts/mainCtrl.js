'use strict';

var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.showTypes = [];
    connection.query("SELECT DISTINCT show_type FROM anime", function(err, row) {
        $scope.showTypes = angular.copy(row);
    });

    $scope.statuses = [];
    connection.query("SELECT DISTINCT status FROM anime", function(err, row) {
       $scope.statuses = angular.copy(row);
    });

    $scope.genres = [];
    connection.query("SELECT DISTINCT name FROM genres", function(err, row) {
       $scope.genres = angular.copy(row);
    });
}]);