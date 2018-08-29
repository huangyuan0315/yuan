import template from './index.html';
import { rulesMsg, citys } from "./consts";
export default {
    name: 'froms',
    template,
    data() {
        return {
            fromLadelList: [
                { name: '用户', field: 'username', placeholder: '输入用户名' },
                { name: '密码', field: 'password', type: "password", placeholder: '输入密码' },
                { name: '性别', field: 'sex', type: "radio", radiolist: [{ name: '男', value: 0 }, { name: '女', value: 1 }] },
                { name: '年龄', field: 'age', type: "number", placeholder: '输入年龄' },
                { name: '邮箱', field: 'email', placeholder: '输入邮箱' },
                { name: '月份', field: 'months', type: 'month', placeholder: '选择月份' },
                { name: '日期', field: 'times', type: 'date', placeholder: '选择日期' },
                { name: '时间', field: 'datetimes', type: 'datetime', placeholder: '选择日期' },
                // selectname/selectvalue  为selectlist的两个对应的字段
                { name: '区域', field: 'region', type: 'select', selectlist: citys, selectname: 'cityname', selectvalue: 'city' },
                { name: '域名', field: 'domain_name', disabled: true },
                { name: '介绍', field: 'introduce', type: 'textarea' },
                { name: '特殊', field: 'checkboxs', type: 'checkbox' }
            ],
            ruless: rulesMsg,
            fromDatas: {
                username: '天涯',
                password: 123,
                sex: 0,
                age: 23,
                email: '124364@q.cn',
                months: '2018-08',
                times: '2018-08-27',
                datetimes: new Date(),
                domain_name: 'www.baidu.com',
                introduce: '源',
                checkboxs: false,
                region: 'Shanghai'
            }
        };
    },
    beforeDestroy() {
        this.$refs.froms = null;
        this.fromLadelList = null;
        this.ruless = null;
        this.fromDatas = null;
        this.submitFormData = null;
        this.clearFormData = null;
    },
    methods: {
        submitFormData(res) {
            console.log(res);
            this.fromDatas = res;
        },
        clearFormData(res) {
            console.log(res);
            this.fromDatas = res;
        }
    }
};