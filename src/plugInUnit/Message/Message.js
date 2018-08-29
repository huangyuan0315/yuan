import Vue from 'vue';
import MessageComponent from './Message.vue';
const MessageConstructor = Vue.extend(MessageComponent);

export default (options) => {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    const instance = new MessageConstructor({
        data: options
    });
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el);
    instance.vm.show = true;
    setTimeout(() => {
        instance.vm.show = false;
        document.body.removeChild(instance.vm.$el);
        instance.vm.$destroy();
    }, instance.vm.duration);

    return instance.vm
}
