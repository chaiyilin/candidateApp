(function () {
    'use strict';

    angular
        .module('candidateApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/candidates");

        $stateProvider
            .state('candidates', {
                url: '/candidates',
                controller: 'CandidatesController as CandidatesController',
                templateUrl: "app/candidate/candidates.html",
                resolve: {
                    search: function (CandidatesService) {
                        return CandidatesService.search();
                    }
                }
            })
            .state('candidate', {
                url: '/candidate/:jobId',
                controller: 'CandidateController as CandidateController',
                templateUrl: "app/candidate/candidate.html",
                resolve: {
                    currentCandidate: function (CandidatesService, $stateParams, $state, $q) {
                        var deferred = $q.defer();
                        if (CandidatesService.candidates) {
                            CandidatesService.currentCandidate = CandidatesService.candidates.
                                filter(function (candidate) {
                                    return candidate.jobId == $stateParams.jobId
                                })[0];
                            deferred.resolve();
                        } else {
                            deferred.reject({redirectTo: 'candidates'});
                        }
                        return deferred.promise;
                    }
                }
            })
    }

})();
