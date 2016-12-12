import { CCComponent, CCProperty, CCEditor } from "../decorators/ComponentDecorators";
import { AbstractComponent } from "./AbstractComponent";
import { HelloController } from "../controllers/HelloController";
var HelloView = (function (_super) {
    __extends(HelloView, _super);
    function HelloView() {
        return _super.apply(this, arguments) || this;
    }
    HelloView.prototype.onLoad = function () {
        this.initLabels();
        this.controller = new HelloController();
        this.controller.init(this);
    };
    HelloView.prototype.initLabels = function () {
        this.ipLabel.string = "正在加载IP...";
        this.countryLabel.string = "";
        this.cityLabel.string = "";
        this.countyLabel.string = "";
    };
    HelloView.prototype.updateIP = function (res) {
        if (res.code == 0 && res.data !== null) {
            this.ipLabel.string = res.data.ip;
            this.countryLabel.string = "正在加载国家信息";
            this.cityLabel.string = "正在加载城市信息";
            this.countyLabel.string = "正在加载区域信息";
        }
        else {
            this.ipLabel.string = "获取IP失败";
        }
    };
    HelloView.prototype.updateIPInfo = function (res) {
        if (res.code == 0 && res.data !== null) {
            this.countryLabel.string = res.data.country;
            this.cityLabel.string = res.data.city;
            this.countyLabel.string = res.data.county;
        }
        else {
            this.countryLabel.string = "加载国家信息失败";
            this.cityLabel.string = "加载城市信息失败";
            this.countyLabel.string = "加载区域信息失败";
        }
    };
    return HelloView;
}(AbstractComponent));
__decorate([
    CCProperty(cc.Label)
], HelloView.prototype, "ipLabel", void 0);
__decorate([
    CCProperty(cc.Label)
], HelloView.prototype, "countryLabel", void 0);
__decorate([
    CCProperty(cc.Label)
], HelloView.prototype, "cityLabel", void 0);
__decorate([
    CCProperty(cc.Label)
], HelloView.prototype, "countyLabel", void 0);
HelloView = __decorate([
    CCEditor({
        executeInEditMode: true
    }),
    CCComponent
], HelloView);
export { HelloView };
