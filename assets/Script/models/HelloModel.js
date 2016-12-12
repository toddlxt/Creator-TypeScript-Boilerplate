import { AbstractModel } from "./AbstractModel";
var HelloModel = (function (_super) {
    __extends(HelloModel, _super);
    function HelloModel() {
        var _this = _super.apply(this, arguments) || this;
        _this.serverAddress = "http://52.58.118.63";
        return _this;
    }
    //noinspection JSMethodCanBeStatic
    HelloModel.prototype.getIP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.serverAddress + "/getIP.php")];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        cc.log(e_1);
                        return [2 /*return*/, { code: 1, data: null }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //noinspection JSMethodCanBeStatic
    HelloModel.prototype.getIPInfo = function (ip) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.serverAddress + "/getIPInfo.php?ip=" + ip)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        cc.log(e_2);
                        return [2 /*return*/, { code: 2, data: null }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HelloModel;
}(AbstractModel));
export { HelloModel };
