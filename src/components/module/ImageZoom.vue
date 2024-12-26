<template>
    <div v-if="images.length > 0" class="product-img" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <img :src="currentImage || images" alt="" @mouseenter="showAmplifier" @mouseleave="hideAmplifier">
        <div class="amplifier" v-if="isAmplifierVisible" :style="amplifierStyle"></div>
        <div class="enlarge" v-if="isEnlargeVisible" :style="enlargeStyle"></div>
    </div>
    <div v-else>
        <p>没有可用的图片。</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        images: {
            type: Array,
            default: () => [], // 确保 images 有默认值
        },
    },
    data() {
        return {
            currentImage: '', // 初始化为第一张图片
            isAmplifierVisible: false,
            isEnlargeVisible: false,
            amplifierStyle: {},
            enlargeStyle: {},
        };
    },
    methods: {
        showAmplifier() {
            this.isAmplifierVisible = true;
            this.isEnlargeVisible = true;
        },
        hideAmplifier() {
            this.isAmplifierVisible = false;
            this.isEnlargeVisible = false;
        },
        handleMouseMove(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const amplifierSize = 200; // 放大区域的大小
            this.amplifierStyle = {
                display: 'block',
                width: `${amplifierSize}px`,
                height: `${amplifierSize}px`,
                background: `rgba(56, 120, 249, 0.2)`,
                position: 'absolute',
                top: `${Math.max(0, Math.min(y - amplifierSize / 2, rect.height - amplifierSize))}px`,
                left: `${Math.max(0, Math.min(x - amplifierSize / 2, rect.width - amplifierSize))}px`,
                opacity: 0.5,
            };

            this.enlargeStyle = {
                background: `url('${this.currentImage || this.images}') no-repeat`,
                backgroundSize: '250% 250%',
                position: 'absolute',
                top: '0',
                right: '-510px', // 放大区域显示在右侧
                width: '470px', // 放大区域的宽度
                height: '470px', // 放大区域的高度
                backgroundPosition: `-${x * 1.5 - amplifierSize / 2}px -${y * 1.5 - amplifierSize / 2}px`,
                opacity: 1,
            };
        },
        switchImage(image) {
            this.currentImage = image; // 更新当前图片
        },
    },
};
</script>

<style scoped>
.product-img {
    position: relative;
    text-align: right;
    width: 100%;
    height: 600px;
}

.product-img img {
    border: 1px solid #f3f2f2;
}

.amplifier {
    pointer-events: none;
    /* 禁止放大器与鼠标事件冲突 */
}

.enlarge {
    border: 1px solid #121212;
    /* 可以自定义样式 */
    display: inline-block;
    position: relative;
    z-index: 99;
}
</style>
