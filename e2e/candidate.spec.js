'use strict';

describe('The main view', function () {
    var candidatesPage, candidatesList, candidatePage;

    beforeEach(function () {
        browser.get('/index.html');
        candidatesPage = require('./candidates.po');
        candidatesList = candidatesPage.candidatesList;
        candidatesPage.clickRow(0);
        candidatePage = require('./candidate.po');
    });

    it('should have correct value', function () {
        expect(candidatePage.jobField.getText()).toEqual('1');
        expect(candidatePage.nameField.getAttribute('value')).toEqual('Eric Chai');
        expect(candidatePage.currentlyEmployedField.getAttribute('value')).toEqual('true');
        expect(candidatePage.availableAfterField.getAttribute('value')).toEqual('27/07/2015');
        expect(candidatePage.emailField.getAttribute('value')).toEqual('chaiyilin@hotmail.com');
        expect(candidatePage.streetAddressField.getAttribute('value')).toEqual('unknown');
        expect(candidatePage.stateField.getAttribute('value')).toEqual('VIC');
        expect(candidatePage.desiredSalaryField.getAttribute('value')).toEqual('1');
        expect(candidatePage.currentSalary.getAttribute('value')).toEqual('1');
    });

    /*  it('should toggle current salary by currently employed', function () {

     });

     it('should have proper validation', function() {

     });

     it('should save', function() {

     });

     it('should cancel', function() {

     });*/
});
