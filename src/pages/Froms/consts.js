const validatePass = (rule, value, callback) => {
    const unitcode1 = /^[a-zA-Z0-9]{3,30}$/.test(value);
    if (value !== "") {
        if (!unitcode1) {
            callback(new Error('请输入3~30位的字母、数字！'));
        } else {
            callback();
        }
    } else {
        callback(new Error('请输入密码！'));
    }
};
const usernames = (rule, value, callback) => {
    const unitname1 = /^[\u4e00-\u9fa50-9A-z]+$/.test(value);
    if (value !== "") {
        !unitname1 ? callback(new Error('请输入的字母、数字、汉字！')) : callback();
    } else {
        callback(new Error('请输入用户名称！'));
    }
};
const checkAge = (rule, value, callback) => {
    const unitage = /^(?:[1-9]?\d|100)$/.test(value);
    if (value) {
        !unitage ? callback(new Error('请输入数字值')) : callback();
    } else {
        callback(new Error('年龄不能为空'));
    }
};
export const rulesMsg = {
    username: [
        { required: true, validator: usernames, trigger: 'blur' }
    ],
    password: [
        { required: true, validator: validatePass, trigger: 'blur' }
    ],
    sex: { required: true, message: '选择性别', trigger: 'change' },
    age: [
        { required: true, validator: checkAge, trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ],
    times: { required: true, message: '选择日期', trigger: 'change' }
};
export const citys = [{
    city: 'Beijing',
    cityname: '北京'
}, {
    city: 'Shanghai',
    cityname: '上海'
}, {
    city: 'Nanjing',
    cityname: '南京'
}, {
    city: 'Chengdu',
    cityname: '成都'
}, {
    city: 'Shenzhen',
    cityname: '深圳'
}, {
    city: 'Guangzhou',
    cityname: '广州'
}];