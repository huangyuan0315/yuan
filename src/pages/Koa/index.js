import template from './index.html';
import axios from 'axios';
export default {
    name: 'koa',
    template,
    data() {
        return {
            activeName: '1',
            dataList: [],
            num: 0,
        };
    },
    beforeDestroy() {
        this.$refs.koa = null;
        this.dataList = null;
        this.servers = null;
    },
    methods: {
        servers() {
            const _this = this;
            this.$http.get('home/1')
                .then((response) => {
                    console.log(response.data);
                    _this.dataList = response.data;
                    _this.$_message({ message: '成功', duration: 1000 });
                    // _this.$_message('成功');
                })
                .catch(() => {
                    console.log('error');
                });
        }
    },
    mounted() {
        this.servers();
    },
};