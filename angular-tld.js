angular.module('ngTld', [])
    .factory('ngTld', function() {
        var getDomain = function($path) {
            return tld.getDomain($path);
        }

        var tldExists = function($path) {
            return tld.getTldExists($path);
        }

        var getSubdomain = function($path) {
            return tld.getSubdomain($path);
        }
        return {
            getDomain: getDomain,
            tldExists: tldExists,
            getSubdomain: getSubdomain
        };
    });
