<template>
  <div class="detail">
    <!--文章内容-->
    <div class="article section">
      <h2 class="title tc">
        {{ articleDetail[1].title }}
      </h2>
      <div class="other-info">
        <div class="mr10">
          <i class="el-icon-user" style="margin-right: 5px"></i>
          <span class="author"> Dylan </span>
        </div>
        <div class="mr10">
          <svgIcon name="#icon-shijian"/>
          <span class="time">
            {{ articleDetail[1].create_time | secondFormat }}
          </span>
        </div>
        <div class="mr10">
          <svgIcon name="#icon-yueduliang"/>
          <span>
            {{ articleDetail[1].reading }}
          </span>
        </div>
        <div class="mr10">
          <svgIcon name="#icon-pingjia"/>
          <span>
            {{ commentTotal }}
          </span>
        </div>
      </div>
      <div class="content-details" v-html="articleDetail[1].content"></div>
    </div>
    <!--  本文地址-->
    <div class="section copyright">
      <p class="mb10">
        <strong>版权声明:</strong>
        本站文章除特别声明外，均为本站原创。转载请注明出处，谢谢。
      </p>
      <p>
        <strong>本文地址:</strong>
        <a :href="fullPath" target="_blank">{{ fullPath }}</a>
      </p>
    </div>
    <!--  点赞-->
    <div class="operation section">
      <div class="opinion">
        <div class="like-wrap" title="点赞">
          <div>{{ articleDetail[1].praise }}人点赞</div>
          <div>
            <svgIcon name="#icon-dianzan1" @click="likeSomeArticle"/>
          </div>
        </div>
      </div>
      <!-- 标签 -->
      <div class="tag-wrap mb10 tc">
        <i class="iconfont icon-tag"></i>
        <template
          v-for="item in articleDetail[1].label_data.filter(
            (item) => item.label_type === 1
          )"
        >
          <span class="tag-name" :key="item.label_id">
            {{ item.label_name }}
          </span>
        </template>
      </div>
      <div class="relative-link">
        <div class="prev mb10">
          <p v-if="articleDetail[0].id">
            上一篇：
            <nuxt-link
              :to="{
                name: `detail/${articleDetail[0].id}`,
              }"
            >
              {{ articleDetail[0].title }}
            </nuxt-link>
          </p>
          <p v-else>已经是第一篇了！</p>
        </div>
        <div class="nuxt">
          <p v-if="articleDetail[2].id">
            下一篇：
            <nuxt-link
              :to="{
                name: `detail/${articleDetail[2].id}`,
              }"
            >
              {{ articleDetail[2].title }}
            </nuxt-link>
          </p>
          <p v-else>已经是最后一篇了！</p>
        </div>
      </div>
    </div>
    <!--  作者信息-->
    <div class="author section">
      <div class="avatar-wrap">
        <el-image
          style="width: 100px; height: 100px"
          :src="myAvatar"
          fit="cover"
        ></el-image>
      </div>
      <div class="userinfo">
        <div class="header">
          <span> 作者简介 </span>
          <span>
            <i class="iconfont icon-wo"></i>
            <span> dylan </span>
          </span>
          <span class="cp" @click="openRewardDialog">
            <i class="iconfont icon-dashang"></i>
            <span> 打赏 </span>
          </span>
        </div>
        <p class="author-summary">
          一日行善，福虽未至，祸自远矣。一日行恶，祸虽未至，福自远矣。行善之人，如春园之草，不见其长，日有所增。做恶之人，如磨刀之石，不见其损，日有所亏。福祸无门总在心，人心不善祸相侵。
        </p>
        <myIcon/>
      </div>
    </div>
    <!--  评论列表-->
    <div class="section comment">
      <!--<h2 class="comment-title" v-html="`共 ${detail.articleInfor.commentCount} 条评论关于 “${detail.title.rendered}”`"></h2>-->
      <div class="comment-wrap">
        <comment :list="commentList" :total="commentTotal" :status="articleDetail[1].comment_status" :articleId="articleId"/>
      </div>
    </div>
  </div>
</template>

<script>
import reward from "@/components/article/reward";
import comment from "@/components/comment";
import svgIcon from "~/components/common/svgIcon";
import myIcon from "~/components/article/myIcon";

export default {
  name: "detail-id",
  layout:'articleDetail',
  components: {
    reward,
    comment,
    svgIcon,
    myIcon,
  },
  async asyncData({store, params}) {
    let articleId = params.id;
    let query = {};
    let start = 0;
    let limit = 10;
    let commentTotal = 0;
    let articleDetail = [];
    let commentList = [];
    query.id = articleId;
    let res = await store.dispatch("Article/getArticleDetail", query);
    console.log(res)
    if (res.success) {
      articleDetail = res.data;
    }
    let commentRes = await store.dispatch("Comment/getCommentList", {
      id: articleId,
      pagination: 1,
      start,
      limit,
    });
    console.log(commentRes, "aaaaaaaaaa");
    let readRes = await store.dispatch("Article/updateReadByArticleId", {
      id: articleId,
    });
    if (commentRes.success) {
      commentList = commentRes.data;
      commentTotal = commentRes.count;
    }
    return {
      articleDetail,
      articleId,
      start,
      limit,
      commentList,
      commentTotal,
    };
  },
  data() {
    return {
      //当前点击的某一项
      currentItem: null,
      commentDialog: false,
      commentListLoading: false,
      rewardMyDialog: false,
    };
  },
  computed: {
    fullPath() {
      return `www.baidu.com/${this.articleId}`;
    },
  },
  mounted() {
    //下面这行代码解决prismjs不能异步加载必须刷新一下才显示的问题
    // process.browser && document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
    console.log(this.articleDetail);
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
          type: "success",
        });
      }
    },
    openRewardDialog() {
      this.rewardMyDialog = true;
    },
  },
};
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
    font-size: 20px;
  }

  .other-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e9eaed;
    color: #999 !important;
    font-size: 12px;

    svg {
      width: 15px;
      margin-right: 5px;
    }

    div {
      display: flex;
      align-items: center;
    }
  }

  .content-details {
    padding: 20px 0;
  }
}

.operation {
  .opinion {
    .like-wrap {
      display: flex;
      flex-direction: column;
      text-align: center;

      div:nth-child(1) {
        font-size: 12px;
      }

      div:last-child {
        svg {
          font-size: 30px;
          cursor: pointer;
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

.author {
  display: flex;

  .avatar-wrap {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
  }

  .userinfo {
    flex: 1;
    margin-left: 10px;

    .header {
      margin-bottom: 5px;
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
