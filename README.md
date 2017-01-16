# angular-tld
A tld.js port to angular presented as a factory

## Installation
```
bower install angular-tld
```

## Usage
```
<script src="bower_components/tld-browserified/tld.js"></script>
<script src="bower_components/angular-tld/angular-tld.js"></script>
<script>
var app = angular.module('myApp', ['ngTld']);

app.controller('myCtrl', ['$scope', 'ngTld', function($scope, ngTld) {
    $scope.domain = ngTld.getDomain('mail.google.co.uk');
}]);
</script>
```
## Running the example
First run the following
```
cd example
bower install
```
Then open example/index.html in your browser
