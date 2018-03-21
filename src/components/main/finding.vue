<template>
    <div class="finding">
        <ul class="finding-wrap clearfix">
            <li class="finding-item" v-for="(finding,index) in findingNav" :key="index" @click="_linkTo(finding.url)">
                <div class="finding-item-img">
                    <img v-lazy="finding.imgUrl">
                </div>
                <div class="finding-item-text">{{finding.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sessions',
    data(){
        return {
            findingNav: [{
                "imgUrl": '/static/img/plugin_icon_qzone.jpg',
                "name": "QQ空间",
                "url": "http://qz.qq.com/"
            },{
                "imgUrl": '/static/img/plugin_icon_qmail.jpg',
                "name": "QQ邮箱",
                "url": "http://mail.qq.com"
            },{
                "imgUrl": '/static/img/plugin_icon_qq_portal.jpg',
                "name": "腾讯网",
                "url": "http://www.qq.com"
            }]
        }
    },
    methods: {
        _linkTo(url){
            window.open(url);
        }
    }
}
</script>

<style scoped lang="scss">
.finding-wrap{
    .finding-item{
        float: left;
        border: 1px #c1c7d2 solid;
        width: 33.3%;
        height: 93px;
        background-color: #e6e7ea;
        cursor: pointer;

        img{
            margin: 8px 20px 0;
            width: 54px;
            height: 54px;
        }
    }

    .finding-item-text{
        color: #000;
        font-size: 12px;
        text-align: center;
        line-height: 25px;
    }
}
</style>
