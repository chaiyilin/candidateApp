/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var CandidatesPage = function() {
  this.candidatesList = element(by.css('body')).all(by.repeater('candidate in CandidatesController.CandidatesService.candidates'));
};

CandidatesPage.prototype.clickRow = function (index) {
  this.candidatesList.get(index).click();
};

module.exports = new CandidatesPage();
