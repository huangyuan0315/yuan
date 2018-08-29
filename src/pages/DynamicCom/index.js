import template from './index.html';
export default {
    name: 'dynameicCom',
    template,
    components: {
        'carousel': () => import('@/components/Carousel')
    },
    beforeDestroy() {
        this.$refs.dynameic = null;
        this.toasts = null;
        this.toasts2 = null;
    },
    methods: {
        toasts() {
            this.$toast('天涯', '', 'delete', () => {
                alert('天下');
            });
        },
        toasts2() {
            this.$toast('天下', 1000);
        }
    }
};