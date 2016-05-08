"use strict";

(function() {
    'use strict';

    angular
        .module('filters',[])
        .filter('yesno', function () {
            return function (input) {
                return input ? 'Yes' : 'No';
            }
        })

})();
