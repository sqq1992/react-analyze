

#关于render流程
1.关于render流程, 在'ReactDom.js'里的render方式, 使用'legacyRenderSubtreeIntoContainer'  (1)
2.关于fiberRoot的建立, 在'ReactDom.js'里的render方式, 使用'legacyRenderSubtreeIntoContainer', 'FiberRootNode'
可创建fiberRoot (2)


#关于更新内容信息
1.关于setState, 在'ReactUpdateQueue.js'里的 'createContainer' 里 (3)
2.关于setState调用的方法在, 'ReactBaseClasses' 里的 'setState' (4)

#关于fiber的内容
1.关于fiber, 在'ReactFiberWorkLoop'里的'markUpdateTimeFromFiberToRoot' 方法递归其fiber对象 (5)