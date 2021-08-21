
### react的commit阶段

commit阶段的主要工作（即Renderer的工作流程）分为三部分：

before mutation阶段（执行DOM操作前）

mutation阶段（执行DOM操作）

layout阶段（执行DOM操作后）

##### 1.before mutation  commitBeforeMutationEffects
(1)处理DOM节点渲染/删除后的 autoFocus、blur 逻辑。
(2)调用getSnapshotBeforeUpdate生命周期钩子。
(3)调度useEffect。

##### 2.mutation commitMutationEffects
mutation阶段会遍历effectList，依次执行commitMutationEffects。该方法的主要工作为“根据effectTag调用不同的处理函数处理Fiber

(1)Placement effect: 当Fiber节点含有Placement effectTag，意味着该Fiber节点对应的DOM节点需要插入到页面中
(2)Update effect: 当Fiber节点含有Update effectTag，意味着该Fiber节点需要更新。调用的方法为commitWork，他会根据Fiber.tag分别处理。
(3)FunctionComponent mutation: 在'commitWork'方法中会调用commitHookEffectListUnmount。该方法会遍历effectList，执行所有useLayoutEffect hook的销毁函数。
(4)ClassComponent: 会执行componentWillUnmount


##### 3.layout commitLayoutEffects
commitLayoutEffectOnFiber（调用生命周期钩子(列如:componentDidMount/Update)和hook相关操作）
commitAttachRef（赋值 ref）
(1)FunctionComponent 会执行执行所有useLayoutEffect的回调函数
(2)ClassComponent 会执行componentDidMount/componentDidUpdate

