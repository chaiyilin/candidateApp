(function () {
    'use strict';

    describe('CandidatesService', function () {
        var CandidatesService, $httpBackend,candidatesJson;


        beforeEach(
            function () {
                module('candidate');
                //jasmine.getJSONFixtures().fixturesPath = 'base/app/candidate';
                //candidatesJson=getJSONFixture('candidates.json');
                inject(
                    function (_$httpBackend_,_CandidatesService_) {
                        $httpBackend = _$httpBackend_;
                        CandidatesService=_CandidatesService_
                    }
                )
            }
        );

        it('should get candidate list', function () {
            $httpBackend.whenGET("/app/candidate/candidates.json").respond([
                {
                    "jobId":1,
                    "name": "Eric Chai",
                    "currentlyEmployed":true,
                    "availableDate": "2015-07-27T00:49:27Z",
                    "email":"chaiyilin@hotmail.com",
                    "address":"unknown",
                    "state": "VIC",
                    "desiredSalary":1,
                    "currentSalary":1
                },
                {
                    "jobId":2,
                    "name": "Eric Chai",
                    "currentlyEmployed":true,
                    "availableDate": "2015-07-27T00:49:27Z",
                    "email":"chaiyilin@hotmail.com",
                    "address":"unknown",
                    "state": "VIC",
                    "desiredSalary":"",
                    "currentSalary":""
                }
            ]);
            CandidatesService.search();
            $httpBackend.flush();

            expect(CandidatesService.candidates.length).toEqual(2);
        });


    });
})();
