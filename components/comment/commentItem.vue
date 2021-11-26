<template>
  <div class="commentItem">
    <div class="avatar" :class="[`color-${random}`]">
      {{item.from_name.substr(0,1)}}
    </div>
    <div class="itemContent">
      <div class="name">
        <div class="commentUserInfo">
          <a :href="item.from_website" v-if="item.from_website" >
            {{item.from_name|textFormat}}
          </a>
          <span class="elsename" v-else>
            {{item.from_name|textFormat}}
          </span>
          <span class="browser">
            {{item.userAgent.browserName}} {{item.userAgent.browserVersion}}
          </span>
          <span class="sys">
            {{item.userAgent.systemName}}
          </span>
        </div>
        <div class="reply cp" @click="replyComment">
          回复
        </div>
      </div>
      <div class="comment-content">
        {{item.content|textFormat}}
      </div>
      <div class="time">
        <div class="commentTime">
          {{item.createTime|secondFormat}}
        </div>
        <div class="commentPraise cp" @click="standBySomeComment">
          支持{{item.praise|textFormat}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  randomNum
} from "~/utils/validate";

export default {
  name: "commentItem",
  props:{
    item:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  data(){
    return {

    }
  },
  computed:{
    random(){
      return randomNum(1,8)
    }
  },
  mounted(){
    console.log(item)
  },
  methods:{
    replyComment(){
      this.$emit("replyComment",this.item)
    },
    async standBySomeComment(){
      let params={}
      params.id=this.item.id
      let res=await this.$store.dispatch("article/getArticleList",params)
      if (res.success) {
        thius.$message({
          message:"点赞成功！",
          type:success
        })
        this.item.praise++
      }
    }
  }
}
</script>

<style scoped lang="less">
.commentItem{
  width: 100%;
  position: relative;
  .avatar{
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 35px;
    color: #000;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;
  }
  .itemContent{
    width: 95%;
    padding: 10px 10px 10px 50px;
    margin: 0 0 20px 5%;
    border-radius: 5px;
    background: #f0f2f7;
    .name{
      display: flex;
      justify-content: space-between;
      a,.elsename{
        margin-right: 5px;
        font-size: 18px;
        font-weight: 700;
      }
      .browser,.sys{
        background: linear-gradient(90deg, #5087ec, #d95040, #f2bd42);
        color: #fff;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 12px;
        margin-right: 5px;
      }
      .reply{
        font-size: 14px;
        color: rgb(109,106,106);
      }
    }
    .comment-content{
      margin: 10px 0;
    }
    .time{
      display: flex;
      justify-content: space-between;
      .commentTime{
        color: #6a6352;
        font-size: 12px;
      }
      .commentPraise{
        color: #878787;
        font-size: 12px;
        font-weight: normal;
      }
    }

  }
}
</style>
