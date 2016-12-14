import { define as define13, declareProperties as declareProperties13 } from "./CCClass/CCClass1.3";
import { define as define14, declareProperties as declareProperties14 } from "./CCClass/CCClass1.4";
var define, declareProperties;
// CCClass of v1.4.x is different.
if (/^1.4/.test(cc.ENGINE_VERSION)) {
    define = define14;
    declareProperties = declareProperties14;
}
else {
    define = define13;
    declareProperties = declareProperties13;
}
var currentProperties = {};
var currentMixins = {};
var currentEditor = {};
var defined = {};
var definedClass = {};
// Get the UUID of currently compiling script
function getUUID() {
    return cc._RFpeek().uuid;
}
// Get the name of currently compiling script
function getScriptName() {
    return cc._RFpeek().script;
}
/*
 Decorator of components that inherit cc.Component. Usage:
 --------------------------
 @CCComponent
 export class ComponentName extends cc.Component {}
 --------------------------
 */
export function CCComponent(constructor) {
    if (constructor.length > 0) {
        cc.warn("Please do not define parameters for a component constructor in " + getScriptName() + "!");
    }
    var uuid = getUUID();
    if (defined[uuid])
        return definedClass[uuid];
    constructor.$super = cc.Component;
    var cls = define(void 0, constructor, currentMixins[uuid], void 0, {});
    var name = cc.js.getClassName(cls);
    declareProperties(cls, name, currentProperties[uuid], constructor, void 0);
    if (currentEditor.hasOwnProperty(uuid)) {
        cc.Component._registerEditorProps(constructor, currentEditor[uuid]);
    }
    currentProperties = {};
    currentMixins = {};
    currentEditor = {};
    defined[uuid] = true;
    definedClass[uuid] = cls;
    return cls;
}
/*
 Decorator of a property in cc.Component.
 @CCProperty must be used with @CCComponent. Usage:
 --------------------------
 @CCComponent
 export class ComponentName extends cc.Component {
     @CCProperty({
         default: null,
         type: cc.Node
     })
     public someNode: cc.Node;
     @CCProperty(cc.Button)
     public someButton: cc.Button;
 }
 --------------------------
 */
export function CCProperty(option) {
    return function (constructor, propertyName) {
        var uuid = getUUID();
        if (!currentProperties.hasOwnProperty(uuid))
            currentProperties[uuid] = {};
        currentProperties[uuid][propertyName] = option;
    };
}
/*
 Decorator of editor properties.
 @CCEditor must be used with @CCComponent. Usage:
 --------------------------
 @CCEditor({
    executeInEditMode: true
 })
 @CCComponent
 export class ComponentName extends cc.Component {}
 --------------------------
 */
export function CCEditor(editor) {
    return function (constructor) {
        if (CC_EDITOR) {
            var uuid = getUUID();
            if (!defined.hasOwnProperty(uuid) || !defined[uuid]) {
                currentEditor[uuid] = editor;
            }
            else {
                cc.Component._registerEditorProps(constructor, editor);
            }
        }
        return constructor;
    };
}
/*
 Decorator of mixins.
 @CCMixins must be used before @CCComponent. Usage:
 --------------------------
 @CCComponent
 @CCMixins(mixin1, mixin2, mixin3, ...)
 export class ComponentName extends cc.Component {}
 --------------------------
 */
export function CCMixins() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (cls) {
        var uuid = getUUID();
        if (CC_EDITOR && defined.hasOwnProperty(uuid) && defined[uuid]) {
            cc.error("@CCMixins should be used before @CCComponent in " + getScriptName() + "!");
        }
        currentMixins[uuid] = args;
        return cls;
    };
}
