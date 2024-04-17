const CACHE_NAME ='cache_v1'
self.addEventListener("install", async (event) => {
  // 开启一个cache，得到一个cache对象
  const cache = await caches.open(CACHE_NAME);
  // cache 对象就可以存储的资源
  // 等待cache把所有的资源存储起来
  await cache.addAll([
    "/index.html",
    "/images/logo.png",
    "/manifest.json",
    // "/index.css",
  ]);
  //  会让service worker 跳过等待 直接进入到 activate 状态
  // 等待 skipWaiting结束，才进入到 activate

  await self.skipWaiting();
});
// 主要清除旧的缓存
self.addEventListener("activate", async (event) => {
//   会清除掉旧的资源，获取到所有的资源的key
const keys=await caches.keys()
keys.forEach(key=>{
    if(key!==CACHE_NAME){
       caches.delete(key) 
    }
})
  await self.clients.claim();
});
// 注释:fetch事件会在请求发送的时候触发
self.addEventListener("fetch", (event) => {});
