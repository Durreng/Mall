<template>
  <div class="secondary">
    <div class="secondary-thumbnail">
      <div v-for="(item, index) in filteredProducts" :key="index">
        <h4>{{ item.title }}</h4>
        <ul>
          <li v-for="(subItem, subIndex) in item.list" :key="subIndex">
            <a :href="`/SeconDary/${item.category}`" @click.prevent="goToSecondary(item.category, subItem.category_id)">
              <img :src="subItem.image" alt="">
              <p>{{ subItem.nickname }}</p>
              <h3>{{ subItem.name }}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllProducts',
  data() {
    return {
      products: [],
      proimage: '',
      isVisible: true, // 筛选显示
      selectedCategories: [] // 选中的分类
    };
  },

  computed: {
    filteredProducts() {
      // 如果没有选中的分类，返回所有产品
      if (this.selectedCategories.length === 0) {
        return this.products;
      }
      // 根据选中的分类过滤产品
      return this.products.filter(product => this.selectedCategories.includes(product.category));
    }
  },

  created() {
    this.fetchCommodities();
  },
  watch: {
    '$route'() {
      this.fetchCommodities(); // 路由变化时重新获取数据
    }
  },
  methods: {
    toggleFilter() {
      this.isVisible = !this.isVisible; // 切换显示状态
    },

    updateSelectedCategories(event) {
      const category = event.target.value;
      if (event.target.checked) {
        // 如果选中，添加到 selectedCategories
        this.selectedCategories.push(category);
      } else {
        // 如果未选中，从 selectedCategories 中移除
        this.selectedCategories = this.selectedCategories.filter(item => item !== category);
      }
    },

    async fetchCommodities() {
      const pidValue = this.$route.query.id || '';

      try {
        const response = await axios.get(`https://admin.findsreps.com/api/category?search=${pidValue}`);

        this.products = response.data.data.data.map(item => ({
          title: item.name,
          category: item.name,
          list: item.list, // 假设 list 是包含商品的数组
        }));
      } catch (error) {
        console.error('Error fetching commodities:', error);
      }
    },
    goToSecondary(category, id) {
      this.$router.push({ name: 'Secondary', params: { category, id } });
    },
  },
}
</script>

<style scoped>
@import url('/src/assets/css/secondary.css');

.secondary h4 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.secondary-thumbnail img {
  object-fit: contain;
}

.secondary-thumbnail {
  width: 100%;
  margin-left: 30px;
}

.secondary-model {
  padding: 20px;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  border: none;
}
.secondary-xuanz {
  border-top: 1px solid rgb(231, 231, 231);
  padding: 20px;
  overflow-y: auto;
  display: grid;
  max-height: 200px;
}

.secondary-xuanz div {
  margin: 0 0 15px;
  display: flex;
  align-items: center;
  position: relative;
}

.secondary-xuanz label {
  cursor: pointer;
  padding-left: 20px;
  font-size: 12px;
  position: relative;
}

.secondary-xuanz input[type='checkbox'] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.secondary-xuanz label:before {
  content: '';
  position: absolute;
  left: -4px;
  top: 3px;
  width: 10px;
  height: 10px;
  border: 1px solid rgb(34, 34, 34);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}

.secondary-xuanz label:after {
  content: '';
  position: absolute;
  border: 0;
  top: 5px;
  left: -2px;
  width: 8px;
  height: 8px;
  background: #fff;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}

.secondary-xuanz input[type='checkbox']:checked+label:before {
  border-color: rgb(34, 34, 34);
}

.secondary-xuanz input[type='checkbox']:checked+label:after {
  background: rgb(34, 34, 34);
}


@media (max-width: 768px) {
  .secondary-thumbnail h2 {
    font-size: 30px;
    margin: 0;
    margin-bottom: 20px;
  }

  .secondary-thumbnail ul {
    margin-bottom: 30px;
  }

  .secondary-thumbnail ul li {
    padding: 10px;
    width: 45%;
    margin: 5px;
  }

  .secondary-thumbnail p {
    overflow: hidden;
  }

  .secondary-thumbnail img {
    height: 70%;
  }

  .secondary-thumbnail {
    margin: 0;
  }

  .secondary {
    padding: 10px;
  }
}
</style>