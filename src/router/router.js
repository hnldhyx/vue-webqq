import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contacts from '../components/main/contacts';
import sessions from '../components/main/sessions';

const routes = [{
    path: '/contacts',
    name: 'contacts',
    component: contacts
},{
    path: '/sessions',
    name: 'sessions',
    component: sessions
},{
    path: '/',
    redirect: '/contacts'
}]

const router = new Router({
    routes
});

export default router;