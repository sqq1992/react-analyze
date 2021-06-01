
### react的合成事件

##### 1.事件初始化-事件合成，插件机制
这个阶段主要形成了上述的几个重要对象，构建初始化React合成事件和原生事件的对应关系，合成事件和对应的事件处理插件关系。接下来就是事件绑定阶段。
(1).通过EventPluginHubInjection.injectEventPluginsByName方法注册事件插件
在EventPluginHubInjection.injectEventPluginsByName注册的事件中举个如下列子
const SimpleEventPlugin = {
    eventTypes:{ 
        'click':{ /* 处理点击事件  */
            phasedRegistrationNames:{
                bubbled: 'onClick',       // 对应的事件冒泡 - onClick 
                captured:'onClickCapture' //对应事件捕获阶段 - onClickCapture
            },
            dependencies: ['click'], //事件依赖
            ...
        },
        'blur':{ /* 处理失去焦点事件 */ },
    }
    extractEvents:function(topLevelType,targetInst,){ /* eventTypes 里面的事件对应的统一事件处理函数，接下来会重点讲到 */ }
}


##### 2.事件绑定-从一次点击事件开始
1.在completeWork阶段, 会注册事件监听器!
2.详情如下:
① 在React，diff DOM元素类型的fiber的props的时候， 如果发现是React合成事件，比如onClick，会按照事件系统逻辑单独处理。
② 根据React合成事件类型，找到对应的原生事件的类型，然后调用判断原生事件类型，大部分事件都按照冒泡逻辑处理，少数事件会按照捕获逻辑处理（比如scroll事件）。
③ 调用 addTrappedEventListener 进行真正的事件绑定，绑定在document上，dispatchEvent 为统一的事件处理函数。
④ 有一点值得注意: 只有上述那几个特殊事件比如 scorll,focus,blur等是在事件捕获阶段发生的，其他的都是在事件冒泡阶段发生的，无论是onClick还是onClickCapture都是发生在冒泡阶段，至于 React 本身怎么处理捕获逻辑的。我们接下来会讲到。

##### 3.事件触发-一次点击事件，在react底层系统会发生什么
