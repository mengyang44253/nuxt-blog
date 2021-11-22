<template>
  <div class="wrap">
    <!--文章内容-->
    <div class="article section">

    </div>
    <!--  本文地址-->
    <div class="section copyright">

    </div>
    <!--  点赞-->
    <div class="operation section">

    </div>
    <!--  作者信息-->
    <div class="author section">

    </div>
    <!--  评论列表-->
    <div class="section comment">

    </div>
  </div>
</template>

<script>
import commentForm from "~/components/comment/commentForm";
import commentItem from "~/components/comment/commentItem";
import reward from '@/components/article/reward';

export default {
  name: "detail-id",
  components: {
    commentForm,
    commentItem,
    reward
  },
  async asyncData({store, params}) {
    let articleId = params.id;
    let query = {};
    let start = 0;
    let limit = 10;
    let commentTotal = 0;
    let articleDetail = {};
    let commentList = [];
    query.id = articleId;
    let res = await store.dispatch("Article/getArticleDetails", query);
    if (res.success) {
      articleDetail = res.data;
    }
    let commentRes = await store.dispatch("Comment/commentListById", {
      id: articleId,
      nopage: 0,
      start,
      limit
    });
    let readRes = await store.dispatch("Article/updateReadByArticleId", {
      id: articleId
    });
    if (commentRes.success) {
      commentList = commentRes.data;
      commentTotal = commentRes.total;
    }
    return {
      articleDetail,
      articleId,
      start,
      limit,
      commentList,
      commentTotal
    };
  },
  data() {
    return {
      //当前点击的某一项
      currentItem: null,
      commentDialog: false,
      commentListLoading: false,
      rewardMyDialog: false,
    }
  },
  computed: {
    fullPath() {
      return `www.baidu.com/${this.articleId}`;
    }
  },
  mounted() {
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    process.browser && document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  },
  methods: {
    async getList() {
      this.commentListLoading = true;
      this.start = 0;
      let params = {};
      params.id = this.articleId;
      params.nopage = 0;
      params.start = this.start;
      params.limit = this.limit;
      let res = await this.$store.dispatch("Comment/commentListById", params);
      if (res.success) {
        this.commentListLoading = false;
        this.commentList = res.data;
        this.commentTotal = res.total;
      }
    },
    replyComment(value) {
      this.commentDialog = true;
      this.currentItem = value;
    },
    //点赞某一篇文章
    async likeSomeArticle() {
      let params = {};
      params.id = this.articleId;
      let res = await this.$store.dispatch(
        "Article/setArticlePraiseById",
        params
      );
      if (res.success) {
        this.$message({
          message: "点赞成功",
          type: "success"
        });
      }
    },
    openRewardDialog() {
      this.rewardMyDialog = true
    }
  }
}
</script>

<style scoped lang="less">
.section {
  margin-top: @container-margin;
  padding: @container-padding;
  background: @color-white;
  border-radius: @border-radius;
}

.article {
  margin-top: 0;

  .title {
    padding: 10px 0;
    font-size: 25px;
  }

  .other-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e9eaed;
    color: #999 !important;
    font-size: 12px;
  }

  .content-details {
    padding: 20px 0;
  }
}

.operation {
  .opinion {
    .like-wrap {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      cursor: pointer;
      margin: 10px auto;
      background: rgb(243, 241, 241);

      .icon-dianzan {
        font-size: 30px;
        color: #b2bac2;
      }

      &:hover {
        .icon-dianzan {
          color: #8a93a0;
        }
      }
    }
  }

  .share {
  }

  .tag-wrap {
    font-size: 14px;

    .tag-name {
      font-size: 14px !important;
    }
  }
}

.author-introduct {
  display: flex;

  .avatar-wrap {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin-left: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .userinfo {
    flex: 1;
    margin-left: 10px;

    .header {
      margin-bottom: 20px;
    }

    .author-summary {
      font-size: 14px;
    }
  }
}

.comment {
  .comment-title {
    margin-bottom: 20px;
    padding: 10px 0;
    border-radius: 4px;
    background: #f0f2f7;
    font-size: 16px;
    text-align: center;
  }
}
</style>
