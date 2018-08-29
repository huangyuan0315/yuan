import template from './index.html';
export default {
    name: 'transfer',
    template,
    data() {
        const generateData2 = _ => {
            const data = [];
            const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
            cities.forEach((city, index) => {
                data.push({
                    label: city,
                    key: index,
                    pinyin: pinyin[index]
                });
            });
            return data;
        };
        return {
            data2: generateData2(),
            value2: [],
            tableData: [],
            tableData2: [{
                code: '20160502',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                code: '20160504',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                code: '20160501',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                code: '20160503',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            search: ''
        };
    },
    beforeDestroy() {
        this.$refs.transfer = null;
        this.data2 = null;
        this.filterMethod = null;
    },
    methods: {
        filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
        },
        formatter(row, column) {
            return row.address + '天涯';
        },
        tableSearch(val) {
            this.tableData = [];
            this.tableData2.forEach((it) => {
                if (it.code.indexOf(val) > -1) {
                    this.tableData.push(it);
                }
            })
        }
    },
    mounted() {
        this.tableData = this.tableData2;
    },
};