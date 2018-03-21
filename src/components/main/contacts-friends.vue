<template>
    <div class="contacts-friends">
        <!-- 分组 -->
        <ul class="contacts-friends-wrap">
            <!-- 分组项 -->
            <li class="contacts-friends-item" v-for="(group,index) in contactsList && contactsList.group" :key="index" @click="_toggleItem($event, group)">
                <div class="item-info clearfix">
                    <i class="item-icon" :class="[group.isOpen ? 'icon-open' : 'icon-close']"></i>
                    <div class="item-name">{{group.name}}</div>
                    <div class="item-amount">{{group.online}}/{{group.total}}</div>
                </div>
                <!-- 每个分组内部的好友 -->
                <ul class="item-detail" v-show="group.isOpen">
                    <li class="detail-item clearfix" 
                        v-for="(friends,index) in contactsList && contactsList.group && group.friendsList" 
                        :key="index"
                    >
                        <div class="detail-item-portrait">
                            <img v-lazy="friends.portrait && friends.portrait.imgUrl"/>
                        </div>
                        <div class="detail-item-content">
                            <div class="detail-content-name">{{friends.remarkName}}</div>
                            <div class="detail-content-info">
                                <span class="detail-content-status">[{{map.lineStatus[friends.status]}}]</span>
                                <span class="detail-content-sign">{{friends.sign}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'contactsFriends',
    data(){
        return {
            map: {
                lineStatus: {
                    'online': '在线',
                    'outline': '离线',
                    'busy': '忙碌',
                    'leave': '离开'
                }
            }
        }
    },
    computed: {
        contactsList(){
            return this.$store.state.contactsList;
        }
    },
    watch: {
        contactsList(){
            
        }
    },
    methods: {
        _toggleItem(e, item){
            let eventTrigger = ['contacts-friends-item', 'item-info', 'item-icon', 'item-name', 'item-amount'];
            if(eventTrigger.indexOf(e.target.className.split(' ')[0]) == -1) return;
            if(item.isOpen){
                item.isOpen = !item.isOpen;
            }else{
                this.$set(item, 'isOpen', true);
            }
        }
    }
}
</script>

<style scoped lang="scss">
.contacts-friends{
    height: 734px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #808080;
    .contacts-friends-wrap{
        width: 280px;
        overflow: hidden;
        .contacts-friends-item{
            cursor: pointer;
            background-color: #fff;
            &:last-child{
                .item-info{
                    border-bottom: none;
                }
            }
        }
        .item-info{
            padding: 0 28px 0 15px;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px #ccc solid;
            .item-icon{
                float: left;
                color: #b2b2b2;
                font-size: 14px;
                font-weight: bold;

                &.icon-close:after{
                    content: ">";
                }

                &.icon-open:after{
                    content: "∨";
                }
            }

            .item-name{
                float: left;
                margin-left: 6px;
            }

            .item-amount{
                float: right;
                color: #808080;
                font-size: 12px;
            }
        }

        .item-detail{
            .detail-item{
                padding: 11px 28px 0 15px;
                height: 62px;
                border-bottom: 1px solid #e3e3e3;
                background-color: #f5f5f5;

                .detail-item-portrait{
                    float: left;
                    height: 40px;
                    width: 40px;

                    img{
                        height: 100%;
                        width: 100%;
                    }
                }

                .detail-item-content{
                    float: left;
                    width: calc(100% - 53px);
                    margin-left: 13px;

                    .detail-content-name{
                        color: #000;
                    }

                    .detail-content-info{
                        overflow: hidden;
                        margin-top: 3px;
                        width: 100%;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        .detail-content-status,.detail-content-sign{
                            font-size: 12px;
                            color: #aaa;
                        }
                    }

                    
                }
            }
        }
    }
}
</style>
