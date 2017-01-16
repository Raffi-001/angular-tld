var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Sina';
    $scope.domain = tld.getDomain('mail.google.co.uk');
}]);
