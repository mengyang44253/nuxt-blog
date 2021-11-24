<template>
  <div class="friend-wrap">

  </div>
</template>

<script>
export default {
  name:"friend",
  async asyncData({store}){
    let friendList=[]
    let params={}
    let res=await store.dispatch("Friend/getFriendList",params)
    if (res.success) {
      friendList=res.data
    }
    return {
      friendList
    }
  },
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style scoped lang="less">

</style>
