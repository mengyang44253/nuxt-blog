<template>
  <div class="friend-wrap layout">
    <div class="title">

    </div>
    <div class="item-wrap">
      <div class="item" v-for="item in friendList" :key="item.id">
        <el-image
          style="width: 50px; height: 50px;border-radius: 5px;box-shadow: 0 0 10px #d2d2d2"
          :src="item.img"
          fit="cover"></el-image>
        <div class="name">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"friend",
  layout:"notSider",
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
.friend-wrap{
  margin: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  .title{
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
  }
  .item-wrap{
    display: flex;
    .item{
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .name{
        margin-top: 5px;
      }
    }
  }
}
</style>
