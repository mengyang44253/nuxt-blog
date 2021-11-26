<template>
  <div class="item">
    <div class="article-name textOverFlow" @click="goToArticleDetail">
      评:{{ item.article_data.title }}
    </div>
    <div class="content">
      <div class="left tc" :class="[`color-${random}`]">
        {{ item.from_name.substr(0, 1) }}
      </div>
      <div class="right">
        <div class="top">
          <div class="comment-name">
            {{ item.from_name }}
          </div>
          <div class="comment-time">
            {{ item.create_time | secondFormat("LLL") }}
          </div>
        </div>
        <div class="comment-content">
          {{ item.content | textFormat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { randomNum } from "~/utils/validate";

export default {
  name: "comment",
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    random() {
      return randomNum(1, 8);
    },
  },
  mounted() {
  },
  methods: {
    goToArticleDetail() {
      this.$router.push({
        path:`/detail/${this.item.article_data.id}`
      });
    },
  },
};
</script>

<style scoped lang="less">
.item {
  width: 100%;
  padding: 20px 0 18px;
  .article-name {
    font-size: 16px;
    font-weight: bold;
    color: #3887ff;
    padding-bottom: 10px;
    cursor: pointer;
  }
  .content {
    display: flex;
    .left {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      line-height: 50px;
      color: #fff;
      text-transform: uppercase;
      font-size: 28px;
    }
    .right {
      width: 230px;
      padding-left: 10px;
      .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .comment-name {
          font-size: 16px;
          font-weight: 400;
          color: #3385ff;
        }
        .comment-time {
          font-size: 16px;
          font-weight: 400;
          color: #cccccc;
        }
      }
      .comment-content {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 10px;
      }
    }
  }
}
</style>
