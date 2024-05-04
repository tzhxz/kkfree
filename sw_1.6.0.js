/*
self: 表示 Service Worker 作用域, 也是全局变量
caches: 表示缓存
skipWaiting: 表示强制当前处在 waiting 状态的脚本进入 activate 状态
clients: 表示 Service Worker 接管的页面
*/
const cacheStorageKey = "olio-bs-v16"
const apiCacheName = "olio-api-v16";

const cacheList = [
    '/',
    // "index.html",
    // "index.css",
    // "icon.png"
]
// 借助 Service Worker, 可以在注册完成安装 Service Worker 时, 抓取资源写入缓存:
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheStorageKey).then((cache) => {
            return cache.addAll(cacheList);
        }).then(() => self.skipWaiting)
    );
});
// 更新静态资源
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheStorageKey && key !== apiCacheName) {
                    console.log("==dbg150=delelte key="+key);
                    return caches.delete(key);
                }
            }));
        })
    );
    // 注意不能忽略这行代码，否则第一次加载会导致fetch事件不触发
    return self.clients.claim();
});

// 在新安装的 Service Worker 中通过调用 self.clients.claim() 取得页面的控制权, 这样之后打开页面都会使用版本更新的缓存。旧的 Service Worker 脚本不再控制着页面之后会被停止
self.addEventListener('fetch', (event) => {
    if(event.request.url.indexOf('ads.txt')!=-1){
        return fetch(event.request);
    }
    let tempArr=event.request.url.split('/'); //||event.request.url.indexOf('/user/')!=-1
    if (tempArr[2].indexOf('kkfreegame.com') == -1||event.request.url.indexOf('sw_1.6.0.js')!=-1) {
        // console.log('==dbg==sw==fetch.request=='+event.request.url);
        return fetch(event.request);
        // return fetch(event.request).then((response) => {
        //     return response;
        // }).catch((e) => {
        //     console.log('==dbg1==cache.put==e', e);
        // });
    }
    event.respondWith(
        caches.open(apiCacheName).then(function (cache) {
            // console.log('==dbg=sw==1==event.request.url==', event.request.url);
            // console.log('==dbg=sw==1==event.request.method==', event.request.method);
            return cache.match(event.request).then(function (response) {
                var fetchPromise = fetch(event.request).then(function (networkResponse) {
                    if (event.request.method != 'POST') {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        }).catch((e) => {
            // console.log('==dbg150==cache.put==e', e);
            // console.log('==dbg=sw==2==event.request.url==', event.request.url);
            // console.log('==dbg=sw==2==event.request.method==', event.request.method);
            return  fetch(event.request).then((response) => {
                return caches.open(apiCacheName).then((cache) => {
                    if (event.request.method != 'POST') {
                        cache.put(event.request, response.clone());
                    }
                    return response;
                });
             });
        })
    );
    // event.respondWith(
    //     caches.match(event.request).then((resp) => {
    //         // console.log('==dbg1==cache.put==11==resp', resp);
    //         return resp || fetch(event.request).then((response) => {
    //             // console.log('==dbg1==cache.put==22==response', response);
    //             return caches.open(apiCacheName).then((cache) => {
    //                 // console.log('==dbg1==cache.put==33==request', event.request);
    //                 if (event.request.method != 'POST') {
    //                     cache.put(event.request, response.clone());
    //                 }
    //                 return response;
    //             });
    //         }).catch((e) => {
    //             console.log('==dbg1==cache.put==e', e);
    //         });
    //     })
    // );
});

// self.addEventListener('fetch', function (e) {
//     // 需要缓存的xhr请求
//     var noCacheRequestUrls = [
//         '/loginin',
//         '/subscription',
//         '/addPlayHistory',
//         '/addGameFeedback',
//     ];
//     console.log('现在正在请求：' + e.request.url);

//     // 判断当前请求是否需要缓存
//     var noNeedCache = noCacheRequestUrls.some(function (url) {
//         return e.request.url.indexOf(url) > -1;
//     });

//     if (noNeedCache) {
//         // 非api请求，直接查询cache
//         // 如果有cache则直接返回，否则通过fetch请求
//         e.respondWith(
//             caches.match(e.request).then(function (cache) {
//                 return cache || fetch(e.request);
//             }).catch(function (err) {
//                 console.log(err);
//                 return fetch(e.request);
//             })
//         );
//     }
//     else {
//         // 需要缓存
//         // 使用fetch请求数据，并将请求结果clone一份缓存到cache
//         // 此部分缓存后在browser中使用全局变量caches获取
//         caches.open(apiCacheName).then(function (cache) {
//             return fetch(e.request).then(function (response) {
//                 cache.put(e.request.url, response.clone());
//                 return response;
//             });
//         });

//     }
// });

/* ======================================= */
/* push处理相关部分，已添加对notification的调用，注释action部分 */
/* ======================================= */
self.addEventListener('push', function (e) {
    var data = e.data;
    if (e.data) {
        data = data.json();
        console.log('==dbg1==push的数据为：', data);
        var title = data.title;
        var options = {
            body: data.body,
            icon: data.icon,
            // actions: [{
            //     action: 'play-game',
            //     title: '去看看'
            // }],
            tag: 'olio-pwa-push',
            renotify: true
        };
        self.registration.showNotification(title, options);
    } else {
        console.log('==dbg=1.6.0==push没有任何数据');
    }
});
/* ======================================= */
/* notification处理相关部分，注释action部分 */
/* ======================================= */
self.addEventListener('notificationclick', function (e) {
    // var action = e.action;
    // switch (action) {
    //     case 'play-game':
    //         console.log('play-game');
    //     default:
    //         action = 'default';
    //         console.log(`未处理的action: ${action}`);
    //         break;
    // }
    e.notification.close();

    e.waitUntil(
        // 获取所有clients
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                self.clients.openWindow && self.clients.openWindow('https://kkfreegame.com');
                return;
            }
            clients[0].focus && clients[0].focus();
            // clients.forEach(function (client) {
            //     // 使用postMessage进行通信
            //     client.postMessage(action);
            // });
        })
    );
});
