import {AbstractComponent} from "../views/AbstractComponent";
import {AbstractModel} from "../models/AbstractModel";
export abstract class AbstractController<TView extends AbstractComponent<any, any>, TModel extends AbstractModel<any, any>> {
    public get view(): TView {
        return this._view;
    }

    public set view(value: TView) {
        this._view = value;
    }

    public get model(): TModel {
        return this._model;
    }

    public set model(value: TModel) {
        this._model = value;
    }

    private _model: TModel;
    private _view: TView;
}