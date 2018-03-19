<template>
    <div class="contacts">
        <ul class="contacts-nav clearfix">
            <li class="contacts-nav-item" 
                v-for="(navItem, index) in navTabs" 
                :key="index" 
                :class="{active: navItem.tab == contactsNav}"
                @click="_toggleNav(navItem, index)"
            >
                <div class="contacts-nav-text">{{navItem.name}}</div>
            </li>
        </ul>
        <keep-alive>
            <!-- <div class="contacts-content">{{contactsNav}}</div> -->
            <component :is="contactsNav"></component>
        </keep-alive>
    </div>
</template>

<script>
import friends from './contacts-friends';
import crowd from './contacts-crowd';
import discussion from './contacts-discussion';
export default {
    name: 'contacts',
    data(){
        return {
            navTabs: [{
                name: '好友',
                tab: 'friends'
            },{
                name: '群',
                tab: 'crowd'
            },{
                name: '讨论组',
                tab: 'discussion'
            }],
            contactsNav: 'friends'
        }
    },
    computed: {
        contactsData(){
            return this.$store.state.contactsList;
        }
    },
    beforeCreate(){
        if(!this.$store.state.contactsList){
            let condition = {
                uid: this.$store.state.uid
            }
            this.$store.dispatch('getContactsList', condition);
        }
    },
    components: {
        'friends': friends,
        'crowd': crowd,
        'discussion': discussion
    },
    methods: {
        _toggleNav(item, index){
            this.contactsNav = item.tab;
        }
    }
}
</script>

<style scoped lang="scss">
.contacts-nav{
    height: 38px;
    li.contacts-nav-item{
        float: left;
        height: 38px;
        width: 33.3%;
        cursor: pointer;
        border-bottom: 2px #ccc solid; 

        .contacts-nav-text{
            height: 20px;
            margin-top: 9px;
            line-height: 20px;
            border-right: 1px #ccc solid;
            text-align: center;
        }

        &:last-child{
            .contacts-nav-text{
                border: none;
            }
        }

        &.active{
            border-bottom: 2px solid#0aa7ff;
            .contacts-nav-text{
                color: #0aa7ff;
            }
        }
    }
}
</style>
