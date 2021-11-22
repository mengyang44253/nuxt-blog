<template>
  <div class="reward">
    <div class="img">
      <el-iamge style="width: 80px;height: 80px;border-radius: 50%" src="myAvatar" fit="cover" />
    </div>
    <p>感谢您的支持~~</p>
    <div class="code tc">
      <el-iamge style="width: 100%;height: 100%" :src="radio === '1'? wechatImg:aliImg" fit="cover" />
    </div>
    <div class="radio tc">
      <el-radio class="radio-wrap" v-model="radio" label="1">
        <el-image style="width: 80px;height: 30px;" src="http://nuxt-blog.cn-sh2.ufileos.com/blog/wechatpay.svg" fit="cover" />
      </el-radio>
      <el-radio class="radio-wrap" v-model="radio" label="2">
        <el-image style="width: 80px; height: 30px" src="http://nuxt-blog.cn-sh2.ufileos.com/blog/alipay.svg" fit="cover" />
      </el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "reward",
  data(){
    return {
      radio:"1",
      wechatImg:`http://nuxt-blog.cn-sh2.ufileos.com/blog/20200725021307%20(1).png`,
      aliImg:`http://nuxt-blog.cn-sh2.ufileos.com/blog/20200725021307.png`
    }
  }
}
</script>

<style scoped lang="less">
  .reward{
    width: 100%;
    .img{
      text-align: center;
    }
    .text{
      font-size: 18px;
      padding: 10px;
    }
    .code{
      margin-bottom: 20px;
    }
    .radio{
      display: flex;
      justify-content: center;
      align-items: center;
      .radio-wrap{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
