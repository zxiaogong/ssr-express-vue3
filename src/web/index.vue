<template>
  <div class="test-title" @click="setTitle()">{{ title }}</div>
  <div class="test-title">{{ props.msg }}</div>
  <el-button @click="request" type="primary"> 发送请求 </el-button>
</template>
<script>
import { ref, defineComponent } from "vue";
import { ElMessage } from "element-plus";
import requestApi from "@apiCall/requestApi";
export default defineComponent({
  props: ["msg"],
  // ref可以接收props里的值
  setup(props) {
    const title = ref("hello");
    const setTitle = () => {
      title.value = "啊啊啊";
    };
    const request = async () => {
      const testApiData = await requestApi
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
      console.log(testApiData);
    };
    return {
      title,
      setTitle,
      props,
      request,
    };
  },
});
</script>

<style>
.test-title {
  color: #f00;
}
</style>
