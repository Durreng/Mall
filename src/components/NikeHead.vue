<template>
  <div class="heards">
    <div class="head-logoUser">
      <div>
        <a href=""><i class="iconfont icon-zhinengxuanxie_qiaodan"></i></a>
        <a href=""><i class="iconfont icon-converse"></i></a>
      </div>
      <ul class="head-user">
        <li><a href="">帮助</a>|</li>
        <li><a href="">立即加入</a>|</li>
        <li><a href="">登录</a></li>
      </ul>
    </div>
    <div class="sort">
      <button class="iconfont icon-xialacaidan menu-toggle" @click="toggleMenu" v-if="!isMenuVisible"></button>
      <a href="#" @click.prevent="goToHome"><img src="../assets/image/logo.png" alt="Nike Logo" /></a>
      <ul class="sort-commodity head-user" v-if="isMenuVisible">
        <button class="iconfont icon-guanbi menu-toggle-off" @click="toggleMenu"></button>
        <li v-for="(item, index) in commodities" :key="index" @mouseenter="showDropdown(index)"
          @mouseleave="hideDropdown">
          <a href="#" class="sort-title"
            @click.prevent="item.title === 'Home' ? goToHome() : goToCategory({ id: item.id })">
            {{ item.title }}
          </a>
          <transition name="fade">
            <div v-if="activeIndex === index" class="drop-downMenu" @mouseenter="showDropdown(index)"
              @mouseleave="hideDropdown">
              <ul class="drop-list">
                <li v-for="(subItem, subIndex) in item.items" :key="subIndex">
                  <a id="drop-title" href="#" @click.prevent="goToCategory({ id: subItem.id })">{{ subItem.title }}</a>
                  <ul class="drop-ul">
                    <li id="drop-content" v-for="(content, cIndex) in subItem.contents" :key="cIndex">
                      <a href="#" id="drop-a" @click.prevent="goToSecondaryTow(content.title, content.id)">{{
                        content.title }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>

      <div class="sort-search">
        <div><i class="iconfont icon-sousuo"></i></div>
        <input type="text" placeholder="搜索" />
      </div>
      <div class="sort-shopping">
        <div>
          <a href="#"><i class="iconfont icon-aixin"></i></a>
        </div>
        <div>
          <a href="#"><i class="iconfont icon-gouwuche"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: this.isPC(), // 默认值根据是否为 PC 端设置
    }
  },
  props: {
    commodities: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      default: null
    },
  },

  mounted() {
    this.checkDevice(); // 检查设备类型
    window.addEventListener('resize', this.checkDevice); // 监听窗口大小变化
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice); // 清理事件监听器
  },

  methods: {
    isPC() {
      return window.innerWidth >= 768; // 判断是否为 PC 端
    },
    checkDevice() {
      this.isMenuVisible = this.isPC(); // 根据设备类型更新菜单显示状态
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; // 切换菜单显示状态
    },
    goToHome() {
      this.$emit('navigate', 'Home'); // 触发 navigate 事件，传递 'Home'
    },
    showDropdown(index) {
      this.$emit('update:activeIndex', index);
    },
    hideDropdown() {
      this.$emit('update:activeIndex', null);
    },
    goToCategory(category) {
      this.$emit('navigate', category);
    },
    goToSecondaryTow(category, id) {
      const newUrl = this.$router.resolve({ name: 'Secondary', params: { category, id } }).href; // 获取新的 URL
      this.$router.push({ name: 'Secondary', params: { category, id } }).then(() => {
        window.location.href = newUrl; // 使用新的 URL 刷新页面
      });
    },
  },
  emits: ['update', 'navigate']
}
</script>

<style scoped>
.menu-toggle {
  display: none;
  background: none;
  border: none;
  object-fit: none;
  font-size: 36px;
}

.menu-toggle-off {
  display: none;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .menu-toggle-off {
    display: block;
    margin: 30px;
    margin-bottom: 10px;
    color: #818181;
    background: none;
    border: none;
    font-size: 30px;
    text-align: left;
  }

  .head-logoUser {
    display: none;
  }

  .sort-commodity li {
    padding: 20px;
  }

  .menu-toggle {
    display: block;
    /* 手机端显示按钮 */
    color: #fff;
  }

  .sort-commodity {
    height: auto;
  }

  .sort {
    padding: 0 20px;
    justify-content: space-between;
  }

  .sort a:nth-child(2) {
    margin-left: 50px;
  }

  .sort-commodity {
    width: 100%;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    background: #000;
  }

  .sort-title {
    font-size: 14px;
    padding: 5px 0;
  }

  .sort-search {
    flex-direction: row;
    margin-right: -10px;
    display: none;
  }

  .sort-shopping {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }

  .drop-downMenu {
    position: absolute;
    z-index: 1000;
    top: 80px;
    left: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-height: 100%;
    background: #000;
  }

  .drop-list {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  #drop-content {
    width: 100px;
  }

  .drop-list li {
    width: 100px;
  }

  .sort img {
    width: 140px;
    object-fit: contain;
  }
}
</style>