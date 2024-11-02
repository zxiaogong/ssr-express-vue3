<template>
  <div class="test-title" @click="setTitle()">{{ title }}</div>
  <div class="test-title">{{ props.msg }}</div>
  <Button @click="request" type="primary">发送GET请求</Button>
  <Button @click="requestPost">发送POST请求</Button>
  <nut-button type="primary">Primary</nut-button>
  <nut-button type="info">Info</nut-button>
  <nut-button type="default">Default</nut-button>
  <nut-button type="danger">Danger</nut-button>
  <nut-button type="warning">Warning</nut-button>
  <nut-button type="success">Success</nut-button>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { Button, message } from 'ant-design-vue';
import requestApi from "@apiCall/requestApi";
// import { Button as Nbutton } from "@nutui/nutui";
const props = defineProps({
  msg: String
})
const title = ref("hello");
const setTitle = () => { 
  title.value = "啊啊啊";
};
const request = async () => {
  requestApi
    .get({
      url: "testApix",
      params: {
        param1: "参数1",
      },
    })
    .then((res) => {
      if (res.msg) {
        message.success(res.msg);
      }
    });
};
const requestPost = ()=>{
  requestApi
    .post({
      url: "testApiPost",
      data:{
        postData:"post参数"
      }
    })
    .then((res) => {
      if (res.msg) {
        message.success(res.msg);
      }
    });
}

</script>

<style>
.test-title {
  color: #f00;
}
</style>
