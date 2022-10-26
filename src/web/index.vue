<template >
  <div class="test-title" @click="setTitle()">{{ title }}</div>
  <div class="test-title">{{ props.msg }}</div>
  <button
    @click="request"
  >
    发送请求
  </button>
</template>
<script>
import { ref, defineComponent } from "vue";
import requestApi from "@requestApi"
export default defineComponent({
  props: ["msg"],
  // ref可以接收props里的值
  setup(props) {
    const title = ref("hello");
    const setTitle = () => {
      title.value = "啊啊啊";
    };
    const request = ()=>{
      requestApi.get({
        url:"testApix",
        params:{
          param1:"参数1"
        }
      })
    }
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
