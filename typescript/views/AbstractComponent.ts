import {AbstractController} from "../controllers/AbstractController";
import {CCComponent} from "../decorators/ComponentDecorators";
import {AbstractSimpleComponent} from "./AbstractSimpleComponent";
import {AbstractModel} from "../models/AbstractModel";
@CCComponent
export abstract class AbstractComponent <TController extends AbstractController<any, any>,
    TModel extends AbstractModel<any, any>> extends AbstractSimpleComponent
{
    public get model(): TModel {
        return this._model;
    }

    public set model(value: TModel) {
        this._model = value;
    }

    public get controller(): TController {
        return this._controller;
    }

    public set controller(value: TController) {
        this._controller = value;
    }

    private _controller: TController;
    private _model: TModel;
}