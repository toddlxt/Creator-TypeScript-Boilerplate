import { CCComponent, CCProperty } from "../../decorators/ComponentDecorators";
import { i18n } from "./i18n";
var LabelLocalized = (function (_super) {
    __extends(LabelLocalized, _super);
    function LabelLocalized() {
        return _super.apply(this, arguments) || this;
    }
    return LabelLocalized;
}(cc.Label));
__decorate([
    CCProperty({
        default: "TEXT_KEY",
        multiline: true,
        tooltip: "Enter i18n key here",
        notify: function () {
            if (this._sgNode) {
                this._sgNode.setString(this.string);
                this._updateNodeSize();
            }
        }
    })
], LabelLocalized.prototype, "textKey", void 0);
__decorate([
    CCProperty({
        override: true,
        tooltip: "Here shows the localized string of Text Key",
        get: function () {
            return i18n.t(this.textKey);
        },
        set: function (value) {
            cc.warn("Please set label text key in Text Key property.");
        }
    })
], LabelLocalized.prototype, "string", void 0);
LabelLocalized = __decorate([
    CCComponent
], LabelLocalized);
export { LabelLocalized };
