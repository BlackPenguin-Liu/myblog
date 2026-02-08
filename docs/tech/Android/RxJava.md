---
nav:
  title: 学习笔记
  order: 0
group:
  title: Android
  order: 0
---

# RxJava
[讲解文章](https://www.jianshu.com/p/464fa025229e)

用于处理用户事件流的组合、处理事件流的超时和异常、结束时的清理操作。可以避免‘回调地狱’，以及自主维护超时、异常的情况。

## 1 常用方法
### 1.1. RxJava常用
* Observable上游，被观察者
* Observer是下游，是观察者
* subscribe连接两者
* subscribeOn(Schedulers.io()) 上游（被观察者）在哪个线程，有多个时只有第一个有效
* observeOn(Schedulers.newThread()) 下游（观察者）在哪个线程，有多个时都生效，即每调用一次`observeOn()`就会切换一次线程
* ObservableEmitter，发出事件。`onNext(T value)` `onError(Throwable error)` `onComplete()`
* onComplete结束整个流，早退
* onNext 下一个链式被调用
* onError 以异常结束整个流，表示某个环节有异常
* doOnNext
* Disposable，结束上下游的连接
* doOnSubscribe 在订阅时立即执行
* doOnNext 在 Observer 收到每个数据之前执行回调
* .flatMap：不保证数据，并行处理（多个Observable可同时处理，所以有可能乱序，处理速度快的Observable先返回数据）
* .concatMap：保持顺序，串行处理（前一个Observable结束才执行下一个）

### 1.2 线程
* Schedulers.io() 代表io操作的线程, 通常用于网络,读写文件等io密集型的操作
* Schedulers.computation() 代表CPU计算密集型的操作, 例如需要大量计算的操作
* Schedulers.newThread() 代表一个常规的新线程
* AndroidSchedulers.mainThread() 代表Android的主线程

## 2 使用方式

`observable.subscibe(observer);`
```java
// 可使用lambda简化
// Observable.create((ObservableOnSubscribe<Integer>) emitter -> {
//    emitter.onNext(1);
//    emitter.onNext(2);
//    emitter.onNext(3);
//    emitter.onComplete();
//  }
// );
Observable.create(new ObservableOnSubscribe<Integer>() {
  @Override
  public void subscribe(ObservableEmitter<Integer> emitter) throws Exception {
    emitter.onNext(1);
    emitter.onNext(2);
    emitter.onNext(3);
    emitter.onComplete();
  }
}).subscribe(new Observer<Integer>() {
    @Override
    public void onSubscribe(Disposable d) {
        Log.d(TAG, "subscribe");
    }

    @Override
    public void onNext(Integer value) {
        Log.d(TAG, "" + value);
    }

    @Override
    public void onError(Throwable e) {
        Log.d(TAG, "error");
    }

    @Override
    public void onComplete() {
        Log.d(TAG, "complete");
    }
});


// 并行与串行
Observable.fromIterable(uriList)
    .concatMap(uri -> processUri(uri)) // 按顺序处理

Observable.fromIterable(uriList)
    .flatMap(uri -> processUri(uri)) // 并行处理
```




