<template>
    <div class="content-type">
        <!-- <div class="bottom-class">
            <ul>
                <li>
                    <h4>经典系列</h4>
                </li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
            </ul>
            <ul>
                <li>
                    <h4>鞋类</h4>
                </li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
            </ul>
            <ul>
                <li>
                    <h4>服装</h4>
                </li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
            </ul>
            <ul>
                <li>
                    <h4>配件</h4>
                </li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
            </ul>
            <ul>
                <li>
                    <h4>儿童</h4>
                </li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
                <li><a href="#">AF1</a></li>
            </ul>
        </div> -->
        <div class="bottom-class bottom-info">
            <ul>
                <li>
                    <h4>联系</h4>
                </li>
                <li><a href="#">联系方式</a></li>
                <li><a href="#">社媒平台</a></li>
            </ul>
            <!-- <ul>
                <li>
                    <h4>关于NIKE</h4>
                </li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">投资者</a></li>
                <li><a href="#">招纳贤士</a></li>
            </ul> -->
            <div class="web-info">
                <a href="#">© 2024 Nike, Inc. 保留所有权利</a>
                <a href="#">分类游览</a>
                <a href="#">使用条款</a>
                <a href="#">销售条款</a>
                <a href="#">隐私政策</a>
                <a href="#">沪ICP备14009339号-3</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllProducts'
}
</script>

<style scoped>
@media (max-width: 768px) {
    .web-info {
        flex-direction: column;
        margin-top: 30px;
    }

    .web-info a {
        margin: 3px 0;
    }

    .bottom-class {
        margin-bottom: 100px;
    }
}
</style>