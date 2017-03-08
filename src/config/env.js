/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * wxjsurl: 引入微信js文件
 * imgBaseUrl: 图片所在域名地址
 * 
 */
let baseUrl; 
let routerMode;
const wxjsurl = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
const imgBaseUrl = '';

if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
	routerMode = 'history'
}else{
	baseUrl = '';
	routerMode = 'hash'
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
	wxjsurl
}