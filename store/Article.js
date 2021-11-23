export const actions={
  async getArticleList(context,params){//文章列表
    let {data}=await this.$axios.post("/admin/article/articleList",params)
    return data
  },

  async getArticleDetail(context,params){//获取文章详情
    let {data}=await this.$axios.get("/blog/article/getDetailById",{params})
    return data
  },

  async updateReadByArticleId(context,params){
    let {data}=await this.$axios.post("/blog/article/updateArticleRead",params)
    return data
  }
}
