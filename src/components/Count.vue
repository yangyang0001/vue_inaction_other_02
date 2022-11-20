<template>
    <div>
        <h5>Count组件</h5>
        <p>count is :{{ count }}</p>
        <button @click="handleIncrease">+1</button><br /><br />
        <button @click="show">展示this</button>
    </div>
</template>

<script>

export default {
    /** 父组件 向 子组件传递值, props 是只读的! 数组格式的是最精简的方式! */
    // props: ['init'],

    /** 对象格式, 这种可以为属性设置默认值 */
    props: {
        init: {
            // 如果父组件没有传递这个值, 则使用默认值 default!
            default: 100,
            // 设置 init 属性的类型
            type: Number,

            // 设置必填项
            required : true
        }
    },

    data() {
        return {
            count: this.init
        };
    },

    mounted() {

    },

    methods: {
        handleIncrease: function () {
            this.count++;
        },

        show: function () {
            console.log(this);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>