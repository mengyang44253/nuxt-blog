<template>
  <div class="icon-wrap">
    <div class="item home" @click="goToHome">
      <sygIcon name="#icon-shouye1" />
    </div>
    <div class="item github" @click="goToGithub">
      <sygIcon name="#icon-github1" />
    </div>
    <div class="item qq" @click="goToQq">
      <sygIcon name="#icon-QQ" />
    </div>
    <div class="item wechat" @click="goToWechat">
      <sygIcon name="#icon-weixin1" />
    </div>
    <div class="item weibo" @click="goToWeibo">
      <sygIcon name="#icon-weibo" />
    </div>
    <div class="item email" @click="goToEmail">
      <sygIcon name="#icon-youxiang1" />
    </div>
  </div>
</template>

<script>
import sygIcon from "@/components/common/svgIcon.vue";
export default {
  name: "myIcon",
  components: {
    sygIcon,
  },
  methods: {
    goToHome() {},
    goToGithub() {},
    goToQq() {},
    goToWechat() {},
    goToWeibo() {},
    goToEmail() {},
  },
};
</script>

<style scoped lang="less">
.icon-wrap {
  width: 320px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  .item {
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: @border-radius;
    background: @color-sub-background;
    .iconfont {
      font-size: 20px;
    }
  }
}
</style>
