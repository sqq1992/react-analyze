
### react的render和update阶段

##### 1.render阶段

1.beginWork阶段 和 completeWork阶段

双缓存fiber树  

首次render阶段:
(1).beginWork: 构建fiber树, 根据diff来尝试复用已有的fiber树
(2).completeWork: 根据fiber, 来生成真实的dom节点
(3).commitRoot: 执行最终操作

update阶段
(1).beginWork: 根据是否有fiber的alternate缓存, 来决定是否复用!
(2).completeWork: 在它上面的completeUnitOfWork, 每个执行完completeWork且存在effectTag的Fiber节点会被保存在一条被称为effectList的单向链表中
(3).commitRoot: 执行dom操作