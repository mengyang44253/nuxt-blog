export const state = () => ({
  menu: [],
  articleCount: null,
  articleRead: null,
  commentCount: null,
  articlePraise: null,
  sideTag: [],
  allTag:[],
  newComment: [],
  hotArticle: [],
  friendLink:[]
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
  updateSideTag(state,payload) {
    state.sideTag=payload
  },
  updateFriendLink(state,payload) {
    state.friendLink=payload
  },
  updateAllTag(state,payload) {
    state.allTag=payload
  }
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    //获取nav数据
    let { data } = await dispatch("Publish/getDirectoryList", {})
    commit("updateMenu", data)
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
    commit("updateArticlePraise", articlePraise.data)
    //热门文章
    let hotArticle = await dispatch("Publish/getHotArticle", {
      pagination: 1,
      start: 0,
      limit:5
    })
    commit("updateHotArticle",hotArticle.data)
    //热门评论
    let hotComment = await dispatch("Publish/getHotComment", {
      pagination: 1,
      start: 0,
      limit:5
    })
    commit("updateNewComment",hotComment.data)
    //热门tag
    let hotTag = await dispatch("Publish/getHotTag", {
      pagination: 1,
      start: 0,
      limit:10
    })
    commit("updateSideTag", hotTag.data)
    //友链
    let friend = await dispatch("Publish/getFriendLink", {
      pagination: 1,
      start: 0,
      limit:6
    })
    commit("updateFriendLink",friend.data)
  },
};
