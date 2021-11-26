<template>
  <div class="container">
    <div class="article-list-wrap" v-loading="loading">
      <articleDetail
        v-for="item in articleList"
        :key="item.id"
        :articleDetail="item"
      />
    </div>
    <div class="pagination-wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
        :current-page.sync="currentPage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import articleDetail from "~/components/article/detail";
export default {
  name: "search",
  async asyncData({ store, params }) {

    let articleList = [];
    let currentPage = 1;
    let total = 0;
    let status = 3;
    let query = {};
    query.pagination = 0;
    query.start = currentPage - 1;
    query.limit = 10;
    query.status = status;
    if(params.title){
      query.name=params.title
    }
    console.log(query)
    let res = await store.dispatch("Article/getArticleList", query);
    console.log(res)
    if (res.success) {
      articleList = res.data;
      total = res.count;
    }
    return {
      articleList,
      total,
      currentPage,
      status,
    };
  },
  components: {
    articleDetail,
  },
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    currentPage() {
      this.getList();
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
