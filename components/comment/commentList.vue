<template>
  <div class="wrap">
    <div class="list">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="avatar" :class="[`color-${random()}`]">
          {{ item.from_name.substr(0, 1) }}
        </div>
        <div class="content">
          <div class="top">
            <a class="name" href="" target="_blank">
              {{ item.from_name }}
            </a>
            <div class="time">
              {{ item.create_time|secondFormat }}
            </div>
            <!--            <div class="text">-->
            <!--              <svgIcon name="#icon-send"/>-->
            <!--              回复-->
            <!--            </div>-->
          </div>
          <div class="bottom">
            <div class="comment-text">
              {{ item.content }}
            </div>
            <div class="footer">
              <div class="app">
                浏览器标识和评论点赞踩暂时未做
              </div>
              <div class="opinion">

              </div>
            </div>
          </div>
          <!--<commentForm/>-->
          <!--<commentList/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commentForm from "~/components/comment/commentForm";
import {randomNum} from "~/utils/validate";
import svgIcon from "~/components/common/svgIcon";

export default {
  name: "commentList",
  components: {
    commentForm,
    svgIcon
  },
  props: {
    list: Array,
    default: function () {
      return []
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.list, 'llllllll')
  },
  methods: {
    random() {
      return randomNum(1, 8)
    }
  }
}
</script>

<style scoped lang="less">
.wrap {
  .list {
    .item {
      display: flex;
      margin-top: 24px;

      .avatar {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 35px;
        color: #000;
        text-transform: uppercase;
        border-radius: 5px;
        margin-right: 16px;
      }

      .content {
        flex: 1;

        .top {
          display: flex;
          align-items: baseline;

          .name {
            font-size: 16px;
            margin-right: 15px;
          }

          .time {
            font-size: 12px;
            margin-right: 15px;
          }

          .text {
            font-size: 12px;
            cursor: pointer;
            display: flex;
            align-items: baseline;

            svg {
              width: 1em;
              height: 1em;
            }

            &:hover {
              color: #1890ff;
            }
          }
        }

        .bottom {
          background-color: #f8f8f9;
          padding: 16px 8px;
          margin-top: 10px;

          .comment-text {
            font-size: 14px;
          }

          .footer {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
