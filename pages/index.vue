<template>
  <div class="container">
    <div class="article-list-wrap" v-loading="loading">
      <ArticleDetail v-for="item in articleList" :key="item.id" :articleDetail="item"/>
    </div>
    <div class="pagination-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
        :current-page.sync="currentPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import articleDetail from '~/components/article/detail'
export default {
  name: "index",
  async asyncData({store,query}){
    let articleList = [];
    let currentPage = 1;
    let total = 0;
    let status=3
    let params = {};
    params.pagination = 0;
    params.start = currentPage-1;
    params.limit = 10;
    params.status=status
    let res = await store.dispatch("Article/getArticleList",params);
    if (res.success) {
      articleList = res.data;
      total = res.count;
    }
    return {
      articleList,
      total,
      currentPage,
      status
    }
  },
  components:{
    articleDetail
  },
  data(){
    return {
      loading:false
    }
  },
  watch:{
    currentPage(){
      this.getList()
    }
  },
  mounted(){
  },
  methods:{
    async getList(){

    }
  }
}
</script>

<style scoped>

</style>
