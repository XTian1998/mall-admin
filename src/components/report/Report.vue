<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div id="main" style="width: 600px;height:400px;"></div>
    </el-card>
  </div>
</template>

<script>
import { getReports } from "@/network/report.js";
import echarts from "echarts";
export default {
  data() {
    return {
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    getReports().then(res => {
      if (res.data.meta.status !== 200) {
        return this.$message.error("获取折线图失败");
      }
      myChart.setOption(res.data.data);
    });
  }
};
</script>
<style scoped>
</style>