(function() {
    'use strict';

    angular
        .module('candidateApp')
        .factory('validationModifier', ['$log',
            function ($log) {

                var containerTag = 'DIV',
                    containerClass='form-group',
                    parentClass = 'has-error',
                    spanClass = 'help-block',

                    findContainer = function (el) {
                        var container,
                            parent = el;
                        for (var i = 0; i <= 10; i += 1) {
                            if (parent !== undefined && parent.prop("tagName") == containerTag && parent.hasClass(containerClass)) {
                                container = parent;
                                break;
                            } else if (parent !== undefined) {
                                parent = parent.parent();
                            }
                        }

                        return container;
                    },

                    findWithClassElementDesc = function (el, klass) {
                        if (!el.children)
                            return;

                        var children = el.children(),
                            child;
                        for (var i = 0; i < children.length; i += 1) {
                            child = angular.element(children[i]);
                            if (child !== undefined && child.hasClass(klass)) {
                                break;
                            } else {
                                child = findWithClassElementDesc(child, klass);
                                if (child !== undefined) {
                                    break;
                                }
                            }
                        }

                        return child;
                    },

                    /**
                     * @ngdoc function
                     * @name myCustomElementModifier#makeValid
                     * @methodOf myCustomElementModifier
                     *
                     * @description
                     * Makes an element appear valid by apply custom styles and child elements.
                     *
                     * @param {Element} el - The input control element that is the target of the validation.
                     */
                    makeValid = function (el) {
                        makeDefault(el);
                    },

                    /**
                     * @ngdoc function
                     * @name myCustomElementModifier#makeInvalid
                     * @methodOf myCustomElementModifier
                     *
                     * @description
                     * Makes an element appear invalid by apply custom styles and child elements.
                     *
                     * @param {Element} el - The input control element that is the target of the validation.
                     * @param {String} errorMsg - The validation error message to display to the user.
                     */
                    makeInvalid = function (el, errorMsg) {
                        var container = findContainer(el);
                        container.addClass(parentClass);

                        var span = findWithClassElementDesc(container,spanClass);
                        if (span) {
                            span.html(errorMsg);
                        } else {
                            span = angular.element('<span class="help-block">' + errorMsg + '</span>')
                            container.append(span);
                        }
                    },


                    /**
                     * @ngdoc function
                     * @name myCustomElementModifier#makeDefault
                     * @methodOf myCustomElementModifier
                     *
                     * @description
                     * Makes an element appear in its default visual state.
                     *
                     * @param {Element} el - The input control element that is the target of the validation.
                     */
                    makeDefault = function (el) {
                        var container = findContainer(el);
                        if (container) {
                            container.removeClass(parentClass);

                            var span = findWithClassElementDesc(container,spanClass);
                            if (span) {
                                span.remove();
                            }
                        }
                    };

                return {
                    makeValid: makeValid,
                    makeInvalid: makeInvalid,
                    makeDefault: makeDefault,
                    key: 'svxCustomValidator'
                };
            }
        ]);
})();
