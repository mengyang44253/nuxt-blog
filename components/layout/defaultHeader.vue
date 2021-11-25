<template>
  <div class="nav">
    <div class="content layout">
      <!--  logo  -->
      <div class="logo">
        <h1>博客名字</h1>
        <nuxt-link to="/">
          <el-image class="image" src="" fit="cover" />
        </nuxt-link>
      </div>
      <!--  菜单-->
      <div class="nav-wrapper">
        <el-menu class="nav-menu" mode="horizontal" @select="selectSomeMenu">
          <el-menu-item index="/"> 首页 </el-menu-item>
          <template v-for="item in menu">
            <el-menu-item
              v-if="!item.children"
              :key="item.id"
              :index="item.id + ''"
            >
              {{ item.name }}
            </el-menu-item>
            <el-submenu v-else :key="item.id + ''" :index="item.id + ''">
              <template slot="title">
                {{ item.name }}
              </template>
              <el-menu-item
                v-for="ee in item.children"
                :key="ee.id"
                :index="ee.id + ''"
              >
                {{ ee.name }}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <!--  搜索-->
      <div class="search-wrap">
        <el-input
          class="search-input"
          size="small"
          placeholder="请输入文章名"
          v-model="searchValue"
        >
          <el-button @click="search" slot="append" icon="el-icon-search" />
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "defaultHeader",
  data() {
    return {
      searchValue: null,
    };
  },
  computed: mapState(["menu"]),
  methods: {
    selectSomeMenu(key,keyPath) {
      console.log(key)
      console.log(keyPath)
      if(key ==='/'){
        this.$router.push({
          path:"/"
        })
      }else{

      }
    },
    search() {},
  },
};
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 60px;
  background-color: @bg-color;
  margin-bottom: 20px;
  .content {
    display: flex;
    align-items: center;
    height: 100%;
    .logo {
      width: 100px;
      h1 {
        text-indent: -9999em;
      }
      .image {
        width: 87px;
        height: 30px;
      }
    }
    .nav-wrapper {
      flex: 1;
    }
    .search-wrap {
      width: 300px;
    }
  }
}
</style>
