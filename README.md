# angular-tld
A tld.js port to angular presented as a directive

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
    //...
}]);
</script>

<form name="myform">
    <input name="myTld" check-tld ng-model="myTld" />
    <small style="color: red;" ng-if="myForm.myTld.$error.invalidTld">Not a valid TLD :(</small>
</form>
```
## Running the example
First run the following in terminal
```
cd example
bower install
```
Then open example/index.html in your browser
