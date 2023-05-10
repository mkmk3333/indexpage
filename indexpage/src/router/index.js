import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import ChatPage from '@/components/ChatPage.vue'
import PicDisplay from '@/components/PicDisplay.vue'

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
        {
            path:'/pic',
            name:'Pic',
            components:{
                'Main':PicDisplay,
            }
        },
    ]
    
}
)
export default router;