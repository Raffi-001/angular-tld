var app = angular.module('myApp', ['ngTld']);

app.controller('myCtrl', ['$scope', 'ngTld', function($scope, ngTld) {
    $scope.domain = ngTld.getDomain('mail.google.co.uk');
}]);
