<template>
    <div class="setting">
        <div class="setting-personal-info clearfix">
            <div class="personal-info-portrait">
                <img v-lazy="userInfo.profile && userInfo.profile.imgUrl">
            </div>
            <div class="personal-info-detail">
                <div class="nick-name">{{userInfo.nickName}}</div>
                <div class="qq-num">{{userInfo.qqNum}}</div>
            </div>
            <div class="personal-info-status"></div>
        </div>
        <div class="setting-sign clearfix">
            <div class="sign-title">个性签名：</div>
            <div class="sign-content" title="{userInfo.sign">{{userInfo.sign}}</div>
        </div>
        <div class="message-setting">消息相关设置</div>
        <div class="about" @click="_toggleShowAbout()">关于QQ</div>
        <div class="about-info" v-show="isShowAbout">
            <div class="about-version about-item">
                <span class="current-version">当前版本</span>
                <em>V1.0</em>
            </div>
            <div class="about-server about-item">服务条款</div>
            <div class="about-help about-item">帮助与反馈</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting',
    data(){
        return {
            isShowAbout: false
        }
    },
    computed: {
         userInfo(){
            return this.$store.state.userInfo;
        }
    },
    methods: {
        _toggleShowAbout(){
            this.isShowAbout = !this.isShowAbout;
        }
    }
}
</script>

<style scoped lang="scss">
.setting{
    padding: 10px;

    .setting-personal-info{
        padding: 18px 20px;
        height: 80px;
        border: 1px #afc8e2 solid;
        border-radius: 5px;

        .personal-info-portrait{
            float: left;
            height: 40px;
            width: 40px;
            background: red;

            img{
                height: 100%;
                width: 100%;
            }
        }

        .personal-info-detail{
            float: left;
            height: 40px;
            margin-left: 20px;

            .nick-name{
                font-size: 18px;
                color: #000;
            }

            .qq-num{
                font-size: 12px;
                color: #666;
            }
        }

        .personal-info-status{
            float: left;
            height: 40px;
        }
    }

    .setting-sign{
        padding: 14px 10px;
        margin-top: 20px;
        border: 1px #afc8e2 solid;
        border-radius: 5px;
        .sign-title{
            float: left;
            width: 80px;
            color: #666;
        }
        .sign-content{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
            width: 150px;
        }
    }

    .message-setting{
        position: relative;
        padding: 10px;
        margin-top: 20px;
        border: 1px #afc8e2 solid;
        border-radius: 5px;
        cursor: pointer;
    }

    .about{
        padding: 10px;
        margin-top: 20px;
        border: 1px #afc8e2 solid;
        border-radius: 5px;
        cursor: pointer;
    }

    .about-info{
        margin-top: 20px;
        border: 1px #afc8e2 solid;
        border-radius: 5px;

        .about-item{
            padding: 10px;
            border-bottom: 1px #afc8e2 solid;
            &:last-child{
                border-bottom: none;
            }
        }

        .current-version{
            color: #666;
            margin-right: 15px;
        }
    }
}
</style>
