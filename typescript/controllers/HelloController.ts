import {AbstractController} from "./AbstractController";
import {HelloModel} from "../models/HelloModel";
import {HelloView} from "../views/HelloView";
export class HelloController extends AbstractController<HelloView, HelloModel> {
    public init(view: HelloView) {
        this.view = view;
        this.model = new HelloModel();
        this.hello();
    }

    private async hello() {
        let ipResult = await this.model.getIP();
        this.view.updateIP(ipResult);
        if (ipResult.code == 0 && ipResult.data !== null) {
            let ipInfoResult = await this.model.getIPInfo(ipResult.data.ip);
            this.view.updateIPInfo(ipInfoResult);
        }
    }
}