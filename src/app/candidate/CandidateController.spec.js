(function () {
    'use strict';

    describe('CandidateController', function () {
        var vm, $rootScope, $scope, CandidatesService, growl;


        beforeEach(
            function () {
                module('candidate');
                CandidatesService = jasmine.createSpy('CandidatesService');
                growl = jasmine.createSpyObj('growl', ['addSuccessMessage']);

                inject(
                    function (_$controller_, _$rootScope_, _$templateCache_, _$compile_) {
                        $rootScope = _$rootScope_;
                        $scope = $rootScope.$new();

                        $scope.CandidateController = {candidateForm: {$valid: true}};
                        vm = _$controller_('CandidateController', {
                            $scope: $scope,
                            CandidatesService: CandidatesService,
                            growl: growl
                        });
                    }
                )
            }
        );

        it('should have a isOpened flag set to false by default', function () {
            expect(vm.isOpened).toBeFalsy();
        });

        it('should toggle the isOpened flag', function () {
            vm.toggle();
            expect(vm.isOpened).toBeTruthy();
        });

        it('should has dateOptions ', function () {
            expect(vm.dateOptions.startingDay).toEqual(1);
        });

        it('should has CandidatesService injected ', function () {
            expect(vm.CandidatesService).toEqual(CandidatesService);
        });

        it('should growl.addSuccessMessage is called with "readyToSave"', function () {
            vm.save();
            expect(growl.addSuccessMessage).toHaveBeenCalledWith("readyToSave");
        });

    });
})();
