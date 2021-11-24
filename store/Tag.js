export const actions = {
  async getTagList(context,params) {
    let { data } = await this.$axios.post("/admin/label/tagList", params)
    return data
  }
}
