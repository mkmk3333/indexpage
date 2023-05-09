<template>
  <div>
    <p>hello</p>
    <p>{{message}}</p>
    <button class="" @click='getinfo()'>get</button>
    <p></p>
    <button @click='postinfo()'>post</button>
    <p></p>
    <input type="text" v-model='data'/>
    <p>{{data}}</p>
    <button @click='toChat()'>Chat</button>
  </div>
</template>

<script>

import {getCurrentInstance,ref} from 'vue'
import { useRouter } from 'vue-router'
export default {
  name:'HelloWorld',
  setup(){
    const {proxy}=getCurrentInstance();
    const message=ref('none');
    const myrouter=useRouter();

    const url_get='http://10.122.241.44:10380/usr/Carl'
    const url_post='http://10.122.241.44:10380/usr'

    
    const data=ref('')
    // const from_json={
    //   "name":"Carl"
    // }

    function getinfo(){
      proxy.$axios.get(url_get).then(res=>{
        message.value=res.data;
      }).catch(err=>{
        message.value=err.message;
      })
    }

    function postinfo(){
      const form_input={
        "name":data.value.toString(),
      }
      console.log(data.value.toString())
      proxy.$axios.post(url_post,form_input).then(res=>{
        message.value=res.data;
      }).catch(err=>{
        message.value=err.message;
      })
    }

    function toChat(){
      myrouter.push('/chat')
    }
    return{
      getinfo,
      postinfo,
      toChat,
      message,
      data
    }
    
  }
}
</script>

<style>

</style>
