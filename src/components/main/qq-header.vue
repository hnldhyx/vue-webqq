<template>
    <div class="qq-header">
        <div class="qq-header-info clearfix">
            <div class="profile"></div>
            <div class="info">
                <div class="username">塞纳河畔</div>
                <div class="sign">终于结束啦！</div>
            </div>
        </div>
        <ul class="qq-header-icon clearfix">
            <li class="icon-item" v-for="(item,index) in iconList" :key="index" :title="item.cName">
                <img v-bind:src="item.imgUrl" @click="_linkTo(item.url)" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'qq-header',
    data(){
        return {
            iconList: []
        }
    },
    mounted(){
        this.$axios.get('http://localhost:8080/static/data/icon_list.json').then(rsp => {
            let res = rsp.data;
            if(res.meta.status == 200){
                let iconData = res.data;
                this.iconList = JSON.parse(JSON.stringify(iconData));
            }
        })
    },
    methods: {
        _linkTo(url){
            window.open(url);
        }
    }
}
</script>

<style scoped lang="scss">
.qq-header{
    .qq-header-info{
        height: 46px;
        .profile{
            float: left;
            height: 46px;
            width: 46px;
            border: 3px #fff solid;
            box-shadow: 0 0 4px rgba(0,0,0,0.4);
        }
        .info{
            float: left;
            margin-left: 10px;
            .username{
                color: #fff;
                font-size: 16px;
                font-weight: bold;
            }

            .sign{
                color: #fff;
                margin-top: 5px;
            }
        }
    }
    .qq-header-icon{
        margin: 7px 0;
        .icon-item{
            position: relative;
            float: left;
            margin-right: 10px;
            height: 15px;
            width: 15px;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 15px;
                height: 15px;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
        }
    }
}
</style>


