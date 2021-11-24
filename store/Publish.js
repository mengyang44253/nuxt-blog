export const actions = {
  async getDirectoryList(context, params) {
    //获取导航nav
    let { data } = await this.$axios.post("/admin/label/directoryList", params);
    return data;
  },
  async getArticleCount(context, params) {
    //文章总数
    let { data } = await this.$axios.get("/blog/common/countArticle", params);
    return data;
  },
  async getArticleRead(context, params) {
    //阅读总量
    let { data } = await this.$axios.get("/blog/common/articleRead", params);
    return data;
  },
  async getCommentCount(context, params) {
    //评论总数
    let { data } = await this.$axios.get("/blog/common/commentCount", params);
    return data;
  },
  async getArticlePraise(context, params) {
    //文章获赞
    let { data } = await this.$axios.get("/blog/common/articlePraise", params);
    return data;
  },
  async getHotArticle(context, params) {
    //热门文章
    let { data } = await this.$axios.get("/blog/common/hotArticle", {params})
    return data
  },
  async getHotComment(context, params) {
    //热门评论
    let { data } = await this.$axios.get("/blog/common/hotComment", {params})
    return data
  },
  async getHotTag(context, params) {
    //热门tag
    let { data } = await this.$axios.get("/blog/comment/hotTag", {params})
    return data
  },
  async getFriendLink(context,params) {
    let { data } = await this.$axios.get("/blog/common/friendLink", { params })
    return data
  }
};
