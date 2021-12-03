<template>
  <div class="type">
    <div class="title">当前分类:{{ title }}</div>
    <!-- <div class="article-list-wrap" v-loading="loading">
      <articleDetail
        v-for="item in articleList"
        :key="item.id"
        :articleDetail="item"
      />
    </div>
    <div class="pagination-wrap">
      <el-pagination>
        background layout="prev, pager, next" :total="total" :page-size="10"
        :current-page.sync="currentPage"
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import articleDetail from "~/components/article/detail";
import { mapState } from "vuex";
export default {
  name: "typeArticle",
  async asyncData({ store, query }) {
    let articleList = [];
    let currentPage=1
    let total=0
    let status=3
    let label_id=query.id
    let params={}
    params.pagination=1
    params.start=currentPage-1
    params.limit=10
    params.status=status




  },
  components: {
    articleDetail,
  },
  computed: {
    ...mapState(["sideTag", "allTag", "menu"]),
    allArr() {
      let arr = [];
      if (this.allTag.length) {
        arr = JSON.parse(JSON.stringify(this.allTag)).concat(
          JSON.parse(JSON.stringify(this.menu))
        );
      } else {
        arr = JSON.parse(JSON.stringify(this.sideTag)).concat(
          JSON.parse(JSON.stringify(this.menu))
        );
      }
    },
  },
  data() {
    return {
      title: null,
      loading: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
