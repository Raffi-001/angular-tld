angular.module('ngTld', [])
    .factory('ngTld', function() {
        var getDomain = function($path) {
            return tld.getDomain($path);
        }
        return {
            getDomain: getDomain
        };
    });
