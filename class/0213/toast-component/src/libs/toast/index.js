import Vue from 'vue'
import Main from './index.vue'

let ToastConstructor = Vue.extend(Main); // 用 Vue.extend 创建组件的模板（构造函数）
let instance;

const Toast = function (options = {}) {
  instance = new ToastConstructor({
    data: options // 这里会和组件的 data 合并 这里的优先级大
  })
    .$mount();
  document.body.appendChild(instance.$el); // 挂载到相应的元素上
};

// 支持快速调用
['success','error'].forEach(type => {
  Toast[type] = options => {
    options.type = type;
    return Toast(options);
  }
})

export default Toast;
