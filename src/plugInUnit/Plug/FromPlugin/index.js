import './index.styl';
import template from './index.html';
export default {
    template,
    props: {
        sureFormBottonText: {
            type: String,
            default: '保存'
        },
        resetFormBottonText: {
            type: String,
            default: '取消'
        },
        labelPosition: {
            type: String,
            default: "right"
        },
        // fromData 表单赋初始值 // 也可以不赋初始值
        fromData: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: Object,
            default: () => ({})
        },
        fromList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showFormLabel: true
        };
    },
    methods: {
        sureForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.fromData);
                    // 可以直接在这里 发请求 axios/ajax ...
                    this.$emit("submit-form", this.fromData);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            const temp = this.$refs[formName].resetFields();
            const _this = this;
            this.showFormLabel = false;
            this.$nextTick(() => {
                for (let i in _this.fromData) {
                    _this.fromData[i] = "";
                }
                _this.showFormLabel = true;
            });
            this.$emit("clear-form", this.fromData);
        }
    }
}