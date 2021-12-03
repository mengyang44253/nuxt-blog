<template>
  <div class="tag-wrap layout">
    <div class="title">所有标签</div>
    <div class="item-wrap">
      <div
        class="item"
        v-for="item in tagList"
        :key="item.id"
        :class="`color-${random()}`"
        @click="goToTagDetail(item)"
      >
        {{ item.name }}({{ item.group_count }})
      </div>
    </div>
  </div>
</template>

<script>
import { randomNum } from "@/utils/validate";

export default {
  name: "tag",
  layout: "notSider",
  async asyncData({ store }) {
    let tagList = [];
    let params = {};
    let res = await store.dispatch("Tag/getTagList", {});
    if (res.success) {
      tagList = res.data;
    }
    store.commit("updateAllTag", res.data);
    return {
      tagList,
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    random() {
      return randomNum(1, 8);
    },
    goToTagDetail(item) {
      console.log(item);
      this.$router.push({
        path: `/article/${item.id}`,
      });
    },
  },
};
</script>

<style scoped lang="less">
.tag-wrap {
  margin: 20px 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  .title {
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
  }
  .item-wrap {
    display: flex;
    .item {
      margin: 0 10px 10px 0;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
}
</style>
