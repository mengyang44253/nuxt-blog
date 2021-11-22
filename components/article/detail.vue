<template>
  <div class="detail">
    <div class="title">
      <div class="left">
        <div class="tag-icon">
          {{ articleDetail.label_data.filter(item => item.type === 1)[0].name }}
        </div>
        <div class="article-title textOverFlow" :title="articleDetail.title" @click="goToDetail">
          {{ articleDetail.title|textFormat }}
        </div>
      </div>
      <div class="right">
        {{ articleDetail.create_time|secondFormat("LLLL") }}
      </div>
    </div>
    <div class="content my-multi-ellipsis--l3">
      {{ articleDetail.content|fullTextFormat(200) }}
    </div>
    <div class="original">
      <div class="left" @click="goToDetail">
        阅读原文
      </div>
      <div class="right">
        <span>
          1000
        </span>
        <span>
          100
        </span>
        <span>
          100
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  props:{
    articleDetail:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  dara(){
    return {

    }
  },
  watch:{
    articleDetail(nv){
      console.log(nv)
    }
  },
  mounted(){
    console.log(this.articleDetail)
  },
  methods:{
    goToDetail(){

    }
  }
}
</script>

<style scoped lang="less">
.detail{
  width:100%;
  padding: 20px 40px;
  background:#FFFFFF;
  box-sizing: 0 0 6px 0 #E0E0E0;
  border-radius: 6px;
  margin-bottom: 10px;
  .title{
    display: flex;
    justify-content: space-between;
    .left{
      flex: 1;
      display: flex;
      .tag-icon{
        font-size: 14px;
        height:22px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #3385FF;
        text-align: center;
        line-height: 22px;
        padding: 0 5px;
        position: relative;
        &::after{
          content: "";
          position: absolute;
          right: -15px;
          top: 0;
          border-top: 11px solid transparent;
          border-left: 15px solid #3385FF;
          border-bottom: 11px solid transparent;
        }
      }
      .article-title{
        max-width: 550px;
        margin-left: 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        cursor: pointer;
      }
    }
    .right{
      width: 210px;
      font-size: 14px;
      font-weight: 400;
      color: #CCCCCC;
      text-align: right;
    }
  }
}
.content{
  width: 100%;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  height: 104px;
}
.original{
  display: flex;
  justify-content: space-between;
  .left{
    font-size: 14px;
    font-weight: 400;
    color: #3385FF;
  }
  .right{
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
