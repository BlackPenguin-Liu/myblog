"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[904],{11171:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},53628:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},12135:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},74294:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},13311:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},87146:function(t,e,n){n.r(e),n.d(e,{demos:function(){return a}});var d=n(67294),a={}},51446:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"myblog",paraId:0}]},35148:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"project",paraId:0}]},67312:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"project123",paraId:0}]},89089:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"EventBus \u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:1},{value:"\u53D1\u5E03/\u8BA2\u9605",paraId:0,tocIndex:1},{value:"\u6A21\u5F0F\u7684\u4E8B\u4EF6\u603B\u7EBF\u6846\u67B6\uFF0C\u4E13\u95E8\u4E3A Android \u4F18\u5316\uFF0C\u7528\u4E8E\u7B80\u5316\u7EC4\u4EF6\u95F4\u7684\u901A\u4FE1\u3002",paraId:0,tocIndex:1},{value:"Event",paraId:1,tocIndex:2},{value:"\uFF1A\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u5BF9\u8C61",paraId:1,tocIndex:2},{value:"Subscriber",paraId:1,tocIndex:2},{value:"\uFF1A\u8BA2\u9605\u8005\uFF0C\u63A5\u6536\u4E8B\u4EF6\u7684\u65B9\u6CD5",paraId:1,tocIndex:2},{value:"Publisher",paraId:1,tocIndex:2},{value:"\uFF1A\u53D1\u5E03\u8005\uFF0C\u53D1\u5E03\u4E8B\u4EF6\u7684\u5BF9\u8C61",paraId:1,tocIndex:2},{value:"EventBus\u63D0\u4F9B",paraId:2,tocIndex:3},{value:"\u7EBF\u7A0B\u5207\u6362",paraId:2,tocIndex:3},{value:"\u80FD\u529B\u3002",paraId:2,tocIndex:3},{value:"\u80FD\u5728",paraId:3,tocIndex:4},{value:"\u4EFB\u4F55\u7EBF\u7A0B",paraId:3,tocIndex:4},{value:"\u4E2D\u53D1\u5E03",paraId:3,tocIndex:4},{value:`// \u5728\u4E3B\u7EBF\u7A0B\u53D1\u5E03
EventBus.getDefault().post(new MyEvent());

// \u5728\u540E\u53F0\u7EBF\u7A0B\u53D1\u5E03
new Thread(() -> {
    EventBus.getDefault().post(new MyEvent());
}).start();
`,paraId:4,tocIndex:4},{value:"\u53EF\u4EE5\u5728",paraId:5,tocIndex:5},{value:"\u4EFB\u4F55\u7EBF\u7A0B",paraId:5,tocIndex:5},{value:"\u4E2D\u6267\u884C\uFF0C\u7531ThreadMode\u51B3\u5B9A\u3002\u65E0\u8BBA\u4E8B\u4EF6\u5728\u54EA\u4E2A\u7EBF\u7A0B\u53D1\u5E03\uFF0C\u90FD\u53EF\u4EE5\u5728\u8BA2\u9605\u7684\u7EBF\u7A0B\u4E2D\u5904\u7406\uFF0C\u4E92\u76F8\u9694\u79BB\u3002",paraId:5,tocIndex:5},{value:`// \u9ED8\u8BA4\u5728POSTING
@Subscribe(threadMode = ThreadMode.POSTING)
public void onEvent(MessageEvent event) {
    // \u5728\u53D1\u5E03\u4E8B\u4EF6\u7684\u540C\u4E00\u7EBF\u7A0B\u6267\u884C
    // \u6027\u80FD\u6700\u597D\uFF0C\u4F46\u8981\u6CE8\u610F\u7EBF\u7A0B\u5B89\u5168
}

// Android \u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C\uFF0C\u53EF\u76F4\u63A5\u66F4\u65B0UI
@Subscribe(threadMode = ThreadMode.MAIN)
public void onMessageEvent(MyEvent event) {
    // \u603B\u662F\u5728\u4E3B\u7EBF\u7A0B\u6267\u884C\uFF0C\u53EF\u4EE5\u5B89\u5168\u66F4\u65B0 UI
    textView.setText(event.getMessage());
}

// \u4E3B\u7EBF\u7A0B\u6267\u884C\uFF0C\u4F46\u4E8B\u4EF6\u4F1A\u8FDB\u5165\u961F\u5217\u6309\u987A\u5E8F\u5904\u7406\u3002\u53EF\u4FDD\u8BC1\u4E8B\u4EF6\u5904\u7406\u7684\u987A\u5E8F\u6027
@Subscribe(threadMode = ThreadMode.MAIN_ORDERED)

// \u540E\u53F0\u7EBF\u7A0B\u6267\u884C\u3002\u5982\u679C\u4E8B\u4EF6\u5728\u4E3B\u7EBF\u7A0B\u53D1\u5E03\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u540E\u53F0\u7EBF\u7A0B\uFF1B
// \u5982\u679C\u672C\u6765\u5C31\u5728\u540E\u53F0\u7EBF\u7A0B\uFF0C\u5C31\u76F4\u63A5\u5728\u8BE5\u7EBF\u7A0B\u6267\u884C
@Subscribe(threadMode = ThreadMode.BACKGROUND)
public void onMessageEvent(MyEvent event) {
    // \u5728\u540E\u53F0\u7EBF\u7A0B\u6267\u884C\uFF0C\u9002\u5408\u6267\u884C\u8017\u65F6\u64CD\u4F5C
    performHeavyWork();
}

// \u72EC\u7ACB\u7684\u5F02\u6B65\u7EBF\u7A0B\u6267\u884C\uFF0C\u9002\u5408\u6267\u884C\u8017\u65F6\u64CD\u4F5C\uFF08\u5982\u7F51\u7EDC\u8BF7\u6C42\u3001\u6570\u636E\u5E93\u8BFB\u5199\uFF09
@Subscribe(threadMode = ThreadMode.ASYNC)
public void onMessageEvent(MyEvent event) {
    // \u5728\u72EC\u7ACB\u7684\u5F02\u6B65\u7EBF\u7A0B\u6267\u884C
    performNetworkRequest();
}
`,paraId:6,tocIndex:5},{value:`@Subscribe(threadMode = ThreadMode.MAIN, priority = 1)
public void _(_) {
    // \u9AD8\u4F18\u5148\u7EA7\uFF0C\u5148\u6267\u884C
}

@Subscribe(threadMode = ThreadMode.MAIN, priority = 0)
public void _(_) {
    // \u666E\u901A\u4F18\u5148\u7EA7
}
`,paraId:7,tocIndex:6},{value:"\u4F7F\u7528EventBus\u5FC5\u987B\u8981\u6CE8\u518C\u3001\u89E3\u6CE8\u518C",paraId:8,tocIndex:7},{value:`// \u6CE8\u518C EventBus
EventBus.getDefault().register(this);

 // \u53D6\u6D88\u6CE8\u518C
EventBus.getDefault().unregister(this);
`,paraId:9,tocIndex:7},{value:"\u4F18\u70B9",paraId:10,tocIndex:8},{value:"\u5404\u7EC4\u4EF6\u95F4\u89E3\u8026\uFF0C\u65E0\u9700\u76F4\u63A5\u5F15\u7528",paraId:11,tocIndex:8},{value:"\u7EBF\u7A0B\u5207\u6362\u81EA\u52A8\u5904\u7406\uFF0C\u7B80\u5316\u901A\u4FE1",paraId:11,tocIndex:8},{value:"\u7075\u6D3B\uFF1A\u652F\u6301\u4F18\u5148\u7EA7\u3001\u7C98\u6027\u4E8B\u4EF6\u7B49",paraId:11,tocIndex:8},{value:"\u6027\u80FD\u4F18\u79C0\uFF1A\u4F7F\u7528\u6CE8\u89E3\u5904\u7406\u5668\uFF0C\u8FD0\u884C\u65F6\u6027\u80FD\u597D",paraId:11,tocIndex:8},{value:"\u7F3A\u70B9",paraId:12,tocIndex:8},{value:"\u4E8B\u4EF6\u8DDF\u8E2A\u56F0\u96BE\uFF1A\u4E8B\u4EF6\u6D41\u5411\u4E0D\u76F4\u89C2",paraId:13,tocIndex:8},{value:"\u7C7B\u578B\u5B89\u5168\uFF1A\u4F9D\u8D56\u5B57\u7B26\u4E32\u6216\u7C7B\u540D\uFF0C\u7F16\u8BD1\u671F\u68C0\u67E5\u6709\u9650",paraId:13,tocIndex:8},{value:"\u8FC7\u5EA6\u4F7F\u7528\uFF1A\u53EF\u80FD\u5BFC\u81F4\u4EE3\u7801\u96BE\u4EE5\u7EF4\u62A4",paraId:13,tocIndex:8}]},22454:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[]},53002:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[]}}]);
