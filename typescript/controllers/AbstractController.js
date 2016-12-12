"use strict";
var AbstractController = (function () {
    function AbstractController() {
    }
    Object.defineProperty(AbstractController.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (value) {
            this._view = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractController.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractController;
}());
exports.AbstractController = AbstractController;
