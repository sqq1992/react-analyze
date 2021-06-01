
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

##### 3.layout commitLayoutEffects