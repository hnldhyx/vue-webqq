<template>
    <div class="contacts-discussion">
        <ul class="discussion-wrap">
            <li class="discussion-item clearfix" v-for="(discussion,index) in contactsList && contactsList.discussion">
                <div class="discussion-portrait">
                    <img v-lazy="discussion.portrait && discussion.portrait.imgUrl">
                </div>
                <div class="discussion-name">{{discussion.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'contactsDiscussion',
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
.contacts-discussion{
    background-color: #808080;
    .discussion-wrap{
        .discussion-item{
            padding: 11px 28px 0 15px;
            height: 62px;
            border-bottom: 1px solid #e3e3e3;
            background-color: #f5f5f5;
            cursor: pointer;
            
            .discussion-portrait{
                float: left;
                height: 40px;
                width: 40px;

                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .discussion-name{
                float: left;
                width: calc(100% - 53px);
                height: 40px;
                margin-left: 13px;
            }
        }
    }
}
</style>