<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 offset-md-5">
        <p>hello</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 offset-md-5">
        <p>{{ message }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 offset-md-5">
        <button class="btn btn-light" @click="getinfo()">get</button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 offset-md-5">
        <button class="btn btn-light" @click="postinfo()">post</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <input class="form-control" type="text" v-model="data" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-5">
        <p>{{ data }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-5">
        <button class="btn btn-light" @click="toChat()">Chat</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 offset-md-5">
        <button class="btn btn-light" @click="toPic()">Pic</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HelloWorld",
  setup() {
    const { proxy } = getCurrentInstance();
    const message = ref("none");
    const myrouter = useRouter();

    const url_get = "http://10.122.241.44:10380/usr/Carl";
    const url_post = "http://10.122.241.44:10380/usr";

    const data = ref("");
    // const from_json={
    //   "name":"Carl"
    // }

    function getinfo() {
      proxy.$axios
        .get(url_get)
        .then((res) => {
          message.value = res.data;
        })
        .catch((err) => {
          message.value = err.message;
        });
    }

    function postinfo() {
      const form_input = {
        name: data.value.toString(),
      };
      console.log(data.value.toString());
      proxy.$axios
        .post(url_post, form_input)
        .then((res) => {
          message.value = res.data;
        })
        .catch((err) => {
          message.value = err.message;
        });
    }

    function toChat() {
      myrouter.push("/chat");
    }

    function toPic(){
      myrouter.push("/pic")
    }
    return {
      getinfo,
      postinfo,
      toChat,
      toPic,
      message,
      data,
    };
  },
};
</script>

<style scoped>
.row {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>


