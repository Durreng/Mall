<template>
  <div class="container">
    <div class="content">
      <!-- 退货 -->
      <!-- <div class="hint">
        <div class="hint-sales">
          <p>售后无忧温馨提示</p>
          <p>如需退换货，请先提交退换货申请，否则可能将影响退货时效。</p>
        </div>
      </div> -->
      <!-- <div class="head-img">
        <img src="" alt="">
      </div> -->
      <div class="content-type">
        <swiper :modules="[Virtual]" :slides-per-view="1" :space-between="20" loop class="carousel one">
          <swiper-slide v-for="(slide, index) in slidesGroup1" :key="index" :virtualIndex="index">
            <template v-if="isVideo(slide.image)">
              <a :href="slide.url"><video controls :src="slide.image" alt="视频"></video></a>
            </template>
            <template v-else>
              <a :href="slide.url"><img :src="slide.image" alt="图片" id="head-image"></a>
            </template>
          </swiper-slide>
        </swiper>
        <swiper :modules="[Virtual]" :slides-per-view="slidesPerView" :space-between="20" loop
          class="carousel swiper-tow">
          <swiper-slide v-for="(slide, index) in slidesGroup2" :key="index" :virtualIndex="index">
            <a :href="slide.url"><img :src="slide.image" alt="" id="content-class"></a>
          </swiper-slide>
        </swiper>
        <h3 id="content-video-h3">{{ categoryTitle }}</h3>
        <div class="classiFication">
          <ul>
            <li v-for="(url, name) in categoryLinks" :key="name">
              <a :href="url" target="_blank">{{ name }}</a>
            </li>
          </ul>
        </div>
        <swiper :modules="[Virtual]" :slides-per-view="slidesPerView1" :space-between="20" class="carousel">
          <swiper-slide v-for="(slide, index) in slidesGroup3" :key="index" :virtualIndex="index">
            <div class="box-shadow">
              <div class="content-video-info">
                <a href="#">
                  <video muted playsinline autoplay preload="none" loop poster :src="slide.videoSrc"></video>
                </a>
                <div id="content-video-full">
                  <img :src="slide.imageSrc" alt="">
                  <div>
                    <a href="#">
                      <p>{{ slide.name }}</p>
                    </a>
                    <p>{{ slide.price }}</p>
                  </div>
                </div>
                <div class="content-video-size" v-show="slide.isSizeVisible">
                  <p>SIZE:</p>
                  <select name="" id="">
                    <option value="">US4/UK3.5/EU36</option>
                    <option value="">US4.5/UK4/EU36.5</option>
                    <option value="">US4.5/UK4/EU37</option>
                  </select>
                  <p>{{ slide.price }}</p>
                </div>
              </div>
              <div class="content-video-cart">
                <div>
                  <p>加入购物车🛒</p>
                </div>
                <div>
                  <button class="iconfont icon-xiajiantou" @click="toggleSizeVisibility(index)"></button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <h3 id="content-type-title">出众保暖装备</h3>
        <p>心仪好物享超值折扣</p>
        <div class="jkxg">
          <a href="#">即刻选购</a>
        </div> -->
      </div>
      <div class="content-type content-title">
        <h3>人气推荐鞋榜单</h3>
        <p>10月29日00:00至11月11日23:59狂欢进行中🔥</p>
        <swiper :modules="[Virtual]" :slides-per-view="slidesPerView" :space-between="20" loop class="carousel tow">
          <swiper-slide v-for="(slide, index) in slidesGroup4" :key="index" :virtualIndex="index">
            <a :href="slide.url"><img :src="slide.image" alt="图片"></a>
          </swiper-slide>
        </swiper>
        <!-- <h3>人气推荐鞋榜单</h3>
        <p>10月29日00:00至11月11日23:59狂欢进行中🔥</p> -->
        <swiper :modules="[Virtual]" :slides-per-view="slidesPerView" :space-between="20" loop class="carousel tow">
          <swiper-slide v-for="(slide, index) in slidesGroup5" :key="index" :virtualIndex="index">
            <a :href="slide.url"><img :src="slide.image" alt=""></a>
          </swiper-slide>
        </swiper>
        <!-- <h3>人气推荐鞋榜单</h3>
        <p>10月29日00:00至11月11日23:59狂欢进行中🔥</p> -->
        <swiper :modules="[Virtual]" :slides-per-view="slidesPerView" :space-between="20" loop class="carousel tow">
          <swiper-slide v-for="(slide, index) in slidesGroup6" :key="index" :virtualIndex="index">
            <a :href="slide.url"><img :src="slide.image" alt=""></a>
          </swiper-slide>
        </swiper>
        <!-- <h3>焕新灵感好物</h3>
        <swiper :modules="[Virtual]" :slides-per-view="3" :space-between="20" loop class="carousel">
          <swiper-slide v-for="(slide, index) in slidesGroup6" :key="index" :virtualIndex="index">
            <a href="#"><img :src="slide" alt=""></a>
          </swiper-slide>
        </swiper>
        <h3>精选特价好物</h3>
        <swiper :modules="[Virtual]" :slides-per-view="2" :space-between="20" loop class="carousel">
          <swiper-slide v-for="(slide, index) in slidesGroup7" :key="index" :virtualIndex="index">
            <a href="#"><img :src="slide" alt=""></a>
          </swiper-slide>
        </swiper>
        <h3>限时好价专区</h3>
        <swiper :modules="[Virtual]" :slides-per-view="3" :space-between="10" loop :simulateTouch="false"
          class="carousel carousel-auto">
          <swiper-slide v-for="(slide, index) in slidesGroup3" :key="index" :virtualIndex="index">
            <a href="#"><img :src="slide" alt=""></a>
          </swiper-slide>
        </swiper> -->
      </div>
      <!-- <div class="content-type content-three">
        <swiper :modules="[Virtual]" :slides-per-view="4" :space-between="20">
          <swiper-slide v-for="(slide, index) in slidesGroup4" :key="index" :virtualIndex="index">
            <a href="#"><img :src="slide" alt=""></a>
          </swiper-slide>
        </swiper>
      </div>
      <div class="content-type bottom-image">
        <swiper :modules="[Virtual]" :slides-per-view="2" :space-between="20">
          <swiper-slide v-for="(slide, index) in slidesGroup8" :key="index" :virtualIndex="index">
            <a href="#"><img :src="slide" alt="" id="bottom_image"></a>
          </swiper-slide>
        </swiper>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Virtual } from 'swiper/modules';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'NikeHome',
  data() {
    return {
      activeIndex: null,
      windowWidth: window.innerWidth,
      products: [
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡",
          price: "135.00美元",
          isSizeVisible: false
        },
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡123123 `",
          price: "135.00美元",
          isSizeVisible: false
        },
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡123123 `",
          price: "135.00美元",
          isSizeVisible: false
        },
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡123123 `",
          price: "135.00美元",
          isSizeVisible: false
        },
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡123123 `",
          price: "135.00美元",
          isSizeVisible: false
        },
        {
          videoSrc: "https://shopprimereps.com/cdn/shop/videos/c/vp/bd58b7495db342579811f48d72aca411/bd58b7495db342579811f48d72aca411.HD-720p-1.6Mbps-36100940.mp4?v=0",
          imageSrc: "https://shopprimereps.com/cdn/shop/products/jordan-1-low-x-travis-scott-reverse-mocha-822814.jpg?v=1696876121",
          name: "JORDAN 1 LOW x TRAVIS SCOTT 反转摩卡123123 `",
          price: "135.00美元",
          isSizeVisible: false
        },
        // 可以在这里添加更多商品对象，格式与上面类似
      ],
      categoryTitle: '', // 用于存储标题
      categoryLinks: {} // 用于存储分类链接
    };
  },
  created() {
    this.fetchCommodities();
  },
  // swiper轮播图渲染
  setup() {
    const slidesGroup1 = ref([]);
    const slidesGroup2 = ref([]);
    const slidesGroup3 = ref([]);
    const slidesGroup4 = ref([]);
    const slidesGroup5 = ref([]);
    const slidesGroup6 = ref([]);

    return {
      slidesGroup1,
      slidesGroup2,
      slidesGroup3,
      slidesGroup4,
      slidesGroup5,
      slidesGroup6,
      Virtual
    };
  },

  computed: {
    slidesPerView() {
      return this.windowWidth < 768 ? 1 : 4; // 手机端为1，PC端为4
    },

    slidesPerView1() {
      return this.windowWidth < 768 ? 1 : 5; // 手机端为1，PC端为4
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth; // 更新窗口宽度
    },
    toggleSizeVisibility(pIndex) {
      // 切换对应商品的尺码显示隐藏状态
      this.products[pIndex].isSizeVisible = !this.products[pIndex].isSizeVisible;
    },
    // 首页接口
    async fetchCommodities() {
      try {
        const response = await axios.get('https://admin.findsreps.com/api/index');

        // 设置分类标题
        this.categoryTitle = response.data.data.moban1.wenzi_one;

        // 设置分类链接
        this.categoryLinks = response.data.data.moban1.button_array_one;
        // 轮播图
        this.slidesGroup1 = response.data.data.index_lunbo1.map(item => ({
          image: item.image,
          url: item.url
        }));
        this.slidesGroup2 = response.data.data.index_lunbo2.map(item => ({
          image: item.image,
          url: item.url
        }));
        // this.slidesGroup3 = response.data.data.index_lunbo3.map(item => item.image);
        this.slidesGroup4 = response.data.data.index_lunbo4.map(item => ({
          image: item.image,
          url: item.url
        }));
        this.slidesGroup5 = response.data.data.index_lunbo5.map(item => ({
          image: item.image,
          url: item.url
        }));
        this.slidesGroup6 = response.data.data.index_lunbo6.map(item => ({
          image: item.image,
          url: item.url
        }));
        this.slidesGroup3 = this.products;

        const image1 = response.data.data.image1;
        const imgElement = document.querySelector('.head-img img');
        imgElement.src = image1;
        imgElement.alt = '首页图1';

        const image2 = response.data.data.index_bottom;
        const imgElement2 = document.querySelector('.bottom-image');
        imgElement2.src = image2;
        imgElement2.alt = '首页图1';
      } catch (error) {
        console.error('Error fetching commodities:', error);
      }
    },
    isVideo(src) {
      // 判断src是否为视频格式
      return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    },
    showDropdown(index) {
      this.activeIndex = index;
    },
    hideDropdown() {
      this.activeIndex = null;
    },
    goToCategory(category) {
      this.$router.push({ name: category });
    },
  }
}
</script>

<style scoped>
@import url('/src/assets/css/index.css');

.swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.swiper-slide video {
  object-fit: cover;
  height: auto;
}

.swiper-tow img {
  height: 600px;
}

@media (max-width: 768px) {
  #content-video-h3 {
    font-size: 30px;
  }

  .head-div {
    height: 100px;
  }

  .content-type {
    padding: 0 10px;
  }

  .classiFication ul {
    justify-content: space-between;
  }

  .content-title h3 {
    text-align: center;
  }

  .content-type p {
    text-align: center;
  }
}
</style>