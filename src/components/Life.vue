<template>
    <div class="life">
        <h2>Life生命周期组件 --- 共 {{books.length}} 本书</h2>
        <h3 id="life-h3"></h3>

        <p>message is : {{message}}</p>
        <button @click="changeMsg">修改Message值</button>
    </div>
</template>

<script>
export default {
    props: ['info'],
    
    data() {
        return {
            message: 'hello vue.js',
            books: []
        };
    },

    mounted() {
        
    },

    methods: {
        show: function() {
            console.log('Life component’s show method invoke ...');
        },

        initBooks: function() {
            console.log("initBooks methods invoke ...");
            const xhr = new XMLHttpRequest();
            /** TODO: 这块必须用 箭头函数, 否则失效! */
            xhr.addEventListener('load', () => {
                const result = JSON.parse(xhr.responseText);
                this.books = result;
            });
            xhr.open('GET', 'http://localhost:8888/getBooks');
            xhr.send();
        },

        changeMsg: function() {
            this.message = this.message += '~';
        }
    },

    /** 生命周期函数 */
    beforeCreate() {
        /** 这个阶段 props, data, methods 都不能访问 */
        // console.log("this.info is    :" + this.info);
        // console.log("this.message is :" + this.message);
        // this.show();
    },

    created() {
        /** 这个 created 非常重要, 经常在这个方法里面, 调用方法 去请求后端服务器 获取数据供页面渲染使用! */
        // console.log("this.info is    :" + this.info);
        // console.log("this.message is :" + this.message);
        // this.show();
        this.initBooks();
    },

    /** 如果想操作 DOM 元素, 最早只能在 mounted 方法中操作 */
    mounted() {
        // document.getElementById('life-h3').innerHTML = 'Hello Vue.js';
    },

    beforeUpdate() {
        // console.log('beforeUpdate method invoke ...');
    },
    
    updated() {
        // console.log('updated method invoke ...');
    },

    beforeDestroy() {
        
    },

    destroyed() {

    }
};
</script>

<style lang="less" scoped>
.life {
    background-color: #91a8df;
    padding: 5px 0px 20px 20px;
    font-weight: bolder;
}
</style>