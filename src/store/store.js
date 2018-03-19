import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        uid: 1, //登录时获取的
        userInfo: {}, //存储用户信息
        sessionsList: []
    },
    getters: {
        
    },
    mutations: {
        /* 更新用户信息state的mutation */
        updateUserInfo(state, userInfo){
            state.userInfo = JSON.parse(JSON.stringify(userInfo));
        },
        /* 更新会话列表的方法 */
        updateSessionsList(state, sessionsList){
            state.sessionsList = JSON.parse(JSON.stringify(sessionsList));
        }
    },
    actions: {
        /* 获取用户信息的接口 */
        getUserInfo({}, condition){
            axios.get('/static/data/user_info.json').then(rsp => {
                let res = rsp.data;
                if(res.meta.status == 200){
                    this.commit('updateUserInfo', res.data);
                }
            })
        },
        /* 获取会话列表的接口 */
        getSessionList({}, condition){
            axios.get('/static/data/session_list.json', condition).then(rsp => {
                let res = rsp.data;
                if(res.meta.status == 200){
                    this.commit('updateSessionsList', res.data);
                }
            })
        }
    }
});

export default store;