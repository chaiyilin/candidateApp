(function() {
    'use strict';

    angular
        .module('candidate')
        .service('CandidatesService', CandidatesService);

    /** @ngInject */
    function CandidatesService($http) {
        var candidates;
        var currentCandidate;

        var self=this;
        this.search = function () {
            return $http.get('/app/candidate/candidates.json')
                .then(function (response) {
                    self.candidates = response.data;

                });
        }
    }
})();
