<template>
  <div class="comment-wrap">
    <div class="notComment" v-if="status ===2">评论已关闭</div>
    <div class="show">
      <div class="send">
        <h3 class="comment-title">发表评论</h3>
        <p class="comment-form-tips">昵称、邮箱为必填项，电子邮件地址不会被公开</p>
        <commentForm :articleId="articleId"/>
      </div>
      <commentList :list="list"/>
      <div class="comment-footer">
        我是有底线的
      </div>
    </div>
  </div>
</template>

<script>
import commentForm from "~/components/comment/commentForm";
import commentList from "~/components/comment/commentList";

export default {
  name: "comments",
  components: {
    commentForm,
    commentList
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    total: {
      type: Number,
      default: function () {
        return null
      }
    },
    status: {
      type: Number,
      default: function () {
        return null
      }
    },
    articleId: {
      type: String,
      default: null
    }
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {}
}

</script>

<style scoped lang="less">
.comment-wrap{
  .notComment{

  }
  .show{
    .send{
      background: #f8f8f9;
      padding: 16px;
      .comment-title{
        font-size: 14px;
        margin-bottom: 2px;
      }
      .comment-form-tips{
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
