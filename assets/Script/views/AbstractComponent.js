import { CCComponent } from "../decorators/ComponentDecorators";
import { AbstractSimpleComponent } from "./AbstractSimpleComponent";
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
}(AbstractSimpleComponent));
AbstractComponent = __decorate([
    CCComponent
], AbstractComponent);
export { AbstractComponent };
