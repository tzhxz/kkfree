{
    version： ‘0.0
    .1’
//配置版本号
    origin： ‘us - proxy.alibaba.com’， host： ‘edge.alibaba.com’ pages： ［ {
    pageName： ‘seo’，
//页面名称标识
match： ‘/abc/efg/.*’，
//页面path匹配正则字符串
renderConf： { //渲染配置 renderType： ‘ESR’， //边缘渲染 templateType： ‘FULL_HTML’， //模板类型：将SSR出的完整html作为模板 dynamicMode： ‘WATER_FALL|ASYNC_INSERT’， // 动态内容append返回方式：瀑布流返回|异步填坑（innerHTML） templateUrl： ‘’// 模板url } }， { pageName： ‘seo’， match： ‘/abc/efg/.*’， renderConf： { renderType： ‘ESR’， templateType： ‘STATIC’， // 静态模板，可通过cdn url获取 dynamicMode： ‘WATER_FALL|ASYNC_INSERT’， // 动态内容append返回方式：瀑布流返回|异步填坑（innerHTML） templateUrl： ‘https://g.alicdn.com/@g/xxx.html’ } }， { pageName： ‘jump’， match： ‘/jump/.*’， renderConf： { renderType： ‘REDIRECT_302’， // 302跳转 rewriteUrl： ‘https://jump’ } }， { pageName： ‘proxy’， match： ‘/proxy/.*’， renderConf： { renderType： ‘PROXY_PASS’， // 301跳转 rewriteUrl： ‘https://proxypassurl’ } } ］}
