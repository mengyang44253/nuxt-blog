<template>
  <div id="app">
    <defaultHeader />
    <div class="main">
      <div class="wrap layout">
        <defaultSide class="sidebar-wrap" />
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
    <defaultFooter />
  </div>
</template>

<script>
import defaultHeader from "~/components/layout/defaultHeader";
import defaultSide from "~/components/layout/defaultSider";
import defaultFooter from "~/components/layout/defaultFooter";
export default {
  name: "default",
  components:{
    defaultHeader,
    defaultSide,
    defaultFooter
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  }
}
</script>

<style scoped lang="less">
.main{
  .wrap{
    display: flex;
    justify-content: space-between;
    .sidebar-wrap{
      width: 320px;
    }
    .content{
      width: 960px;
    }
  }
}
</style>
