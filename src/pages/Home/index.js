import template from './index.html';
import './index.styl';
export default {
    name: 'home',
    template,
    data() {
        return {
            show: true,
            color2: "#fdfdfd"
        };
    },
    beforeDestroy() {
        this.$refs.home = null;
        this.show = false;
    },
    mounted() {
        console.log(this.$root.MENUS);
        let target = { a: 1 };
        let source1 = {
            b: 2, g: {
                h: 1
            }
        };
        let source2 = {
            c: 3, g: {
                h: 99
            }
        };
        // Object.assign 方法实行的是浅拷贝
        Object.assign(target, source1, source2);
        console.log(target, source1, source2);
        const obj1 = { a: '1' };
        const obj2 = { ...obj1, b: '2' };
        console.log(obj2);
        const obj = { foo: 88, baz: 99 };
        //         Object.getOwnPropertyNames(obj)
        // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
        console.log(Object.keys(obj), Object.values(obj));
        const obj3 = {
            name: 'joy',
            age: {
                a: {
                    c: 1
                }
            },
            getName() {
                return this.name;
            },
            setName(v) {
                this.name = v;
            }
        }
        // ES7深度拷贝对象 Object.getOwnPropertyDescriptors
        const cloneObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj3));
        // const cloneObj2 =JSON.parse(JSON.stringify(obj3)) 深拷贝
        obj3.name = '天涯';
        console.log(cloneObj);
        // 对象本身冻结
        Object.freeze(obj3);

        const data = { s: 99 };
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                console.log(data[i])
            }
        }
    },
};