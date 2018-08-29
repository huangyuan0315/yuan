import Vue from 'vue';
// 全局组件
// import info from "@/plugInUnit/infos/index";
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import YuanPlug from '@/plugInUnit/Plug/index';
import axios from './axiosConfig';
import _message from '@/plugInUnit/Message/index';
import Container from '@/components/Container';
import Loading from '@/plugInUnit/Plug/Loading.vue';
import Tool from '@/plugInUnit/Plug/Tooltip.vue';
import Fromplugin from '@/plugInUnit/Plug/FromPlugin';
// Vue.use(info);
Vue.prototype.$http = axios;
Vue.use(_message);
Vue.use(YuanPlug);
// Vue.component(CollapseTransition.name, CollapseTransition)
Vue.component('Container', Container);
// loading 插件
Vue.component('Loading', Loading);
// tooltips 插件
Vue.component('Tooltips', Tool);
// 表单插件
Vue.component('FromPlugin', Fromplugin);

Vue.config.productionTip = false; //设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.silent = false  //取消 Vue 所有的日志与警告。
// Vue.config.devtools = true; //开发版本默认为 true，生产版本默认为 false
Vue.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info)
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
};
Vue.config.performance = false;  //设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式
