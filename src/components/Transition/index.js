import template from './index.html';
export default {
    template,
    methods: {
        beforeEnter: function (el) {
            // ...
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        enter: function (el, done) {
            // ...
            done()
        },
        afterEnter: function (el) {
            // ...
        },
        enterCancelled: function (el) {
            // ...
        },

        // --------
        // 离开时
        // --------

        beforeLeave: function (el) {
            // ...
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        leave: function (el, done) {
            // ...
            done()
        },
        afterLeave: function (el) {
            // ...
        },
        // leaveCancelled 只用于 v-show 中
        leaveCancelled: function (el) {
            // ...
        }
    }
};