<template>
  <div class="test-title" @click="setTitle()">{{ title }}</div>
  <div class="test-title">{{ props.msg }}</div>
  <el-button @click="request" type="primary"> 发送GET请求 </el-button>
  <el-button @click="requestPost" type="primary"> 发送POST请求 </el-button>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { ElMessage } from "element-plus";
import requestApi from "@apiCall/requestApi";
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
        ElMessage.success(res.msg);
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
        ElMessage.success(res.msg);
      }
    });
}

</script>

<style>
.test-title {
  color: #f00;
}
</style>
