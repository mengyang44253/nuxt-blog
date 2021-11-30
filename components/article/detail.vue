<template>
  <div class="detail">
    <div class="title">
      <div class="left">
        <div class="tag-icon">
          {{ articleDetail.label_data.filter(item => item.type === 1)[0].name }}
        </div>
        <div class="article-title textOverFlow" :title="articleDetail.title" @click="goToDetail">
          {{ articleDetail.title|textFormat }}
        </div>
      </div>
      <div class="right">
        {{ articleDetail.create_time|secondFormat("LLLL") }}
      </div>
    </div>
    <div class="content my-multi-ellipsis--l3">
      {{ articleDetail.content|fullTextFormat(200) }}
    </div>
    <div class="original">
      <div class="left">
        <div>
          <svgIcon name="#icon-dianzan"/>
          <span>
          1000
        </span>
        </div>
        <div>
          <svgIcon name="#icon-yueduliang"/>
          <span>
          100
        </span>
        </div>

      </div>
      <div class="right" @click="goToDetail">
        阅读原文
      </div>
    </div>
  </div>
</template>

<script>
import svgIcon from "~/components/common/svgIcon";

export default {
  name: "detail",
  components: {
    svgIcon
  },
  props: {
    articleDetail: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  dara() {
    return {}
  },
  watch: {
    articleDetail(nv) {
    }
  },
  mounted() {
  },
  methods: {
    goToDetail() {
      this.$router.push({
        path: `/detail/${this.articleDetail.id}`
      })
    }
  }
}
</script>

<style scoped lang="less">
.detail {
  width: 100%;
  padding: 20px 40px;
  background: #FFFFFF;
  box-shadow: 0 0 6px 0 #E0E0E0;
  border-radius: 6px;
  margin-bottom: 10px;

  .title {
    display: flex;
    justify-content: space-between;

    .left {
      flex: 1;
      display: flex;

      .tag-icon {
        font-size: 14px;
        height: 22px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #3385FF;
        text-align: center;
        line-height: 22px;
        padding: 0 5px;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          right: -15px;
          top: 0;
          border-top: 11px solid transparent;
          border-left: 15px solid #3385FF;
          border-bottom: 11px solid transparent;
        }
      }

      .article-title {
        max-width: 550px;
        margin-left: 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        cursor: pointer;
      }
    }

    .right {
      width: 210px;
      font-size: 14px;
      font-weight: 400;
      color: #CCCCCC;
      text-align: right;
    }
  }
}

.content {
  width: 100%;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  height: 104px;
}

.original {
  display: flex;
  justify-content: space-between;

  .right {
    font-size: 14px;
    font-weight: 400;
    color: #3385FF;
    cursor: pointer;
  }

  .left {
    width: 150px;
    display: flex;
    justify-content: space-between;

    svg {
      width: 15px;
    }

    div {
      display: flex;
      align-items: center;

      &:last-child {
        svg {
          width: 20px;
        }
      }
    }
  }
}
</style>
