<template>
    <div class="right">
        <h3>Right组件</h3>
        <MineCount :init="init"></MineCount>
    </div>
</template>

<script>
export default {
    data() {
        return {
            init: 6
        }
    }
}
</script>

<style lang="less" scoped>
.right {
    float: right;
    background-color: #e0e30e;
    padding: 5px 0px 20px 20px;
    font-weight: bolder;
    width: 48%;
}
</style>