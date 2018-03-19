<template>
    <div class="qq-list">
        <div class="list-wrap">
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
                tab: 'xxx'
            },{
                name: '设置',
                icon: 'xxx',
                tab: 'xxx'
            }],
            navSelected: 1,
            navTarget: 'contacts'
        }
    },
    methods: {
        _chooseNav(item, index){
            
        }
    }
}
</script>

<style scoped lang="scss">
.qq-list{
    height: 100%;
    margin-top: -68px;
    padding-top: 68px;
    border-radius: 3px;
}

.list-wrap{
    height: calc(100% - 50px);
    background-color: #fff;
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
            .nav-text{
                color: #fff;
            }
        }
    }
}
</style>


