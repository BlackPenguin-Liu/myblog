"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[904],{11171:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},53628:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},12135:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},62307:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},6991:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},59909:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},73832:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},93155:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},13311:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},87146:function(a,n,e){e.r(n),e.d(n,{demos:function(){return r}});var t=e(67294),r={}},51446:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"myblog",paraId:0}]},35148:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"project",paraId:0}]},67312:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"project123",paraId:0}]},43353:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"EventBus \u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:1},{value:"\u53D1\u5E03/\u8BA2\u9605",paraId:0,tocIndex:1},{value:"\u6A21\u5F0F\u7684\u4E8B\u4EF6\u603B\u7EBF\u6846\u67B6\uFF0C\u4E13\u95E8\u4E3A Android \u4F18\u5316\uFF0C\u7528\u4E8E\u7B80\u5316\u7EC4\u4EF6\u95F4\u7684\u901A\u4FE1\u3002",paraId:0,tocIndex:1},{value:"Event",paraId:1,tocIndex:2},{value:"\uFF1A\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u5BF9\u8C61",paraId:1,tocIndex:2},{value:"Subscriber",paraId:1,tocIndex:2},{value:"\uFF1A\u8BA2\u9605\u8005\uFF0C\u63A5\u6536\u4E8B\u4EF6\u7684\u65B9\u6CD5",paraId:1,tocIndex:2},{value:"Publisher",paraId:1,tocIndex:2},{value:"\uFF1A\u53D1\u5E03\u8005\uFF0C\u53D1\u5E03\u4E8B\u4EF6\u7684\u5BF9\u8C61",paraId:1,tocIndex:2},{value:"EventBus\u63D0\u4F9B",paraId:2,tocIndex:3},{value:"\u7EBF\u7A0B\u5207\u6362",paraId:2,tocIndex:3},{value:"\u80FD\u529B\u3002",paraId:2,tocIndex:3},{value:"\u80FD\u5728",paraId:3,tocIndex:4},{value:"\u4EFB\u4F55\u7EBF\u7A0B",paraId:3,tocIndex:4},{value:"\u4E2D\u53D1\u5E03",paraId:3,tocIndex:4},{value:`// \u5728\u4E3B\u7EBF\u7A0B\u53D1\u5E03
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
`,paraId:9,tocIndex:7},{value:"\u4F18\u70B9",paraId:10,tocIndex:8},{value:"\u5404\u7EC4\u4EF6\u95F4\u89E3\u8026\uFF0C\u65E0\u9700\u76F4\u63A5\u5F15\u7528",paraId:11,tocIndex:8},{value:"\u7EBF\u7A0B\u5207\u6362\u81EA\u52A8\u5904\u7406\uFF0C\u7B80\u5316\u901A\u4FE1",paraId:11,tocIndex:8},{value:"\u7075\u6D3B\uFF1A\u652F\u6301\u4F18\u5148\u7EA7\u3001\u7C98\u6027\u4E8B\u4EF6\u7B49",paraId:11,tocIndex:8},{value:"\u6027\u80FD\u4F18\u79C0\uFF1A\u4F7F\u7528\u6CE8\u89E3\u5904\u7406\u5668\uFF0C\u8FD0\u884C\u65F6\u6027\u80FD\u597D",paraId:11,tocIndex:8},{value:"\u7F3A\u70B9",paraId:12,tocIndex:8},{value:"\u4E8B\u4EF6\u8DDF\u8E2A\u56F0\u96BE\uFF1A\u4E8B\u4EF6\u6D41\u5411\u4E0D\u76F4\u89C2",paraId:13,tocIndex:8},{value:"\u7C7B\u578B\u5B89\u5168\uFF1A\u4F9D\u8D56\u5B57\u7B26\u4E32\u6216\u7C7B\u540D\uFF0C\u7F16\u8BD1\u671F\u68C0\u67E5\u6709\u9650",paraId:13,tocIndex:8},{value:"\u8FC7\u5EA6\u4F7F\u7528\uFF1A\u53EF\u80FD\u5BFC\u81F4\u4EE3\u7801\u96BE\u4EE5\u7EF4\u62A4",paraId:13,tocIndex:8}]},40347:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"ICMP \u5168\u79F0 Internet Control Message Protocol\uFF08\u4E92\u8054\u7F51\u63A7\u5236\u6D88\u606F\u534F\u8BAE\uFF09",paraId:0,tocIndex:0},{value:"OSI \u5C42\u7EA7\uFF1A\u7B2C 3 \u5C42\uFF08\u7F51\u7EDC\u5C42\uFF09\uFF0C\u4E0E IP \u534F\u8BAE\u540C\u7EA7",paraId:1,tocIndex:1},{value:"\u529F\u80FD\uFF1A\u7528\u4E8E\u53D1\u9001\u9519\u8BEF\u62A5\u544A\u548C\u8BCA\u65AD\u4FE1\u606F",paraId:1,tocIndex:1},{value:"\u65E0\u8FDE\u63A5\uFF1A\u4E0D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u76F4\u63A5\u53D1\u9001\u6D88\u606F",paraId:1,tocIndex:1},{value:"\u4E0D\u53EF\u9760\uFF1A\u6CA1\u6709\u9519\u8BEF\u6062\u590D\u673A\u5236\uFF08best-effort\uFF09",paraId:1,tocIndex:1},{value:"\u7528\u9014\uFF1A\u7F51\u7EDC\u8BCA\u65AD\u3001\u9519\u8BEF\u62A5\u544A\u3001\u7F51\u7EDC\u72B6\u6001\u76D1\u6D4B",paraId:1,tocIndex:1},{value:"Ping\uFF08Echo Request/Reply\uFF09\uFF1A\u6700\u5E38\u89C1\u7684 ICMP \u5E94\u7528\uFF0C\u7528\u6765\u6D4B\u8BD5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF1A",paraId:2,tocIndex:2},{value:"\u53D1\u9001\u7AEF \u2192 ICMP Echo Request \u2192 \u76EE\u6807\u4E3B\u673A",paraId:3,tocIndex:2},{value:"\u53D1\u9001\u7AEF \u2190 ICMP Echo Reply \u2190 \u76EE\u6807\u4E3B\u673A",paraId:4,tocIndex:2},{value:"Traceroute\uFF08\u8FFD\u8E2A\u8DEF\u7531\uFF09\uFF1A\u901A\u8FC7\u53D1\u9001\u5E26\u6709\u9012\u589E TTL\uFF08\u751F\u5B58\u65F6\u95F4\uFF09\u503C\u7684 ICMP \u5305\uFF0C\u663E\u793A\u6570\u636E\u5305\u4ECE\u6E90\u5230\u76EE\u6807\u7684\u8DEF\u7531\u8DEF\u5F84\uFF1A",paraId:5,tocIndex:2},{value:"Host A \u2192 Router 1 \u2192 Router 2 \u2192 Router 3 \u2192 Host B",paraId:6,tocIndex:2},{value:"\u9519\u8BEF\u62A5\u544A\uFF1A\u5F53\u8DEF\u7531\u5668\u6216\u4E3B\u673A\u9047\u5230\u95EE\u9898\u65F6\uFF0C\u53D1\u9001 ICMP \u9519\u8BEF\u6D88\u606F\u901A\u77E5\u6E90\u4E3B\u673A\uFF0C\u4F8B\u5982\uFF1A",paraId:7,tocIndex:2},{value:"\u76EE\u6807\u4E0D\u53EF\u8FBE\uFF08Destination Unreachable\uFF09",paraId:8,tocIndex:2},{value:"\u8D85\u65F6\uFF08Time Exceeded\uFF09",paraId:9,tocIndex:2},{value:"\u53C2\u6570\u95EE\u9898\uFF08Parameter Problem\uFF09",paraId:10,tocIndex:2},{value:`sequenceDiagram
    participant A as \u7528\u6237
    participant B as \u7CFB\u7EDF
    participant C as \u6570\u636E\u5E93
    
    A->>B: \u767B\u5F55\u8BF7\u6C42
    B->>C: \u9A8C\u8BC1\u7528\u6237\u4FE1\u606F
    C-->>B: \u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C
    B-->>A: \u767B\u5F55\u6210\u529F/\u5931\u8D25
`,paraId:11,tocIndex:3},{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 1. \u6784\u9020 ICMP Echo Request \u5305             \u2502
\u2502    Type: 8 (IPv4) or 128 (IPv6)         \u2502
\u2502    Sequence Number: \u5E8F\u5217\u53F7               \u2502
\u2502    Payload: \u53EF\u9009\u6570\u636E                      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 2. \u901A\u8FC7 Socket \u53D1\u9001 ICMP \u5305              \u2502
\u2502    Os.write(fileDescriptor, packet)     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 3. \u76EE\u6807\u4E3B\u673A\u6536\u5230\u8BF7\u6C42                      \u2502
\u2502    \u81EA\u52A8\u751F\u6210 Echo Reply \u54CD\u5E94               \u2502
\u2502    Type: 0 (IPv4) or 129 (IPv6)         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 4. \u539F\u4E3B\u673A\u63A5\u6536\u54CD\u5E94                        \u2502
\u2502    Os.read(fileDescriptor, reply)       \u2502
\u2502    \u9A8C\u8BC1\u5E8F\u5217\u53F7\u548C\u5185\u5BB9                      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 5. \u8BA1\u7B97\u5F80\u8FD4\u65F6\u95F4 (RTT)                   \u2502
\u2502    RTT = \u54CD\u5E94\u65F6\u95F4 - \u53D1\u9001\u65F6\u95F4             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`,paraId:12,tocIndex:3},{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Type (8 bits)                       \u2502  0: Echo Reply, 8: Echo Request
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Code (8 bits)                       \u2502  \u901A\u5E38\u4E3A 0
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Checksum (16 bits)                  \u2502  \u7528\u4E8E\u9519\u8BEF\u68C0\u6D4B
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Rest of Header (32 bits)            \u2502  Identifier, Sequence Number
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Data (\u53EF\u9009)                          \u2502  Payload
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`,paraId:13,tocIndex:4},{value:`\u8F7B\u91CF\u7EA7\uFF1AICMP \u5305\u5F88\u5C0F\uFF08\u901A\u5E38 8 \u5B57\u8282\u8D77\uFF09\uFF0C\u7F51\u7EDC\u5F00\u9500\u5C0F
\u5FEB\u901F\u53CD\u5E94\uFF1A\u6CA1\u6709\u8FDE\u63A5\u5EFA\u7ACB\u8FC7\u7A0B\uFF0C\u7ACB\u5373\u8FD4\u56DE\u7ED3\u679C
\u7F51\u7EDC\u8BCA\u65AD\uFF1A\u53EF\u4EE5\u68C0\u6D4B\u7F51\u7EDC\u8FDE\u63A5\u72B6\u6001\u3001\u5EF6\u8FDF\u3001\u4E22\u5305\u7387
\u8DE8\u5E73\u53F0\uFF1A\u51E0\u4E4E\u6240\u6709\u7F51\u7EDC\u8BBE\u5907\u90FD\u652F\u6301 ICMP
\u4E0D\u4F9D\u8D56\u5E94\u7528\u5C42\uFF1A\u5373\u4F7F\u76EE\u6807\u4E3B\u673A\u6CA1\u6709\u8FD0\u884C\u7279\u5B9A\u670D\u52A1\u4E5F\u80FD\u54CD\u5E94`,paraId:14,tocIndex:5},{value:"IPv4\u534F\u8BAE\uFF1A\u8BF7\u6C42\u7C7B\u578B\uFF1A8\uFF0C\u56DE\u590D\u7C7B\u578B\uFF1A0",paraId:15,tocIndex:6},{value:"IPv6\u534F\u8BAE\uFF1A128\uFF0C129",paraId:15,tocIndex:6},{value:`public class IcmpCheck implements Runnable, Closeable {
    public static final int ICMPV4_ECHO_REQUEST_TYPE = 8;
    public static final int ICMPV6_ECHO_REQUEST_TYPE = 128;
    private static final int TIMEOUT_SEND = 100;
    private static final int TIMEOUT_RECV = 300;
    private static final int PACKET_BUFSIZE = 512;

    protected final InetAddress mTarget;
    protected final int mAddressFamily;
    protected final VpnPingMeasurement mMeasurement;
    protected FileDescriptor mFileDescriptor;
    protected SocketAddress mSocketAddress;

    private final int mProtocol;
    private final int mIcmpType;
    private final long mTimeout;
    private final int mPingCount;

    protected IcmpCheck(InetAddress target, VpnPingMeasurement long timeout, int pingCount) {
        if (target instanceof Inet6Address) {
            mTarget = target;
            mAddressFamily = OsConstants.AF_INET6;
        } else {
            mTarget = target;
            mAddressFamily = OsConstants.AF_INET;
        }

        this.mTimeout = timeout;
        this.mPingCount = pingCount;
        if (mAddressFamily == AF_INET6) {
            mProtocol = IPPROTO_ICMPV6;
            mIcmpType = ICMPV6_ECHO_REQUEST_TYPE;
        } else {
            mProtocol = IPPROTO_ICMP;
            mIcmpType = ICMPV4_ECHO_REQUEST_TYPE;
        }
    }

    @Override
    public void run() {
        try {
            setupSocket(mProtocol, TIMEOUT_SEND, TIMEOUT_RECV);
            doPing();
        } catch (Exception e) {
            DxLog.e(TAG, "pingError:" + e.getMessage());
        } finally {
            close();
        }
    }

    protected void setupSocket(int protocol, long writeTimeout, long readTimeout)
            throws ErrnoException, IOException {
        mFileDescriptor = Os.socket(mAddressFamily, OsConstants.SOCK_DGRAM, protocol);
        if (Build.VERSION.SDK_INT >= 29) {
            // Setting SNDTIMEO is purely for defensive purposes.
            Os.setsockoptTimeval(mFileDescriptor,
                    OsConstants.SOL_SOCKET, OsConstants.SO_SNDTIMEO, StructTimeval.fromMillis(writeTimeout));
//\u5355\u6B21read\u7684\u8D85\u65F6\u65F6\u95F4
            Os.setsockoptTimeval(mFileDescriptor,
                    OsConstants.SOL_SOCKET, OsConstants.SO_RCVTIMEO, StructTimeval.fromMillis(readTimeout));
        }
        Os.connect(mFileDescriptor, mTarget, 0);
        mSocketAddress = Os.getsockname(mFileDescriptor);
    }

    private void doPing() {
        // Build a trivial ICMP packet.// ICMP header
        final byte[] icmpPacket = {(byte) mIcmpType, 0, 0, 0, 0, 0, 0, 0};

        int sequence = 0;
        while (sequence < mPingCount) {
            sequence++;
            icmpPacket[icmpPacket.length - 1] = (byte) sequence;
            mMeasurement.sequenceStart();
            try {
                //\u53D1\u9001icmp\u5305
                Os.write(mFileDescriptor, icmpPacket, 0, icmpPacket.length);
                //\u63A5\u6536icmp\u5305
                checkEcho(sequence);
            } catch (ErrnoException | InterruptedIOException ignore) {
                mMeasurement.sequenceError();
            } finally {
                delay(10);
            }
        }
    }

    private void checkEcho(int sequence) {
        long startTime = SystemClock.elapsedRealtime();
        boolean received = false;
// \u53EF\u80FD\u591A\u6B21\u5FAA\u73AF\uFF1A1.\u4E3B\u673A\u53EF\u80FD\u53D1\u9001\u591A\u4E2AReply\uFF0C\u53EF\u80FD\u5E8F\u5217\u53F7\u4E0D\u5BF9\uFF0C\u9700\u8981\u9A8C\u8BC1icmp\u5E8F\u5217\u53F7\uFF1B2 \u7F51\u7EDC\u6162\u6216\u65E0\u54CD\u5E94\u3002
// \u5355\u6B21\u5FAA\u73AFread\u7684\u8D85\u65F6\u65F6\u95F4\u4E3ATIMEOUT_RECV\uFF0C\u53EF\u4EE5\u9632\u6B62read\u6C38\u4E45\u963B\u585E\u3002\u6574\u4F53\u5FAA\u73AF\u7684\u8D85\u65F6\u65F6\u95F4\u4E3AmTimeout\u3002\u53EF\u4EE5\u9632\u6B62\u65E0\u9650\u5236\u7684\u4E00\u76F4\u7B49\u5F85\u3002
// \u6240\u4EE5\u9700\u8981\u4E24\u4E2A\u65F6\u95F4
        while (SystemClock.elapsedRealtime() - startTime < mTimeout) {
            try {
                ByteBuffer reply = ByteBuffer.allocate(PACKET_BUFSIZE);
                Os.read(mFileDescriptor, reply);
                //\u68C0\u67E5icmp\u5305\u5E8F\u53F7
                if (isValidIcmpReply(reply.array(), sequence)) {
                    mMeasurement.sequenceSuccess();
                    received = true;
                    break;
                }
            } catch (ErrnoException | InterruptedIOException ignore) {
                //read failed
            }
        }
        ///\u8D85\u65F6\u672A\u63A5\u6536\u5230\u6B63\u786E\u54CD\u5E94
        if (!received) {
            mMeasurement.sequenceError();
        }
    }

    private boolean isValidIcmpReply(byte[] packet, int expectedSequence) {
        if (mProtocol == IPPROTO_ICMPV6) {
            return packet[0] == -127 &&               // Type: Echo Reply
                    packet[1] == 0 &&               // Code: 0
                    (packet[7] & 0xFF) == expectedSequence; // \u5E8F\u5217\u53F7\u5339\u914D
        } else {
            return packet[0] == 0 &&               // Type: Echo Reply
                    packet[1] == 0 &&               // Code: 0
                    (packet[7] & 0xFF) == expectedSequence; // \u5E8F\u5217\u53F7\u5339\u914D
        }
    }

    private final Object lock = new Object();

    private void delay(long delay) {
        synchronized (lock) {
            try {
                lock.wait(delay);
            } catch (InterruptedException ignore) {
            }
        }
    }

    @Override
    public void close() {
        if (mFileDescriptor != null && mFileDescriptor.valid()) {
            try {
                Os.close(mFileDescriptor);
            } catch (Exception ignore) {
            }
        }
    }
}


`,paraId:16,tocIndex:7},{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 \u8C03\u7528 write() \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 \u5C1D\u8BD5\u53D1\u9001 ICMP \u5305\u5230\u7F51\u7EDC                   \u2502
\u2502                                         \u2502
\u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502
\u2502 \u2502 0ms \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 50ms \u2500\u2500\u2500\u2500 100ms \u2502   \u2502
\u2502 \u2502 \u5F00\u59CB        ...   ...    \u8D85\u65F6\uFF01  \u2502   \u2502
\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502
\u2502                                         \u2502
\u2502 \u5982\u679C 100ms \u5185\u8FD8\u6CA1\u53D1\u9001\u51FA\u53BB\uFF0C\u629B\u51FA\u5F02\u5E38     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u4F55\u65F6\u89E6\u53D1\u8D85\u65F6\uFF1A
\u7F51\u7EDC\u975E\u5E38\u62E5\u5835
Socket \u7F13\u51B2\u533A\u6EE1
\u7CFB\u7EDF\u8D44\u6E90\u4E0D\u8DB3`,paraId:17,tocIndex:8},{value:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 \u8C03\u7528 read()  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2193
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 \u7B49\u5F85\u63A5\u6536 ICMP Echo Reply                \u2502
\u2502                                         \u2502
\u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502
\u2502 \u2502 0ms \u2500\u2500\u2500\u2500 150ms \u2500\u2500\u2500\u2500 300ms        \u2502   \u2502
\u2502 \u2502 \u5F00\u59CB \u6536\u5230\u56DE\u590D\uFF01   \u6216\u8005    \u8D85\u65F6\uFF01  \u2502   \u2502
\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502
\u2502                                         \u2502
\u2502 \u5982\u679C 300ms \u5185\u6CA1\u6536\u5230\uFF0C\u629B\u51FA\u5F02\u5E38           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u4F55\u65F6\u89E6\u53D1\u8D85\u65F6\uFF1A
\u76EE\u6807\u4E3B\u673A\u65E0\u54CD\u5E94\uFF08\u5B95\u673A\u3001\u79BB\u7EBF\uFF09
\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD
\u4E22\u5305\u7387\u8FC7\u9AD8
\u8DEF\u7531\u5668\u6545\u969C`,paraId:18,tocIndex:9}]},95865:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u8BB2\u89E3\u6587\u7AE0",paraId:0,tocIndex:0},{value:"\u7528\u4E8E\u5904\u7406\u7528\u6237\u4E8B\u4EF6\u6D41\u7684\u7EC4\u5408\u3001\u5904\u7406\u4E8B\u4EF6\u6D41\u7684\u8D85\u65F6\u548C\u5F02\u5E38\u3001\u7ED3\u675F\u65F6\u7684\u6E05\u7406\u64CD\u4F5C\u3002\u53EF\u4EE5\u907F\u514D\u2018\u56DE\u8C03\u5730\u72F1\u2019\uFF0C\u4EE5\u53CA\u81EA\u4E3B\u7EF4\u62A4\u8D85\u65F6\u3001\u5F02\u5E38\u7684\u60C5\u51B5\u3002",paraId:1,tocIndex:0},{value:"Observable\u4E0A\u6E38\uFF0C\u88AB\u89C2\u5BDF\u8005",paraId:2,tocIndex:2},{value:"Observer\u662F\u4E0B\u6E38\uFF0C\u662F\u89C2\u5BDF\u8005",paraId:2,tocIndex:2},{value:"subscribe\u8FDE\u63A5\u4E24\u8005",paraId:2,tocIndex:2},{value:"subscribeOn(Schedulers.io()) \u4E0A\u6E38\uFF08\u88AB\u89C2\u5BDF\u8005\uFF09\u5728\u54EA\u4E2A\u7EBF\u7A0B\uFF0C\u6709\u591A\u4E2A\u65F6\u53EA\u6709\u7B2C\u4E00\u4E2A\u6709\u6548",paraId:2,tocIndex:2},{value:"observeOn(Schedulers.newThread()) \u4E0B\u6E38\uFF08\u89C2\u5BDF\u8005\uFF09\u5728\u54EA\u4E2A\u7EBF\u7A0B\uFF0C\u6709\u591A\u4E2A\u65F6\u90FD\u751F\u6548\uFF0C\u5373\u6BCF\u8C03\u7528\u4E00\u6B21",paraId:2,tocIndex:2},{value:"observeOn()",paraId:2,tocIndex:2},{value:"\u5C31\u4F1A\u5207\u6362\u4E00\u6B21\u7EBF\u7A0B",paraId:2,tocIndex:2},{value:"ObservableEmitter\uFF0C\u53D1\u51FA\u4E8B\u4EF6\u3002",paraId:2,tocIndex:2},{value:"onNext(T value)",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"onError(Throwable error)",paraId:2,tocIndex:2},{value:" ",paraId:2,tocIndex:2},{value:"onComplete()",paraId:2,tocIndex:2},{value:"onComplete\u7ED3\u675F\u6574\u4E2A\u6D41\uFF0C\u65E9\u9000",paraId:2,tocIndex:2},{value:"onNext \u4E0B\u4E00\u4E2A\u94FE\u5F0F\u88AB\u8C03\u7528",paraId:2,tocIndex:2},{value:"onError \u4EE5\u5F02\u5E38\u7ED3\u675F\u6574\u4E2A\u6D41\uFF0C\u8868\u793A\u67D0\u4E2A\u73AF\u8282\u6709\u5F02\u5E38",paraId:2,tocIndex:2},{value:"doOnNext",paraId:2,tocIndex:2},{value:"Disposable\uFF0C\u7ED3\u675F\u4E0A\u4E0B\u6E38\u7684\u8FDE\u63A5",paraId:2,tocIndex:2},{value:"doOnSubscribe \u5728\u8BA2\u9605\u65F6\u7ACB\u5373\u6267\u884C",paraId:2,tocIndex:2},{value:"doOnNext \u5728 Observer \u6536\u5230\u6BCF\u4E2A\u6570\u636E\u4E4B\u524D\u6267\u884C\u56DE\u8C03",paraId:2,tocIndex:2},{value:".flatMap\uFF1A\u4E0D\u4FDD\u8BC1\u6570\u636E\uFF0C\u5E76\u884C\u5904\u7406\uFF08\u591A\u4E2AObservable\u53EF\u540C\u65F6\u5904\u7406\uFF0C\u6240\u4EE5\u6709\u53EF\u80FD\u4E71\u5E8F\uFF0C\u5904\u7406\u901F\u5EA6\u5FEB\u7684Observable\u5148\u8FD4\u56DE\u6570\u636E\uFF09",paraId:2,tocIndex:2},{value:".concatMap\uFF1A\u4FDD\u6301\u987A\u5E8F\uFF0C\u4E32\u884C\u5904\u7406\uFF08\u524D\u4E00\u4E2AObservable\u7ED3\u675F\u624D\u6267\u884C\u4E0B\u4E00\u4E2A\uFF09",paraId:2,tocIndex:2},{value:"Schedulers.io() \u4EE3\u8868io\u64CD\u4F5C\u7684\u7EBF\u7A0B, \u901A\u5E38\u7528\u4E8E\u7F51\u7EDC,\u8BFB\u5199\u6587\u4EF6\u7B49io\u5BC6\u96C6\u578B\u7684\u64CD\u4F5C",paraId:3,tocIndex:3},{value:"Schedulers.computation() \u4EE3\u8868CPU\u8BA1\u7B97\u5BC6\u96C6\u578B\u7684\u64CD\u4F5C, \u4F8B\u5982\u9700\u8981\u5927\u91CF\u8BA1\u7B97\u7684\u64CD\u4F5C",paraId:3,tocIndex:3},{value:"Schedulers.newThread() \u4EE3\u8868\u4E00\u4E2A\u5E38\u89C4\u7684\u65B0\u7EBF\u7A0B",paraId:3,tocIndex:3},{value:"AndroidSchedulers.mainThread() \u4EE3\u8868Android\u7684\u4E3B\u7EBF\u7A0B",paraId:3,tocIndex:3},{value:"observable.subscibe(observer);",paraId:4,tocIndex:4},{value:`// \u53EF\u4F7F\u7528lambda\u7B80\u5316
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


// \u5E76\u884C\u4E0E\u4E32\u884C
Observable.fromIterable(uriList)
    .concatMap(uri -> processUri(uri)) // \u6309\u987A\u5E8F\u5904\u7406

Observable.fromIterable(uriList)
    .flatMap(uri -> processUri(uri)) // \u5E76\u884C\u5904\u7406
`,paraId:5,tocIndex:4}]},33380:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Android\u6784\u5EFA\u6D41\u7A0B\uFF1A",paraId:0},{value:`\u8D44\u6E90\u5904\u7406
AAPT2 (Android Asset Packaging Tool 2)
\u8D44\u6E90\u5408\u5E76\u548C\u51B2\u7A81\u89E3\u51B3
\u8D44\u6E90\u538B\u7F29\u548C\u4F18\u5316`,paraId:1},{value:`\u4EE3\u7801\u7F16\u8BD1
Java/Kotlin\u7F16\u8BD1
DEX\u751F\u6210\uFF08Dalvik Executable\uFF09
\u591ADEX\u652F\u6301
R8/ProGuard\u4EE3\u7801\u4F18\u5316\u548C\u6DF7\u6DC6`,paraId:2},{value:`\u6253\u5305\u548C\u7B7E\u540D
APK/AAB\u6253\u5305
V1/V2/V3\u7B7E\u540D
\u5BF9\u9F50\u4F18\u5316\uFF08zipalign\uFF09`,paraId:3},{value:"https://developer.android.com/build/gradle-build-overview?hl=zh-cn",paraId:4},{value:" Gradle\u6784\u5EFA\u6982\u89C8",paraId:4}]},63878:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},22454:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},53002:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]}}]);
