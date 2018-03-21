<template>
    <div class="contacts-crowd">
        <ul class="crowd-wrap">
            <li class="crowd-item clearfix" v-for="(crowd,index) in contactsList && contactsList.crowd">
                <div class="crowd-portrait">
                    <img v-lazy="crowd.portrait && crowd.portrait.imgUrl">
                </div>
                <div class="crowd-name">{{crowd.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'contactsCrowd',
    data(){
        return {

        }
    },
    computed: {
        contactsList(){
            return this.$store.state.contactsList;
        }
    }
}
</script>

<style scoped lang="scss">
.contacts-crowd{
    height: 734px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #808080;
    .crowd-wrap{
        width: 280px;
        overflow: hidden;
        .crowd-item{
            padding: 11px 28px 0 15px;
            height: 62px;
            border-bottom: 1px solid #e3e3e3;
            background-color: #f5f5f5;
            cursor: pointer;
            
            .crowd-portrait{
                float: left;
                height: 40px;
                width: 40px;

                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .crowd-name{
                float: left;
                width: calc(100% - 53px);
                height: 40px;
                margin-left: 13px;
            }
        }
    }
}
</style>