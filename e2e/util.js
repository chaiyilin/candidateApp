var Util = function () {
    this.getValidationMessage = function (element) {
        return element.element(by.xpath('following-sibling::span'));
    }
};

module.exports = new Util();