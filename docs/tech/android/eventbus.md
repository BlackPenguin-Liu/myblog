---
nav:
  title: 学习笔记
  order: 0
group:
  title: Android
  order: -1
---

# EventBus

## 解释
EventBus 是一个基于**发布/订阅**模式的事件总线框架，专门为 Android 优化，用于简化组件间的通信。

## 组成
* **Event**：事件，可以是任意类型的对象
* **Subscriber**：订阅者，接收事件的方法
* **Publisher**：发布者，发布事件的对象

## 详解
EventBus提供**线程切换**能力。

### 1. 事件发布 Posting
能在**任何线程**中发布
```javascript
// 在主线程发布
EventBus.getDefault().post(new MyEvent());

// 在后台线程发布
new Thread(() -> {
    EventBus.getDefault().post(new MyEvent());
}).start();
```

### 2. 事件订阅 Subscribe、ThreadMode
可以在**任何线程**中执行，由ThreadMode决定。无论事件在哪个线程发布，都可以在订阅的线程中处理，互相隔离。
```javascript
// 默认在POSTING
@Subscribe(threadMode = ThreadMode.POSTING)
public void onEvent(MessageEvent event) {
    // 在发布事件的同一线程执行
    // 性能最好，但要注意线程安全
}

// Android 主线程中执行，可直接更新UI
@Subscribe(threadMode = ThreadMode.MAIN)
public void onMessageEvent(MyEvent event) {
    // 总是在主线程执行，可以安全更新 UI
    textView.setText(event.getMessage());
}

// 主线程执行，但事件会进入队列按顺序处理。可保证事件处理的顺序性
@Subscribe(threadMode = ThreadMode.MAIN_ORDERED)

// 后台线程执行。如果事件在主线程发布，会创建一个后台线程；
// 如果本来就在后台线程，就直接在该线程执行
@Subscribe(threadMode = ThreadMode.BACKGROUND)
public void onMessageEvent(MyEvent event) {
    // 在后台线程执行，适合执行耗时操作
    performHeavyWork();
}

// 独立的异步线程执行，适合执行耗时操作（如网络请求、数据库读写）
@Subscribe(threadMode = ThreadMode.ASYNC)
public void onMessageEvent(MyEvent event) {
    // 在独立的异步线程执行
    performNetworkRequest();
}
```

### 3. 优先级 priority
```javascript
@Subscribe(threadMode = ThreadMode.MAIN, priority = 1)
public void _(_) {
    // 高优先级，先执行
}

@Subscribe(threadMode = ThreadMode.MAIN, priority = 0)
public void _(_) {
    // 普通优先级
}
```

### 4. 注册与解注册
使用EventBus必须要注册、解注册
```javascript
// 注册 EventBus
EventBus.getDefault().register(this);

 // 取消注册
EventBus.getDefault().unregister(this);
```

### 5.优缺点
**优点**
* 各组件间解耦，无需直接引用
* 线程切换自动处理，简化通信
* 灵活：支持优先级、粘性事件等
* 性能优秀：使用注解处理器，运行时性能好

**缺点**
* 事件跟踪困难：事件流向不直观
* 类型安全：依赖字符串或类名，编译期检查有限
* 过度使用：可能导致代码难以维护