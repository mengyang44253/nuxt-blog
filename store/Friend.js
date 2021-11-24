export const actions= {
  async getFriendList(context,params) {
    let { data } = await this.$axios.post("/admin/friend/list", params)
    return data
  }
}
