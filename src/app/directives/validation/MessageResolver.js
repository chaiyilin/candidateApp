(function() {
    'use strict';

    angular
        .module('candidateApp')
        .factory('MessageResolver', ['$q', '$translate', 'defaultErrorMessageResolver', function ($q, $translate, defaultErrorMessageResolver) {

            var resolve = function (errorType, el) {
                var defer = $q.defer();

                if (el[0].attributes['validation-parameter']) {
                    defer.resolve($translate.instant(errorType, {what: el[0].attributes['validation-parameter'].value}));
                } else {
                    if ($(el[0]).hasClass('ng-invalid-' + errorType)) {

                        var attrsArray = Array.prototype.slice.call(el[0].attributes);
                        var attrs = attrsArray.filter(function (attr) {
                            return attr.name.indexOf(errorType) >= 0
                        });

                        defer.resolve($translate.instant(errorType, {what: attrs[0]?attrs[0].value:errorType}));

/*                        if (attrs.length >= 1) {
                            defer.resolve($translate.instant(errorType, {what: attrs[0].value?attrs[0].value:errorType}));
                        } else {
                            defer.resolve('can not find which validation rule cause error: ' + errorType);
                        }*/

                    } else {
                        defer.resolve($translate.instant(errorType))
                    }
                }

                return defer.promise;
            };

            return {
                resolve: resolve
            };
        }
        ]);
})();
