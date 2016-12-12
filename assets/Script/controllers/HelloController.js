import { AbstractController } from "./AbstractController";
import { HelloModel } from "../models/HelloModel";
var HelloController = (function (_super) {
    __extends(HelloController, _super);
    function HelloController() {
        return _super.apply(this, arguments) || this;
    }
    HelloController.prototype.init = function (view) {
        this.view = view;
        this.model = new HelloModel();
        this.hello();
    };
    HelloController.prototype.hello = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ipResult, ipInfoResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.getIP()];
                    case 1:
                        ipResult = _a.sent();
                        this.view.updateIP(ipResult);
                        if (!(ipResult.code == 0 && ipResult.data !== null))
                            return [3 /*break*/, 3];
                        return [4 /*yield*/, this.model.getIPInfo(ipResult.data.ip)];
                    case 2:
                        ipInfoResult = _a.sent();
                        this.view.updateIPInfo(ipInfoResult);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HelloController;
}(AbstractController));
export { HelloController };
