<template >
  <a-config-provider :theme="{
      algorithm: theme.defaultAlgorithm,
    }"
  >
    <a-layout style="min-height: 100vh">
        <a-layout-header style="background: #fff; padding: 0;"> </a-layout-header>
        <a-layout-header style="background: #fff; padding: 0;position: fixed;width: 100%;top: 0px;">
          <div class="page-head-box">
            <div class="page-logo-box flex f-j-c f-a-c" >
              <img src="/favicon.ico" class="page-logo-img"/>
            </div>
          </div>
        </a-layout-header>
      <router-view></router-view>
    </a-layout>
  </a-config-provider>
</template>
<script setup lang="ts">
import { theme } from 'ant-design-vue';
import { ref, defineProps } from "vue";
const props = defineProps({
  pageConfig: String
})
console.log(props.pageConfig)
</script> 
<style scoped lang="less">
@import url(./style.css);
.page-head-box{
  width: 100%;
  .page-logo-box{
    width: 100px;
    height: 60px;
    .page-logo-img{
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
  }
}

</style>