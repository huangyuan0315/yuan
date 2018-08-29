import Vue from 'vue';
import ToastComponent from './Toast.vue';
const ToastConstructor = Vue.extend(ToastComponent);

export default (options) => {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    };
    const instance = new ToastConstructor({
        data: options
    });
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el);
    instance.vm.show = true;
    const destroy = () => {
        instance.vm.show = false;
        document.body.removeChild(instance.vm.$el);
        instance.vm.$destroy();
    };
    instance.vm.$on('close', () => {
        destroy();
    });
    setTimeout(() => {
        destroy();
    }, instance.vm.duration);

    return instance.vm
}
