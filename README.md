# Creator-TypeScript-Boilerplate
在Cocos Creator中使用TypeScript的示例项目。
## 环境搭建  
此项目已经在Creator 1.3.2, 1.3.3-beta1, 1.4.0-beta1, 1.4.0-beta2中测试运行正常（Chrome与Windows模拟器下），直接打开即可运行。但是如果你需要更改TypeScript代码，还需要以下步骤搭建运行环境。如果你需要在自己的项目中使用TypeScript，请务必备份好自己的项目，并阅读文末的“注意事项”。  
1. 克隆或下载解压此项目至本地目录（假设为project）。  
2. 安装nodejs, npm（国内用户推荐使用cnpm，https://npm.taobao.org/）。  
3. 命令行中运行该命令全局安装TypeScript： `cnpm install typescript -g`。  
4. 在IDE（如WebStorm）中开启TypeScript自动编译功能（WebStorm开启方法：File->Settings->Languages & Frameworks->TypeScript，右边 勾选Use TypeScript Service与Enable TypeScript Compiler），或使用命令行进入project目录并运行`tsc -w`使TypeScript自动监视文件修改并自动编译。  
5. 在project/typescript目录下编辑你的代码，它们将被自动编译至project/assets/Script/目录下（在project/tsconfig.json中修改outDir字段以更改目标目录）。  

## 功能介绍  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了简单展示TypeScript的功能，此项目使用TypeScript的类与泛型功能实现了一个简单的MVC架构（请看AbstractController, AbstractModel与AbstractComponent三个类），并在此之上实现了Hello模块（请看HelloController, HelloModel与HelloView），实现了使用async, await异步使用fetch请求本机IP并查询IP对应的国家、城市、区域的功能。不需要Controller和Model的View直接继承AbstractSimpleComponent即可。  

## 使用说明  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了充分利用TypeScript，请不要使用cc.Class来创建类，而应充分使用class, extends, implements等关键字来定义和扩展类。并使用import关键字取代require()来导入模块，export关键字取代module.exports来导出模块。  
>小提示：使用export而不是export default，从而在IDE中获得更好的重构体验（如在WebStrom中使用export时，对导出的模块重命名也会重命名其它文件中该模块的名字，而export default不会）。  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，import from后面的路径需要是完整的相对路径而不像require()只需要文件名。  
>如果你使用WebStorm等较为智能的IDE，完整路径并不会成为问题，反而能让你一眼明白文件的位置。例如在WebStorm中，你只需要在编辑器中打出想引入的类名的前几个字符，IDE会自动提示出完整的类名，当你选中正确的类名并回车后，完整的import from路径会自动添加到文件头。你甚至不用自己写任何一行import。  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有一种特殊情况是，继承自cc.Component的类（在Creator中可以拖到节点属性编辑器上的脚本）是无法用TypeScript的extends cc.Component关键字来实现的，因为cc.Class内部还会做一些额外的工作。  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了解决此问题，你需要使用project/typescript/decorators/ComponentDecorators.ts中提供的四个装饰器：@CCComponent, @CCEditor, @CCProperty, @CCMixins（除了CCComponent外其它装饰器都是可选的）。  

一个最简单的Component定义如下：  
```
import {CCComponent} from "../decorators/ComponentDecorators";
@CCComponent
export class SimplestComponent extends cc.Component {}
```
四个装饰器完整的使用方法如下：  
```
import {CCComponent, CCEditor, CCProperty, CCMixins} from "../decorators/ComponentDecorators";
// 定义该Component的Editor属性，对应JS中传入cc.Class()的editor参数。
@CCEditor({
    executeInEditMode: true
})
// 将某个类转换为Creator可识别的Component
@CCComponent
// 定义该Component的Mixin（如果不知道什么是Mixin或不使用Mixin的，请忽略该装饰器）。
// 注意：@CCMixins装饰器必须先于@CCComponent使用（即写在@CCComponent下面，更靠近类的定义的地方）。
@CCMixins(mixin1, mixin2, mixin3)
export class ComplicateComponent extends cc.Component {
    // 定义一个Component属性，对应JS中传入cc.Class()的properties字段的参数。
    @CCProperty(cc.Label)
    private someLabel: cc.Label;
    @CCProperty({
        default: 1,
        min: 1,
        max: 10,
        step: 1,
        notify() {
            this.updateLabel();
        }
    }
    private someInteger: number;
    
    public onLoad() {
        this.someInteger = 5;
    }
    
    private updateLabel() {
        this.someLabel.string = this.someInteger + "";
    }
}
```

## 注意事项（请在开始之前阅读本节）  
1. 需要重命名或移动某个代码文件时，请**务必**先在Creator中先重命名或移动assets下的js文件，再同样操作typescript目录下的ts文件（最好在WebStorm下进行ts文件的重命名、移动等操作，它会自动修正其它文件中对该文件的import）。因为当你在Creator中移动js文件的时候，Creator会自动修正所有场景和prefab中对该js文件的引用。  
>一个典型的错误是：你先在typesciprt目录下移动了ts文件，这个ts文件会被自动编译为assets目录的对应新路径下的js文件，但是同时assets中的旧的js文件依旧存在。Creator会报文件重复的错误。这时如果你简单地删掉旧js文件，所有引用旧js文件的场景和prefab都会丢失这个引用。  
2. TypeScript的类型声明文件请使用.d.ts后缀。以.d.ts为后缀的文件只会被TypeScript用作代码提示和检查，不会编译到assets目录下。所有的类型声明文件建议统一放到typescript/types目录下。  
>用.ts作文件后缀也可以写类型声明，但是会编译一个空文件到assets目录下。  
3. 可以在typescript/types目录下的GlobalNameSpace.d.ts中定义全局变量的类型，但是注意不要改动第一行的：  
```
/// <reference path="../../creator.d.ts"/>
```
正是这一行引入了Creator自带的creator.d.ts。  
4. 此项目的creator.d.ts被做了一些修正，以提供更好的代码提示。例如getComponent()的函数签名被改为：  
```
// 如果传入的参数是一个newable的类，则返回该类的实例
getComponent<T>(typeOrClassName: (new()=>T)): T;
// 函数重载，如果传入的参数是string则返回any
getComponent(typeOrClassName: string): any;
```
这样如果你传入getComponent()的是一个类（注意不是字符串形式的类名），TypeScript就会知道返回的是这个类的实例。这样你在IDE中输入
this.getComponent(cc.Graphics).的时候，会自动提出出cc.Graphics的方法。  
该功能也适用与任何自定义的Component，例如：  
```
A.ts:
@CCComponent
export class A extends cc.Component {
    public B() {
    }
}
Test.ts:
import {A} from './A.ts';
...
    this.getComponent(A). // 此处IDE会提示A类的所有public方法
```
5. 文件重命名、类重命名、变量重命名、方法重命名，请统统使用IDE的重构功能。WebStorm中重命名的快捷键是Shift+F6，或者右击文件、类名、变量名、方法名，弹出的菜单中选择refactor->rename。因为TypeScript对你的代码结构有着非常好的了解，所有IDE可以正确地修改所有对重命名对象的引用。例如：  
```
Example.1.ts:
export class A {
    public t: string;
}
export class B {
    public t: string;
}

Example.2.ts:
import {A, B} from './Example.1';
class C {
    example() {
        let a = new A();
        a.t = "a";
        let b = new B();
        b.t = "b";
    }
}

```
这时在Example.1.ts中使用refactor->rename（或Shift+F6）对`A`命名为`AA`，`AA.t`命名为`AA.tt`，则Example.2.ts自动变成：  
```
import {AA, B} from './Example.1';
class C {
    example() {
        let a = new AA();
        a.tt = "a";
        let b = new B();
        b.t = "b";
    }
}
```
从此再也不用担心变量命名啦！先写完再说，哪里不爽改哪里！  
> 注意：若你正在将项目的js代码升级为ts，在升级完成前请慎用重构功能。因为此时TypeScript对你的代码了解不完全，IDE有可能发生错误重构，例如上例中有可能将`B.t`也命名为`B.tt`。所有代码转换为ts之后，我还没有发现过WebStorm有重构错误。  

6. assets/Script/plugins下的文件请保持在Creator中设置为插件的状态。  
7. Component的四个装饰器的实现依赖引擎CCClass.js中的两个函数，但是当前cc.Class没有将这两个方法暴露出来，因此我只好将引擎的CCClass拷贝一份到decorators目录下简单修改并export这两个方法（分了1.3和1.4两个版本）。Jare大神已经同意在Creator 1.5中暴露出这两个方法或类似API，到时就不用再集成一次CCClass了。  

## 将已有的JS项目升级为TS  
0. 在决定开始之前，请先备份好你的项目！  
1. TypeScript环境搭建（见开头“环境搭建”部分）  
2. 将此项目的creator.d.ts与tsconfig.json拷贝至你的项目根目录。  
3. 在你的项目根目录下新建typescript目录，拷贝assets中的所有js代码至typescript目录。  
4. 将此项目的typescript/decorators目录复制到你的typescript目录。  
5. 将此项目的typescript/plugins/TypeScriptHelper.js复制到你的typescript目录，***并在编译到assets目录后在Creator中将该文件设置为插件！*** 这是TypeScript的“运行库”。  
6. 将typescript目录下你的代码全部重命名为.ts。然后使用import代替require，用export代替module.exports，用ES6的class代替cc.Class，用@CCComponent, @CCProperty, @CCEditor来实现你的Component。  

## 参考资料  
[TypeScript文档](http://tslang.cn/docs/handbook/basic-types.html)  
[TypeScript编译选项](http://tslang.cn/docs/handbook/compiler-options.html)
