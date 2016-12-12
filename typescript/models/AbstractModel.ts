import {AbstractController} from "../controllers/AbstractController";
import {AbstractComponent} from "../views/AbstractComponent";
export abstract class AbstractModel<TController extends AbstractController<any, any>, TView extends AbstractComponent<any, any>> {
    public get view(): TView {
        return this._view;
    }

    public set view(value: TView) {
        this._view = value;
    }

    public get controller(): TController {
        return this._controller;
    }

    public set controller(value: TController) {
        this._controller = value;
    }

    private _controller: TController;
    private _view: TView;
}