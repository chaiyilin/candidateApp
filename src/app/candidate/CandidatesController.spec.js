(function () {
    'use strict';

    describe('CandidatesController', function () {
        var vm, $rootScope, $scope, CandidatesService, growl;


        beforeEach(
            function () {
                module('candidate');
                CandidatesService = jasmine.createSpy('CandidatesService');

                inject(
                    function (_$controller_, _$rootScope_, _$templateCache_, _$compile_) {
                        $rootScope = _$rootScope_;
                        $scope = $rootScope.$new();

                        $scope.CandidateController = {candidateForm: {$valid: true}};
                        vm = _$controller_('CandidatesController', {
                            $scope: $scope,
                            CandidatesService: CandidatesService
                        });
                    }
                )
            }
        );

        it('should has CandidatesService injected ', function () {
            expect(vm.CandidatesService).toEqual(CandidatesService);
        });

    });
})();
