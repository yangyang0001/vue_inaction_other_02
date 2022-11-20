
<template>
    <div class="root">
        <h1>App根组件</h1>
        <Life></Life>
        <Left></Left>
        <Right></Right>
        
    </div>
</template>

<script>
// 1、导入组件
import Life from '@/components/Life.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

// 2、注册组件
export default {
    components: {
        Left,
        Right,
        Life,
    }
}
</script>

<style lang="less" scoped>
.root {
    padding: 5px 20px 260px 20px;
    background-color: #b9bdb0;
}

</style>