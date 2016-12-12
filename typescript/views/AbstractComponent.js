"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ComponentDecorators_1 = require("../decorators/ComponentDecorators");
var AbstractSimpleComponent_1 = require("./AbstractSimpleComponent");
var AbstractComponent = (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComponent.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        set: function (value) {
            this._controller = value;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractComponent;
}(AbstractSimpleComponent_1.AbstractSimpleComponent));
AbstractComponent = __decorate([
    ComponentDecorators_1.CCComponent
], AbstractComponent);
exports.AbstractComponent = AbstractComponent;
