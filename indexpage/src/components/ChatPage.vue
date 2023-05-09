<template>
    <div class='container'>
        <div class='row'>
            <div class="col-lg-12 chat-box">
                
            </div>
        </div>
        <div class='row'>
            <div class="col-lg-10">
                <input type='text' v-model="input_text" class="form-control" placeholder="Please enter..."/>
            </div>
            <div class="col-lg-2">
                <button type="button" class="btn btn-success" @click='submit()'>Submit</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <button @click='toMain()' class="btn btn-light">Main</button>
            </div>
        </div>
        <!-- <div class="row">
            <p>{{input_text}}</p>
        </div> -->
    </div>

</template>

<script>
import { useRouter } from 'vue-router'
import { getCurrentInstance,ref } from 'vue'
export default {
    name:'ChatPage',
    setup(){
        const {proxy}=getCurrentInstance();
        const myrouter=useRouter()
        const url_chat='http://10.122.241.44:10380/chat'

        const input_text=ref('')

        function toMain(){
            myrouter.push('/main')
        }

        function submit(){
            if(!input_text.value){
                return;
            }
            console.log(input_text.value);
            input_text.value.toString()
            addElement(input_text.value,0)
            const form={
                "content":input_text.value,
            }
            proxy.$axios.post(url_chat,form).then(
                res=>{
                    if(res.data["result_content"]==''){
                        addElement("Network Error",1)
                    }
                    addElement(res.data["result_content"],1)
                }
            ).catch(
                err=>{
                    console.log(err.message)
                }
            )
            input_text.value=''
            return;
        }

        function addElement(string,sender){
            const chatMsgEl = document.createElement('div');
            chatMsgEl.classList.add('chat-box-item');
            if(sender==0){//用户
            chatMsgEl.innerHTML = `
                <div class="col-lg-12 col-lg-offset-${6}" >
                    <p>me:${string}</p>
                </div>
            `;
            }
            else{//后端
                chatMsgEl.innerHTML = `
                <div class="col-lg-12 col-lg-offset-${1}" >
                    <p>bot:${string}</p>
                </div>
                `;
            }
            const chatMsgListEl = document.querySelector('.chat-box');
            chatMsgListEl.appendChild(chatMsgEl);
            return;
        }

        return {
            toMain,
            submit,
            input_text,
        }
    }
}
</script>

<style>
.row{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>