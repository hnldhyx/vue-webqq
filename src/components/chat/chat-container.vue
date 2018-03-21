<template>
    <div class="chat-container">
        <chat-header></chat-header>
        <chat-detail></chat-detail>
    </div>
</template>

<script>
import chatHeader from './chat-header';
import chatDetail from './chat-detail';
export default {
    data(){
        return{

        }
    },
    components: {
        'chat-header': chatHeader,
        'chat-detail': chatDetail
    }
}
</script>

<style scoped lang="scss">
.chat-container{
    float: left;
    width: 700px;
    margin-top: 105px;
    margin-left: 20px;
}
</style>
