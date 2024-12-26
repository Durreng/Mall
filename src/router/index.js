import { createRouter, createWebHistory } from "vue-router";
import ProductDetails from "../components/page/ProductDetails.vue"; // 确保路径和文件名正确
import SeconDary from "../components/page/SeconDary.vue"; // 引入 SeconDary 组件
import NikeHome from "../components/NikeHome.vue"; // 首页
import AllProducts from "../components/view/AllProducts.vue";

const routes = [
  {
    path: "/ProductDetails/:title",
    name: "ProductDetails",
    component: ProductDetails,
    meta: { title: "商品详情页" },
  },
  {
    path: "/SeconDary/:category/:id", // 添加 :id 动态路由参数
    name: "Secondary",
    component: SeconDary,
    meta: { title: "商品分类页" },
  },
  {
    path: "/",
    name: "Home",
    component: NikeHome,
    meta: { title: "首页" },
  },
  {
    path: "/other",
    name: "Other",
    component: "OtherPage",
    meta: { title: "其他页面" },
  },
  {
    path: "/all-products",
    name: "AllProducts",
    component: AllProducts,
    meta: { title: "商品列表页" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  const title = to.meta.title || "默认标题"; // 如果没有设置标题则使用默认标题
  document.title = title;

  next(); // 继续导航
});

export default router;
