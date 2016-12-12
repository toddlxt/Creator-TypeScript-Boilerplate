"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractComponent_1 = require("../views/AbstractComponent");
var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        return _super.apply(this, arguments) || this;
    }
    return MainController;
}(AbstractComponent_1.AbstractComponent));
exports.MainController = MainController;
