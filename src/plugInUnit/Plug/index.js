import ToastComponent from './Toast.vue';
const YuanPlug = {};
// 注册yuanPlug
YuanPlug.install = (Vue) => {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    // toast 插件
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el);
    instance.vm.$on('close', () => {
        instance.vm.show = false;
    });
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    Vue.prototype.$toast = (msg, duration, type, callback) => {
        instance.vm.show = true;
        instance.vm.message = msg;
        instance.vm.type = type;
        instance.vm.callback = callback;
        if (duration) {
            setTimeout(() => {
                instance.vm.show = false;
                // document.body.removeChild(instance.vm.$el);
                // instance.vm.$destroy();
            }, duration);
        }
    }
}

export default YuanPlug