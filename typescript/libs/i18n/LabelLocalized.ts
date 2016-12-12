import {CCComponent, CCProperty} from "../../decorators/ComponentDecorators";
import {i18n} from "./i18n";
@CCComponent
export class LabelLocalized extends cc.Label {
    @CCProperty({
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
    public textKey: string;
    @CCProperty({
        override: true,
        tooltip: "Here shows the localized string of Text Key",
        get: function () {
            return i18n.t(this.textKey);
        },
        set: function (value) {
            cc.warn("Please set label text key in Text Key property.");
        }
    })
    public string: string;
}