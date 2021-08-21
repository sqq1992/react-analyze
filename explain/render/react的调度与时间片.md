
### react的调度与时间片

### 1.执行React的异步调度任务
scheduleCallback也就是unstable_scheduleCallback统一调度react的更新任务

scheduleCallback的流程:
创建一个新的任务 newTask。
通过任务的开始时间( startTime ) 和 当前时间( currentTime ) 比较:当 startTime > currentTime, 说明未过期, 存到 timerQueue，当 startTime <= currentTime, 说明已过期, 存到 taskQueue。
如果任务过期，并且没有调度中的任务，那么调度 requestHostCallback。本质上调度的是 flushWork。
如果任务没有过期，用 requestHostTimeout 延时执行 handleTimeout。

handleTimeout的流程:
延时指定时间后，调用的 handleTimeout 函数， handleTimeout 会把任务重新放在 requestHostCallback 调度。