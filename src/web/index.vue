<template>
  <div class="test-title" @click="setTitle()">{{ title }}</div>
  <div class="test-title">{{ props.msg }}</div>
  <div v-for="(item, index) in props.user_info" :key="index" class="test-title">
    {{ item.user_id }}
    {{ item.user_name }}
    {{ item.user_create_date }}
    {{ item.user_info }}
  </div>
  <el-button @click="request" type="primary"> 发送GET请求 </el-button>
  <el-button @click="requestPost" type="primary"> 添加用户 </el-button>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { ElMessage } from "element-plus";
import requestApi from "@apiCall/requestApi";
const props = defineProps({
  msg: {
    default: "",
    type: String,
  },
  user_info: {
    default: [],
    type: Array,
  },
});
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
const requestPost = () => {
  requestApi
    .post({
      url: "testApiPost",
      data: {
        postData: "post参数",
      },
    })
    .then((res) => {
      if (res.msg) {
        ElMessage.success(res.msg);
      }
    });
};
</script>

<style>
.test-title {
  color: #f00;
}
</style>
