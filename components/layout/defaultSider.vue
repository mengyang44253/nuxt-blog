<template>
  <div class="sider-wrap">
    <!--  小站-->
    <div class="placard side-wrap mb10">
      <div class="title">个人介绍</div>
      <div class="user">
        <div class="top">
          <div class="left">
            <el-image
              style="width: 50px; height: 50px; border-radius: 50%"
              :src="myAvatar"
              fit="cover"
            />
          </div>
          <div class="right">
            <div class="name">Dylan</div>
            <div class="signature">山不在高，有仙则名。</div>
          </div>
        </div>
        <div class="bottom">
          <div class="item">
            <div class="num">
              {{ articleCount }}
            </div>
            <div class="text">文章</div>
          </div>
          <div class="item">
            <div class="num">
              {{ articleRead }}
            </div>
            <div class="text">浏览</div>
          </div>
          <div class="item">
            <div class="num">
              {{ commentCount }}
            </div>
            <div class="text">评论</div>
          </div>
          <div class="item">
            <div class="num">
              {{ articlePraise }}
            </div>
            <div class="text">获赞</div>
          </div>
        </div>
      </div>
      <div class="myicon">
        <MyIcon/>
      </div>
    </div>
    <!--  评论-->
    <div class="comment side-wrap mb10">
      <div class="title">最新评论</div>
      <div class="comment-wrap plr20">
        <SideComment :item="item" v-for="item in newComment" :key="item.id"/>
      </div>
    </div>
    <!--  热门文章-->
    <div class="hot-article side-wrap mb10">
      <div class="title">热门文章</div>
      <div class="hot-article-wrap plr20">
        <SideArticle :item="item" v-for="item in hotArticle" :key="item.id"/>
      </div>
    </div>
    <!--  文章归档-->
    <div class="archive side-wrap mb10"></div>
    <!--  标签-->
    <div class="tag side-wrap mb10">
      <div class="title">
        <div>
          标签
        </div>
        <div class="more" @click="goToTags">
          更多>
        </div>
      </div>
      <div class="tag-wrap plr20">
        <div
          class="item"
          v-for="item in sideTag"
          :key="item.id"
          :class="`color-${random()}`"
          @click="goToTagDetail(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <!--  友链-->
    <div class="friend side-wrap">
      <div class="title">
        <div>
          友情链接
        </div>
        <div class="more" @click="goToFriend">
          更多>
        </div>
      </div>
      <div class="friend-wrap">
        <div class="item" v-for="item in friendLink" :key="item.id" :title="item.name" @click="goToOut">
          <el-image
            style="width: 100%; height: 100%"
            :src="item.img"
            fit="cover"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from "@/components/article/myIcon.vue";
import SideComment from "@/components/side/comment.vue";
import SideArticle from "@/components/side/hotArticle.vue";
import {mapState} from "vuex";
import {randomNum} from "@/utils/validate";

export default {
  name: "defaultSide",
  components: {
    MyIcon,
    SideComment,
    SideArticle,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      "articleCount",
      "articleRead",
      "commentCount",
      "articlePraise",
      "newComment",
      "sideTag",
      "hotArticle",
      "friendLink"
    ]),
  },
  mounted() {
    console.log(this.friendLink)
  },
  methods: {
    random() {
      return randomNum(1, 8);
    },
    goToTagDetail(item) {
    },
    goToTags() {
      this.$router.push({
        path: "/tags"
      })
    },
    goToFriend(){
      this.$router.push({
        path:"/friend"
      })
    },
    goToOut(){

    }
  },
};
</script>

<style scoped lang="less">
.placard {
  .user {
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid #cccccc;

    .top {
      display: flex;
      margin-bottom: 20px;

      .right {
        padding-left: 11px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
          color: @color-theme;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      margin-right: 20px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .num {
          font-size: 14px;
          font-weight: bold;
          color: @color-theme;
        }

        .text {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        }
      }
    }
  }
}

.tag {
  .title {
    display: flex;
    justify-content: space-between;
  }

  .tag-wrap {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;

    .item {
      margin: 0 5px 10px;
      padding: 3px 6px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}

.friend {
  .title {
    display: flex;
    justify-content: space-between;
  }

  .friend-wrap {
    display: flex;
    padding: 10px;

    .item {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}

.plr20 {
  padding: 0 20px;
}
</style>
