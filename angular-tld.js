angular.module('ng-tld', [])
    .factory('ng-tld', function() {
        var isValidTld = function($url) {
            return tld.isValidTld($url);
        }
        return {
            isValid: isValidTld
        };
    });
