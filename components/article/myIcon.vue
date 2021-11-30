<template>
  <div class="icon-wrap">
    <div class="item home" @click="goToHome">
      <svgIcon name="#icon-shouye1" />
    </div>
    <div class="item github" @click="goToGithub">
      <svgIcon name="#icon-github1" />
    </div>
    <div class="item qq" @click="goToQq">
      <svgIcon name="#icon-QQ" />
    </div>
    <div class="item wechat" @click="goToWechat">
      <svgIcon name="#icon-weixin1" />
    </div>
    <div class="item weibo" @click="goToWeibo">
      <svgIcon name="#icon-weibo" />
    </div>
    <div class="item email" @click="goToEmail">
      <a href="mailto:466879168@qq.com">
      <svgIcon name="#icon-youxiang1" />
      </a>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="400px">
      <el-image :src="current"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import svgIcon from "@/components/common/svgIcon.vue";
export default {
  name: "myIcon",
  components: {
    svgIcon,
  },
  data() {
    return {
      dialogVisible: false,
      current:null,
      qq:"https://react-ams.oss-cn-beijing.aliyuncs.com/blog/qqbuddy.jpg",
      weChat:"https://react-ams.oss-cn-beijing.aliyuncs.com/blog/wechat.jpg"
    };
  },
  methods: {
    goToHome() {
      this.$router.push({
        path: "/",
      });
    },
    goToGithub() {
      window.open("https://github.com/mengyang44253");
    },
    goToQq() {
      this.current=this.qq
      this.dialogVisible=true
    },
    goToWechat() {
      this.current=this.weChat
      this.dialogVisible=true
    },
    goToWeibo() {
      window.open("https://weibo.com/u/5511878287")
    },
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
