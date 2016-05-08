(function() {
    'use strict';

    angular
        .module('candidate')
        .controller('CandidatesController', CandidatesController);

    /** @ngInject */
    function CandidatesController($scope, CandidatesService) {
        this.CandidatesService=CandidatesService;
    }
})();
