'use strict';

describe('The main view', function () {
  var candidatesPage,candidatesList;

  beforeEach(function () {
    browser.get('/index.html');
    candidatesPage = require('./candidates.po');
    candidatesList=candidatesPage.candidatesList;
  });

  it('should list 2 candidates', function () {

    expect(candidatesList.count()).toEqual(2);
    var row = candidatesList.get(0);
    var rowElements = row.all(by.tagName('div'));
    expect(rowElements.get(0).getText()).toEqual('1');

  });

  it('should navigate to candidate page', function() {
    candidatesPage.clickRow(0);
    expect(browser.getCurrentUrl()).toContain('#/candidate/1');
  });

});
