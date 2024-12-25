<template>
  <div id="app">
    <Header :commodities="commodities" :activeIndex="activeIndex" @update:activeIndex="activeIndex = $event"
      @navigate="goToCategory" />
    <router-view></router-view>
    <ContactBox />
    <Bottom />
  </div>
</template>

<script>
import Header from './components/NikeHead.vue';
import Bottom from './components/NikeBottom.vue';
import ContactBox from './components/module/ContactBox.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    Bottom,
    ContactBox
  },
  data() {
    return {
      activeIndex: -1,
      showNikeHome: true, // 控制 NikeHome 的显示
      commodities: [],
    };
  },
  created() {
    this.fetchCommodities();
  },
  methods: {
    async fetchCommodities() {
      const response = await axios.get('https://admin.findsreps.com/api/index');
      const resp = response.data.data.category; // 获取接口信息

      // 转换数据
      this.commodities = resp.map(item => ({
        title: item.name.trim(),
        items: item.childlist.map(child => ({
          id: child.id,
          pid: child.pid,
          title: child.name.trim(),
          contents: child.childlist.map(subChild => ({
            id: subChild.id,
            title: subChild.nickname,
            pid: subChild.pid
          }))
        })),
        id: item.id,
        pid: item.pid
      }));
    },

    handleNavigation(category) {
      this.goToCategory(category);
      this.showNikeHome = false; // 点击导航后隐藏 NikeHome
    },
    goToCategory(category) {
      if (category === 'Home') {
        this.$router.push({ name: 'Home' });
      } else {
        this.$router.push({ name: 'AllProducts', query: { id: category.id } });
      }
    },
    
  }
}
</script>

<style>
/* 在这里添加样式 */
.head-div {
  width: 100%;
  height: 105px;
}
</style>
