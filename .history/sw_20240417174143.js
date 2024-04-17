self.addEventListener('install',event=>{
    console.log('install',event)
    //  会让service worker 跳过等待 直接进入到 activate 状态
    // 等待 skipWaiting结束，才进入到 activate
    event.waitUntil(self.skipWaiting())
})
self.addEventListener('activate',event=>{
    console.log('activate',event)
    // 表示 service worker 激活后，立即获取控制权
    event.waitUntil(self.clients.claim())
})
// 注释:fetch事件会在请求发送的时候触发
self.addEventListener('fetch',event=>{
    console.log('fetch',event)
})