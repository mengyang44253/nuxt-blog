import getBrowserInfo from "dylan-browser-info";

export const actions = {
  async getCommentList(context, params) {
    let { data } = await this.$axios.post("/blog/comment/list", params);
    data.data.forEach((item) => {
      item.userAgent = getBrowserInfo(item.userAgent);
    });
    return data;
  },
  async addComment(context, params) {
    let { data } = await this.$axios.post("/blog/comment/add", params);
    return data;
  },
};
