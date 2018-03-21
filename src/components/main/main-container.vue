<template>
    <div class="main-container">
        <qq-header></qq-header>
        <qq-list></qq-list>
    </div>
</template>

<script>
import qqHeader from './qq-header';
import qqList from './qq-list'
export default {
    components: {
        'qq-header': qqHeader,
        'qq-list': qqList
    }
}
</script>
<style scoped>
.main-container{
    float: left;
    width: 280px;
    height: 890px;
    margin-top: 30px;
}
</style>
