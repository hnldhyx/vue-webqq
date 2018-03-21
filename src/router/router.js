import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contacts from '../components/main/contacts';
import sessions from '../components/main/sessions';
import finding from '../components/main/finding';
import setting from '../components/main/setting';

const routes = [{
    path: '/contacts',
    name: 'contacts',
    component: contacts
},{
    path: '/sessions',
    name: 'sessions',
    component: sessions
},{
    path: '/finding',
    name: 'finding',
    component: finding
},{
    path: '/setting',
    name: 'setting',
    component: setting
},{
    path: '/',
    redirect: '/contacts'
}]

const router = new Router({
    routes
});

export default router;