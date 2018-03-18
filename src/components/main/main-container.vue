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
    position: absolute;
    width: 280px;
    height: 890px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
