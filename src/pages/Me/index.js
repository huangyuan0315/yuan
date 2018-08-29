import template from './index.html';
export default {
    name: 'me',
    template,
    data() {
        return {
            activeName: '1',
            loadingShows: true
        };
    },
    beforeDestroy() {
        this.$refs.me = null;
        this.loadingShows = false;
    },
    mounted() {
        const _this = this;
        setTimeout(() => {
            _this.loadingShows = false;
        }, 500);

        console.log(this.$root.MENUS);
        const arr = [1, 2, 3]
        arr.includes(2); // true
        arr.includes(4); // false
        console.log(arr.includes(2), arr.includes(4));

        const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        // 1 find 1.查找元素，返回找到的值，找不到返回undefined。
        var ret1 = arr1.find((value, index, arr) => {
            return value > 4
        })
        // 2 findIndex 查找元素，返回找到的index，找不到返回-1。
        var ret3 = arr1.findIndex((value, index, arr) => {
            return value > 4
        })
        console.log(ret1, ret3);


        //         every()和some();
        // 目的：对数组元素应用指定的函数判定.
        // 参数：二者都需要一个函数.
        // > every() 返回true需要满足的条件为：数组中所有元素在函数判定下都为true则返回true，否则返回false. (PS:跟他的的汉语意思一样，每个)
        // > some() 返回true需要满足的条件为：数组中有一个元素在函数判定下为true则返回true, 否则返回false. ((PS:跟他的的汉语意思一样，一些)
        // > note: 执行every() 时，若有一个参数为false，则返回，忽略执行后面的参数.
        // > note: 而some() 则相反，若有一个参数为true, 则返回, 忽略执行后面的参数.
        // 对于空数组，every() 返回true, some()返回 false.

        let arr6 = [{
            a: 1
        }, {
            a: 10
        },
        {
            a: []
        }];

        console.log(arr6.some(function (item, index, array) {
            return item.a > 10;
        }));

        console.log(arr6.every(function (item, index, array) {
            console.log('item=' + item + ',index=' + index + ',array=' + array);
            return item.a > 3;
        }));
    },
};