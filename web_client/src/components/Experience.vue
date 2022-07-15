<script setup>

import ASRT from './SubMenu/ASR/ASRT.vue'

</script>

<template>
    <div className="experience">
      <div className="experience_wrapper">
        <div className="experience_title">
          功能体验
        </div>
        <div className="experience_describe">
          体验前，请允许浏览器获取麦克风权限
        </div>
        <div className="experience_content" >
          <ASRT></ASRT>
        </div>
      </div>
    </div>
</template>


<style lang="less">
@import "./style.less";

</style>