(function () {
    'use strict';

    angular
        .module('candidate')
        .controller('CandidateController', CandidateController);

    /** @ngInject */
    function CandidateController($scope,CandidatesService, growl) {

        this.isOpened = false;

        this.toggle = function() {
            this.isOpened = !this.isOpened;
        };

        this.dateOptions = {
            startingDay: 1
        };

        this.CandidatesService = CandidatesService;
        this.save = function () {
            if ($scope.CandidateController.candidateForm.$valid) {
                growl.addSuccessMessage("readyToSave");
            }

        }
    }
})();
