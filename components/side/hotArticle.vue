<template>
  <div class="hot-article-item">
    <div class="article-name textOverFlow">
      {{item.title|textFormat}}
    </div>
    <div class="read-num">
      {{item.reading}}
    </div>
  </div>
</template>

<script>
export default {
  name: "hotArticle",
  props:{
    item:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  mounted(){
    console.log(this.item)
  }
}
</script>

<style scoped lang="less">
.hot-article-item{
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  .article-name{
    width: 260px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .read-num{
    font-size: 14px;
    font-weight: 400;
    color: #CCCCCC;
  }
}
</style>
