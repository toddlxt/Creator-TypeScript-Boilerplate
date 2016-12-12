import {AbstractModel} from "./AbstractModel";
import {HelloController} from "../controllers/HelloController";
import {HelloView} from "../views/HelloView";
export class HelloModel extends AbstractModel<HelloController, HelloView> {
    private serverAddress = "http://52.58.118.63";
    //noinspection JSMethodCanBeStatic
    public async getIP(): Promise<IPFetchResult> {
        try {
            let res = await fetch(`${this.serverAddress}/getIP.php`);
            return await res.json() as any as IPFetchResult;
        } catch (e) {
            cc.log(e);
            return {code: 1, data: null};
        }
    }

    //noinspection JSMethodCanBeStatic
    public async getIPInfo(ip): Promise<IPInfoFetchResult> {
        try {
            let res = await fetch(`${this.serverAddress}/getIPInfo.php?ip=${ip}`);
            return await res.json() as any as IPInfoFetchResult;
        } catch (e) {
            cc.log(e);
            return {code: 2, data: null};
        }
    }
}