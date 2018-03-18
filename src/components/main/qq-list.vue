<template>
    <div class="qq-list">
        <div class="list-wrap"></div>
        <ul class="qq-list-footer clearfix">
            <li class="qq-list-nav" v-for="(item, index) in listNav" :key="index" :class="{active: navSelected == index}" @click="_chooseNav(item, index)">
                <div class="nav-icon"></div>
                <div class="nav-text">{{item.name}}</div>
            </li>
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
                tab: 'xxx'
            },{
                name: '联系人',
                icon: 'xxx',
                tab: 'xxx'
            },{
                name: '发现',
                icon: 'xxx',
                tab: 'xxx'
            },{
                name: '设置',
                icon: 'xxx',
                tab: 'xxx'
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
        &.active{
            background-color: #333;
            .nav-text{
                color: #fff;
            }
        }
    }
}
</style>


