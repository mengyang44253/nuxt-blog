<template>
  <div class="hot-article-item">
    <div class="article-name textOverFlow" @click="goToDetail">
      {{ item.title | textFormat }}
    </div>
    <div class="read-num">
      <svgIcon name="#icon-yueduliang" />
      {{ item.reading }}
    </div>
  </div>
</template>

<script>
import svgIcon from "@/components/common/svgIcon.vue";
export default {
  name: "hotArticle",
  components: {
    svgIcon,
  },
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  mounted() {},
  methods: {
    goToDetail() {
      console.log(this.item);
      this.$router.push({
        path: `/detail/${this.item.id}`,
      });
    },
  },
};
</script>

<style scoped lang="less">
.hot-article-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  .article-name {
    width: 260px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    cursor: pointer;
  }
  .read-num {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: #cccccc;
    align-items: center;
    svg{
      margin-right: 5px;
    }
  }
}
</style>
