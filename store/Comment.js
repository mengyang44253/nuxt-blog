export const actions={
  async getCommentList(context,params){
    let {data}=await this.$axios.post("/blog/comment/list",params)
    return data
  },
  async addComment(context,params){
    let {data}=await this.$axios.post("/blog/comment/add",params)
    return data
  }
}
