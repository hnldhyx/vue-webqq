<template>
<div class="wrap">
    <main-container></main-container>
    <chat-container></chat-container>
</div>
</template>

<script>

import mainContainer from './main/main-container';
import chatContainer from './chat/chat-container';

export default {
    name: 'wrap',
    data(){
        return {

        }
    },
    beforeCreate(){
        let condition = {
            uid: this.$store.state.uid
        };
        this.$store.dispatch('getUserInfo', condition);
    },
    components: {
        'main-container': mainContainer,
        'chat-container': chatContainer
    }
}
</script>
<style scpoed>
.wrap{
    position: relative;
    margin: 0 auto;
    width: 1000px;
    height: 100%;
}
</style>
