<template>
    <div class="thirdlevel">
        <div class="secondary-class">
            <h4>Filter</h4>
            <div class="secondary-filter">
                <div @click="toggleFilter">
                    <button class="secondary-model">MODEL</button>
                    <span class="iconfont">{{ isVisible ? '&#xe603;' : '&#xe602;' }}</span>
                </div>
                <div class="secondary-xuanz" v-show="isVisible">
                    <!-- <h5>品牌</h5>
                    <div v-for="(brand, index) in allBrands" :key="index">
                        <input type="checkbox" :id="brand.replace(/\s+/g, '_')" :value="brand"
                            @change="updateSelectedCategories" :checked="selectedTitles.includes(brand)">
                        <label :for="brand.replace(/\s+/g, '_')">{{ brand }}</label>
                    </div> -->
                    <div v-for="(tag, index) in allTags" :key="index">
                        <input type="checkbox" :id="tag.replace(/\s+/g, '_')" :value="tag" @change="updateSelectedTags"
                            :checked="selectedTags.includes(tag)">
                        <label :for="tag.replace(/\s+/g, '_')">{{ tag }}</label>
                    </div>
                </div>
            </div>
        </div>


        <div v-if="filteredProducts.length" class="secondary-thirdlevel">
            <ul>
                <li v-for="(item, index) in filteredProducts" :key="index" class="thirdlevel-title">
                    <a href="#" @click="handleClick(item.ids)" id="thirdlevel-thumbnail">
                        <img :src="item.image" alt="">
                    </a>
                    <div class="secondary-price">
                        <div>
                            <a href="#" @click="handleClick(item.ids)">
                                <p>{{ item.brand }}</p>
                            </a>
                            <p>￥{{ item.price }} ≈ ${{ item.dao }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>没有找到相关商品。</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            categoryData: [], // 存储根据类别获取的数据
            allBrands: [], // 存储所有品牌
            allTags: [], // 存储所有标签
            selectedTitles: [], // 选中的品牌
            selectedTags: [], // 选中的标签
            isVisible: false,
        };
    },

    created() {
        this.fetchCommodities();
    },

    computed: {
        filteredProducts() {
            return this.categoryData.filter(item => {
                const brandMatch = this.selectedTitles.length === 0 || this.selectedTitles.includes(item.brand);
                const tagMatch = this.selectedTags.length === 0 || item.tag.split(',').some(tag => this.selectedTags.includes(tag.trim()));
                return brandMatch && tagMatch; // 确保品牌和标签都匹配
            });
        }
    },

    methods: {
        handleClick(title) {
            this.$router.push({ name: 'ProductDetails', params: { title } });
        },

        toggleFilter() {
            this.isVisible = !this.isVisible; // 切换显示状态
        },

        updateSelectedCategories(event) {
            const brand = event.target.value;
            if (event.target.checked) {
                this.selectedTitles.push(brand); // 添加到 selectedTitles
            } else {
                this.selectedTitles = this.selectedTitles.filter(item => item !== brand); // 从 selectedTitles 中移除
            }
        },

        updateSelectedTags(event) {
            const tag = event.target.value;
            if (event.target.checked) {
                this.selectedTags.push(tag); // 添加到 selectedTags
            } else {
                this.selectedTags = this.selectedTags.filter(item => item !== tag); // 从 selectedTags 中移除
            }
        },

        async fetchCommodities() {
            const categoryId = this.$route.params.id;
            try {
                const response = await axios.get(`https://admin.findsreps.com/api/template_shop?filter={"category_id":"${categoryId}"}`);
                this.categoryData = response.data.data.rows.map(item => ({
                    brand: item.title,
                    image: item.image,
                    price: item.moeny,
                    dao: item.bi.lv,
                    views: item.views,
                    ids: item.id,
                    row: item.row,
                    tag: item.tag
                }));

                // 从 categoryData 中提取所有品牌
                const brands = new Set(this.categoryData.map(item => item.brand));
                this.allBrands = Array.from(brands); // 将 Set 转换为数组
                console.log(this.allBrands)

                // 从 categoryData 中提取所有标签
                const tags = new Set();
                this.categoryData.forEach(item => {
                    if(item.tag) {
                        item.tag.split(',').forEach(tag => tags.add(tag.trim())); // 拆分并添加标签
                    }
                });
                this.allTags = Array.from(tags); // 将 Set 转换为数组
            } catch (error) {
                console.error("获取商品数据失败:", error);
                alert("无法加载商品数据，请稍后再试。");
            }
        },
    }
};
</script>

<style>
.thirdlevel {
    display: flex;
    justify-content: center;
}

.thirdlevel div p {
    margin: 10px 0;
}

.secondary-class {
    width: 300px;
}

.secondary h4 {
    font-size: 24px;
    margin-bottom: 20px;
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

.secondary-filter span {
    position: absolute;
    top: 18px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
}

.secondary-filter {
    position: relative;
    border: 1px solid rgb(231, 231, 231);
    margin-top: 10px;
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
    padding-left: 20px;
    font-size: 14px;
    position: relative;
    width: 100%;
    cursor: pointer;
}

.secondary-xuanz div:hover label {
    font-weight: 600;
    text-decoration: underline  ;
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
    top: 4px;
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
    top: 6px;
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
    .thirdlevel {
        display: flex;
        flex-wrap: wrap;
    }

    .secondary-thirdlevel ul li {
        padding: 0;
    }
}
</style>