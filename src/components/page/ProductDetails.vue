<template>
    <div v-if="products" class="product">
        <div class="product-buy">
            <div class="product-buy-content">
                <div class="product-buy-info">
                    <div class="product-commodity-image">
                        <ImageZoom :title="products.title" :images="products.image" ref="imageZoom" />
                        <div class="product-sku">
                            <div v-for="(item, index) in slidesGroupSku" :key="index">
                                <img :src="item.image" alt="Product Image" @click="switchImage(item.image)">
                            </div>
                        </div>
                    </div>
                    <div class="product-details">
                        <div class="product-title">
                            <h3>{{ products.title }}</h3>
                        </div>
                        <div class="product-moeny">
                            <p>${{ products.moeny }}</p>
                        </div>
                        <div class="product-size">
                            <p>Size</p>
                            <ul>
                                <li v-for="size in sizes" :key="size"
                                    :id="selectedSize === size ? 'product-size-option' : ''" @click="selectSize(size)">
                                    {{ size }}
                                </li>
                            </ul>
                        </div>
                        <div class="product-style">
                            <p>Sku</p>
                            <div v-for="(item, index) in slidesGroupSku" :key="index">
                                <img :src="item.image" alt="Product Image" @click="switchImage(item.image)">
                            </div>
                        </div>
                        <div class="product-shop product-style">
                            <p>Shop</p>
                            <div>
                                <a target="_blank" :href="`${externalLinks[0]}`">
                                    <img src="../../assets/image/photo_4_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>CNFans</h3>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" :href="`${externalLinks[1]}`">
                                    <img src="../../assets/image/photo_2_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>Cssbuy</h3>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" :href="`${externalLinks[2]}`">
                                    <img src="../../assets/image/photo_1_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>Hoobuy</h3>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" :href="`${externalLinks[3]}`">
                                    <img src="../../assets/image/photo_3_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>Allchinabuy</h3>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" :href="`${externalLinks[4]}`">
                                    <img src="../../assets/image/photo_6_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>Mulebuy</h3>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" :href="`${externalLinks[5]}`">
                                    <img src="../../assets/image/photo_5_2024-11-20_17-27-37.jpg" alt="">
                                    <h3>Oopbuy</h3>
                                </a>
                            </div>
                            <!-- <div v-for="(url, index) in externalLinks" :key="index">
                                <a :href="externalLinks[index]" target="_blank">
                                    <img :src="`http://admin.findsreps.com${url.image}`" alt="">
                                    <h3>{{ url.title }}</h3>
                                </a>
                            </div> -->
                        </div>
                        <!-- <div class="quantity-selector product-remark" id="quantity-selector">
                            <p>Quantity:</p>
                            <div>
                                <button @click="decrement" :disabled="quantity <= 1">-</button>
                                <input type="number" v-model="quantity" min="1" />
                                <button @click="increment">+</button>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <!-- 介绍 -->
            <div class="product-content">
                <h3>You may also like</h3>
                <div class="product-class">
                    <swiper :modules="[Virtual]" :slides-per-view="slidesPerView" :space-between="20" class="carousel"
                        navigation>
                        <swiper-slide v-for="link in externalLinks" :key="link.url" :virtualIndex="index">
                            <a :href="link.url" target="_blank">
                                <img :src="'http://admin.findsreps.com' + link.image" alt="">
                                <h4>NIKE KOBE 5 PROTRO x AUNT PEARL</h4>
                                <p>$140</p>
                            </a>
                        </swiper-slide>
                    </swiper>
                </div>
                <h3>Picture and text details</h3>
                <div v-html="formattedProductDescription" class="product-content-main"></div>
            </div>
        </div>
        <!-- <div class="product-type">
            <div>
                <h3>其他类型</h3>
                <swiper :modules="[Virtual]" :slides-per-view="4" :space-between="20" class="carousel" navigation>
                    <swiper-slide v-for="(slide, index) in slidesGroup" :key="index" :virtualIndex="index">
                        <a href="#"><img :src="slide.images" alt=""></a>
                        <p>品牌: {{ slide.title }}</p>
                        <p>价格: ￥{{ slide.moeny }}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div> -->
    </div>
    <div v-else class="thirdlevel">
        <p>商品未找到。</p>
    </div>
</template>

<script>
// 导入 ImageZoom 组件
import ImageZoom from '../module/ImageZoom.vue';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import axios from 'axios';
import { ref } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ImageZoom, // 注册组件
    },
    data() {
        return {
            products: {}, // 存储所有产品
            selectedSize: '',
            sizes: [], // 尺码数组
            quantity: 1, // 商品数量
            slidesGroupSku: [], // 存储图片数组
            currentImage: '',
            formattedProductDescription: '', // 新增属性用于存储格式化后的描述
            windowWidth: window.innerWidth,
        };
    },
    setup() {
        // 图片数组
        const slidesGroup = ref([]); // 使用 ref 以便在响应式系统中跟踪变化

        return {
            slidesGroup,
            Virtual,
        };
    },

    created() {
        const ids = this.$route.params.title; // 获取路由参数
        this.fetchProductData(ids); // 根据 ID 获取商品数据
    },

    computed: {
        slidesPerView() {
            return this.windowWidth < 768 ? 2 : 4;
        },
    },

    mounted() {
        window.addEventListener('resize', this.handleResize);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        increment() {
            this.quantity += 1; // 增加数量
        },
        decrement() {
            if (this.quantity > 1) {
                this.quantity -= 1; // 减少数量
            }
        },
        selectSize(size) {
            this.selectedSize = size; // 更新选中的尺码
        },
        async fetchProductData(ids) {
            try {
                const response = await axios.get(`https://admin.findsreps.com/api/template_shop/view?ids=${ids}`);
                this.products = response.data.data; // 将获取到的产品数据存储到 products 中

                // 解析 sku_array
                const skuArray = JSON.parse(response.data.data.sku_array); // 解析 JSON 字符串为对象

                // 提取图片和标题
                this.slidesGroupSku = skuArray.map(item => {
                    return {
                        image: `https://admin.findsreps.com${item.image}` // 拼接完整的图片 URL
                    };
                });

                // 设置默认显示的图片
                if (this.slidesGroupSku.length > 0) {
                    this.currentImage = this.slidesGroupSku[0].image; // 使用第一张图片作为默认显示
                }

                // 设置产品描述
                this.productDescription = response.data.data.content; // 将内容赋值给 productDescription

                // 格式化产品描述
                this.formattedProductDescription = this.formatDescription(this.productDescription);

                // 解析尺寸字符串并存储到 sizes 数组中
                if (this.products.size) {
                    this.sizes = this.products.size.split(',');
                }

                // 解析 external_links
                this.externalLinks = response.data.data.url.split(','); // 用逗号分割并存储到数组中
                console.log(this.externalLinks)
            } catch (error) {
                console.error('Error fetching commodities:', error);
            }
        },


        formatDescription(description) {
            // 替换相对路径的图片为绝对路径
            return description.replace(/src="\/uploads/g, 'src="https://admin.findsreps.com/uploads');
        },
        addToCart() {
            // 添加到购物车的逻辑
            console.log(`Added ${this.products.title} to cart.`);
        },
        switchImage(image) {
            this.currentImage = image; // 切换当前图片
            this.$refs.imageZoom.switchImage(image); // 切换放大器中的图片
        },
        goToSecondary(category) {
            this.$router.push({ name: 'Secondary', params: { category } });
        }
    }

};
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 200px;
}

.swiper-slide img {
    width: 100%;
    height: 260px;
    object-fit: cover;
}

.thirdlevel p {
    margin: 30px 0;
}

.product-buy-info {
    width: 100%;
    display: flex;
    justify-content: center;
}

.product-class {
    width: 100%;
}

.product-class p {
    margin-top: 10px;
    width: 100%;
}

.product-class ul {
    list-style: none;
    display: flex;
}

.product-class ul li {
    width: 260px;
    margin: 0 10px;
}

.product-class ul li a {
    display: flex;
    flex-wrap: wrap;
}

.product-class ul li a:hover {
    text-decoration: revert;
}

.product-class ul li h3 {
    margin: 10px;
}

.product-class img {
    width: 100%;
    height: 260px;
    object-fit: contain;
    border: none;
}

.product-class h4 {
    font-size: 12px;
    font-style: italic;
}

@media (max-width: 768px) {
    .product-buy {
        width: 100%;
    }

    .product-buy-info {
        flex-wrap: wrap;
    }

    .product-commodity-image {
        width: 100%;
    }

    .product {
        padding: 20px 15px;
    }

    .product-img {
        height: auto;
    }

    .product-sku {
        display: none;
    }

    .product-details {
        padding: 0;
    }

    .product-content-main {
        padding: 0;
    }

    .product-class img {
        height: 120px;
    }
}
</style>
