import { CCComponent } from "../decorators/ComponentDecorators";
var AbstractSimpleComponent = (function (_super) {
    __extends(AbstractSimpleComponent, _super);
    function AbstractSimpleComponent() {
        return _super.apply(this, arguments) || this;
    }
    return AbstractSimpleComponent;
}(cc.Component));
AbstractSimpleComponent = __decorate([
    CCComponent
], AbstractSimpleComponent);
export { AbstractSimpleComponent };
