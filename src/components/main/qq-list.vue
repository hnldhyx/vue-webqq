<template>
    <div class="qq-list">
        <div class="list-wrap">
            <div class="contacts-header">
                {{listNav[navSelected].name}}
                <div class="search"></div>
            </div>
            <router-view></router-view>
        </div>
        <ul class="qq-list-footer clearfix">
            <router-link 
                tag="li" 
                :to="item.tab" 
                class="qq-list-nav" 
                v-for="(item, index) in listNav" 
                :key="index" 
                @click.native="_chooseNav(item, index)"
            >
                <div class="nav-icon"></div>
                <div class="nav-text">{{item.name}}</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'qq-list',
    data(){
        return{
            listNav: [{
                name: '会话',
                icon: 'xxx',
                tab: 'sessions'
            },{
                name: '联系人',
                icon: 'xxx',
                tab: 'contacts'
            },{
                name: '发现',
                icon: 'xxx',
                tab: 'finding'
            },{
                name: '设置',
                icon: 'xxx',
                tab: 'setting'
            }],
            navSelected: 1
        }
    },
    methods: {
        _chooseNav(item, index){
            this.navSelected = index;
        }
    }
}
</script>

<style scoped lang="scss">
.qq-list{
    height: 100%;
    margin-top: -68px;
    padding-top: 68px;
}

.list-wrap{
    height: calc(100% - 50px);
    background-color: #fff;
    border-radius: 5px;

    .contacts-header{
        height: 45px;
        line-height: 45px;
        background: linear-gradient(#545454, #222);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-align: center;
        color: #fff;
        font-size: 18px;

        .search{
            
        }
    }
}

.qq-list-footer{
    height: 50px;
    .qq-list-nav{
        float: left;
        height: 50px;
        width: 70px;
        background-color: #505050;
        
        .nav-icon{
            height: 30px;
            cursor: pointer;
        }
        .nav-text{
            height: 20px;
            text-align: center;
            color: #ccc;
            font-size: 12px;
            cursor: pointer;
        }
        &.router-link-active{
            background-color: #333;
            text-shadow: 0 1px 0 #000;
            box-shadow: inset 0 0 10px #111;
            .nav-text{
                color: #fff;
            }
        }
    }
}
</style>


