import template from './index.html';
export default {
    template,
    data() {
        return {
            activeIndex: "/",
            menuList: []
        };
    },
    mounted() {
        console.log(this.$root.MENUS);
        console.log(this.$router.options.routes);
        this.menuList = [];
        const menu = this.$router.options.routes;
        menu.map((it) => {
            if (it.path !== '*') {
                this.menuList.push(it);
            }
        });
        console.log(this.menuList);
    },
};