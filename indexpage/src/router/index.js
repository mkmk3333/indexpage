import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import ChatPage from '@/components/ChatPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {//默认路由
            path:'/',
            redirect:'/main'
        },
        {//主页面
            path:'/main',
            name:'Main',
            components: {
                'Main':HelloWorld,
            }
        },
        {
            path:'/chat',
            name:'Chat',
            components:{
                'Main':ChatPage,
            }
        },
    ]
}
)
export default router;