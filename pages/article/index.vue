<template>
  <div class="type">
    <div class="title">
      当前分类:{{title}}
    </div>
    <div class="article-list-wrap" v-loading="loading">
      <articleDetail v-for="item in articleList" :key="item.id" :articleDetail="item"/>
    </div>
    <div class="pagination-wrap">
      <el-pagination>
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
        :current-page.sync="currentPage"
      </el-pagination>
    </div>
  </div>
</template>

<script>
import articleDetail from '~/components/article/detail'

export default {
  name: "typeArticle",
  async asyncData({store}) {
    let articleList = []
    let params = {}

  },
  components: {
    articleDetail
  },
  data() {
    return {
      title:null,
      loading: false
    }
  },
  mounted() {

  },
  methods: {},
}
</script>

<style>

</style>
