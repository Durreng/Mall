<template>
    <div class="contact-box" @click="toggleContact">
        <div class="contact-info" v-if="showContact">
            <a href="#"><i class="iconfont icon-weixin"></i></a>
            <a href="#"><i class="iconfont icon-QQ"></i></a>
            <a href="#"><i class="iconfont icon-weibo"></i></a>
            <a href="#"><i class="iconfont icon-douyin"></i></a>
        </div>
        <div class="contact-icon" v-else>
            <i class="iconfont icon-fenxiang"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showContact: false, // 控制联系方式的显示与隐藏
        };
    },
    methods: {
        toggleContact() {
            this.showContact = !this.showContact; // 切换显示状态
        },
    },
};
</script>

<style scoped>
@import url('https://at.alicdn.com/t/c/font_4738555_u5kgi71hexd.css?spm=a313x.manage_type_myprojects.i1.9.1c663a81zqxzqc&file=font_4738555_u5kgi71hexd.css');

.contact-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #000;
    color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 20px;
}

.contact-box:hover {
    background-color: #262626;
}

.contact-info {
    display: block;
    padding: 10px 5px;
}

.contact-icon {
    display: block;
}

.contact-icon i {
    font-size: 24px;
    color: #fff;
}

.contact-info i {
    padding: 8px;
    border-radius: 50%;
    margin: 0 5px;
    transition: .2s;
    font-size: 20px;
    color: #fff;
}

.contact-info i:hover {
    background: #f5f5f5;
    color: #000;
}
</style>