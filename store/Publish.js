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
};
