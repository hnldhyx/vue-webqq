<template>
    <div class="sessions">
        <ul class="sessions-wrap">
            <li class="sessions-item clearfix" v-for="(item,index) in sessionsList" :key="index">
                <div class="sessions-item-portrait">
                    <img src="" alt="">
                </div>
                <div class="sessions-item-info">
                    <div class="user-name">
                        <!-- 当昵称和备注都存在时 -->
                        <span class="remark-name" v-if="item.remarkName && item.remarkName!=''" :title="item.remarkName">{{item.remarkName}}</span>
                        <span class="nick-name" v-if="item.remarkName && item.remarkName!=''" :title="item.remarkName">({{item.nickName}})</span>
                        <!-- 当只有昵称存在时 -->
                        <span class="remark-name" v-if="!item.remarkName && item.remarkName==''" :title="item.remarkName">{{item.nickName}}</span>
                    </div>
                    <div class="msg-preview" :title="item.msgPreview">{{item.msgPreview}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'sessions',
        data(){
            return {
                
            }
        },
        computed: {
            sessionsList(){
                return this.$store.state.sessionsList;
            }
        },
        created(){
            let condition = {
                uid: this.$store.state.uid
            }
            this.$store.dispatch('getSessionList', condition);
        }
    }
</script>

<style scoped lang="scss">
.sessions{
    .sessions-wrap{
        .sessions-item{
            padding: 10px 5px 10px 10px;
            height: 60px;
            border-bottom: 1px #e3e3e3 solid;
            background: linear-gradient(#fff,#f1f1f1);
            cursor: pointer;

            &:last-child{
                border-bottom: none;
            }
        }
    }

    .sessions-item-portrait{
        float: left;
        height: 40px;
        width: 40px;
        background: red;
        img{
            height: 100%;
            width: 100%;
        }
    }

    .sessions-item-info{
        float: left;
        margin-left: 12px;

        .user-name{
            .remark-name{
                font-size: 16px;
                color: #333;
            }

            .nick-name{
                font-size: 12px;
                color: #aaa;
            }
        }

        .msg-preview{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #aaa;
            line-height: 20px;
            width: 200px;
        }
    }
}
</style>
