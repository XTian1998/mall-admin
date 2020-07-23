<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src="~@/assets/logo.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle_button" @click="toggleCollapse">|||</div>
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="$route.path">
          <el-submenu :index="item.id.toString()" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class=iconsObj[item.id]></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenuList } from "@/network/home.js";
export default {
  data() {
    return {
      menuList: [],
      iconsObj: {
        "125": "el-icon-user-solid",
        "103": "el-icon-edit",
        "101": "el-icon-s-goods",
        "102": "el-icon-tickets",
        "145": "el-icon-monitor"
      },
      isCollapse:false
    };
  },
  created() {
    getMenuList().then(res => {
      if (res.data.meta.status !== 200) return this.$message.error(resd.data.meta.msg)
      this.menuList = res.data.data
    })
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
};
</script>
<style scoped>
.home_container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373d41;
  color: #fff;
  font-size: 20px;
}
.el-header img {
  height: 100%;
}
.el-header div {
  display: flex;
  align-items: center;
  height: 100%;
}
.el-header div span {
  margin-left: 15px;
}

.el-aside {
  background-color: #333744;
}
.el-aside .el-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedf1;
}
.toggle_button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
  text-align: center;
  cursor: pointer;
}
</style>