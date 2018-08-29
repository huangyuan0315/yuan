import Vue from 'vue'
import Component from './infomation.vue'

const InfomationConstructor = Vue.extend(Component)

let instances = []
let seed = 1

const info = (options) => {
  if (instances.length > 0) {
    info.closeAll();
  }
  options = options || {};
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }
  const instance = new InfomationConstructor({
    data: options,
  })
  const id = `notification_${seed++}`
  instance.id = id

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0

  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.$on('close', () => {
    instance.vm.visible = false
  })
  instances.push(instance)
  return instance.vm
}

const removeInstance = (instance) => {
  if (!instance) return
  let len = instances.length
  const index = instances.findIndex(item => {
    return item.id === instance.id
  })
  instances.splice(index, 1)
  if (len <= 1) return
  const h = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset - h - 16)
  }
}
info.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

info.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};
export default info