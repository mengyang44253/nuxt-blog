import { tree } from '@/utils/validate'

export const state = () => ({
  menu: [],
  articleCount: null,
  articleRead: null,
  commentCount: null,
  articlePraise: null,
  sideTag: null,
  newComment: [],
  hotArticle: [],
});

export const mutations = {
  updateMenu(state, payload) {
    state.menu = payload;
  },
  updateArticleCount(state, payload) {
    state.articleCount = payload;
  },
  updateArticleRead(state, payload) {
    state.articleRead = payload;
  },
  updateCommentCount(state, payload) {
    state.commentCount = payload;
  },
  updateArticlePraise(state, payload) {
    state.articlePraise = payload;
  },
  updateNewComment(state, payload) {
    state.newComment = payload;
  },
  updateHotArticle(state, payload) {
    state.hotArticle = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    //获取nav数据
    let { data } = await dispatch("Publish/getDirectoryList", {})
    commit("updateMenu", tree(data))
    //文章总数
    let articleCount = await dispatch("Publish/getArticleCount", {})
    commit("updateArticleCount", articleCount.data)
    //阅读总量
    let articleRead = await dispatch("Publish/getArticleRead", {})
    commit("updateArticleRead",articleRead.data)
    //评论总数
    let commentCount = await dispatch("Publish/getCommentCount", {})
    commit("updateCommentCount",commentCount.data)
    //文章获赞
    let articlePraise = await dispatch("Publish/getArticlePraise", {})
    commit("updateArticlePraise",articlePraise.data)
  },
};
