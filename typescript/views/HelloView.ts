import {CCComponent, CCProperty, CCEditor} from "../decorators/ComponentDecorators";
import {AbstractComponent} from "./AbstractComponent";
import {HelloController} from "../controllers/HelloController";
import {HelloModel} from "../models/HelloModel";
@CCEditor({
    executeInEditMode: true
})
@CCComponent
export class HelloView extends AbstractComponent<HelloController, HelloModel> {
    @CCProperty(cc.Label)
    private ipLabel: cc.Label;
    @CCProperty(cc.Label)
    private countryLabel: cc.Label;
    @CCProperty(cc.Label)
    private cityLabel: cc.Label;
    @CCProperty(cc.Label)
    private countyLabel: cc.Label;

    public onLoad() {
        this.initLabels();
        this.controller = new HelloController();
        this.controller.init(this);
    }

    private initLabels() {
        this.ipLabel.string = "正在加载IP...";
        this.countryLabel.string = "";
        this.cityLabel.string = "";
        this.countyLabel.string = "";
    }

    public updateIP(res: IPFetchResult) {
        if (res.code == 0 && res.data !== null) {
            this.ipLabel.string = res.data.ip;
            this.countryLabel.string = "正在加载国家信息";
            this.cityLabel.string = "正在加载城市信息";
            this.countyLabel.string = "正在加载区域信息";
        } else {
            this.ipLabel.string = "获取IP失败";
        }
    }

    public updateIPInfo(res: IPInfoFetchResult) {
        if (res.code == 0 && res.data !== null) {
            this.countryLabel.string = res.data.country;
            this.cityLabel.string = res.data.city;
            this.countyLabel.string = res.data.county;
        } else {
            this.countryLabel.string = "加载国家信息失败";
            this.cityLabel.string = "加载城市信息失败";
            this.countyLabel.string = "加载区域信息失败";
        }
    }
}