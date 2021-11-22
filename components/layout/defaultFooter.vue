<template>
  <div class="footer-wrap">
    <div class="container layout">
    <!--  友情链接-->
      <div class="link-wrap">
        <span>首页</span>
        <span>联系博主</span>
        <span>留言板</span>
        <span>友情链接</span>
      </div>
      <div class="copyright">
        Copyright © dylan
        <a href="https://www.beian.miit.gov.cn/" target="_blank">豫ICP备20022400号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "defaultFooter"
}
</script>

<style scoped lang="less">
.footer-wrap{
  width: 100%;
  padding: 30px 0;
  background-color: #3385FF;
  .container{
    .link-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      span{
        display: inline;
        padding: 0 10px;
        font-weight: 400;
        color: #FFFFFF;
        border-right: 1px solid #fff;
        font-size: 14px;
        &:last-child{
          border-right: none;
        }
      }
    }
    .copyright{
      display: flex;
      justify-content: center;
      font-size: 14px;
      font-weight: 400;
      color: #FFFFFF;
      a{
        font-size: 14px;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
  }
}
</style>
