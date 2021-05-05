
### 状态更新流程

##### 1.useState来源于ReactFiberHooks.js里的mountState或者updateState, 手动调用useState里的updateNum

`const [num, updateNum] = useState(0);`

会去执行ReactFiberHooks.js里的dispatchAction



