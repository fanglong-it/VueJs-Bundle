import {createRouter, createWebHistory} from 'vue-router'
import To from './to.vue'
import guide from './guide.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/src/router/',
            component: To,
            meta:{
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight",
            }
        },
        {
            path: '/src/router/guide',
            component: guide,
            mata: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft",
            }
        }
    ]
})

export default router