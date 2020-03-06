import Vue from 'vue';
import Router from 'vue-router';

import CUploader from './components/CUploader.vue'
import DropUploader from './pages/drop/DropUploader.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            component:CUploader,
        },
        {
            path:'/drop',
            component:DropUploader
        }
    ]
});