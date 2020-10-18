<template>
    <div class="user">
        <!-- 顶部 -->
        <div class="userbg w">
            <div class="userTop w">
                <div class="avatar">
                    <img src="../assets/image/pic1.jpg">
                </div>
                <div class="userName">
                    <p>钟老师</p>
                    <p>辅导小猫小学</p>
                </div>
                <div class="msgBtn">
                    <button>编辑信息</button>
                </div>
            </div>
        </div>
        <!-- 宫格 -->
        <div class="userMid">
            <div class="midContent" v-for="(item,index) in images" :key="item.id">
                <div class="midpart">
                    <img :src="item.pic"></img>
                    <p>{{item.val}}</p>
                </div>
            </div>
        </div>
        <!-- 单元格 -->
        <van-cell-group style="margin-top: 0.8rem">
            <van-cell title="设置工作时间" icon="clock-o" is-link to="index" />
            <van-cell title="送你鲜花" icon="flower-o" is-link to="index" />
            <van-cell title="生成教师邀请码" icon="qr" is-link to="index" />
        </van-cell-group>

        <van-cell-group style="margin-top: 0.8rem">
            <van-cell title="系统通知" icon="warning-o" is-link to="index" />
            <van-cell title="客服" icon="service-o" is-link to="index" />
            <van-cell title="设置" icon="setting-o" is-link to="index" />
            <van-cell title="内容推送" icon="bullhorn-o">
                <template #right-icon>
                    <van-switch v-model="checked" size="26" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-button color="#5f60b5" block style="margin :auto;margin-top: 1rem;width:80%;border-radius: 10px;">退出账号
        </van-button>
        <div style="height: 1rem;"></div>
        <tabbar></tabbar>
    </div>
</template>

<script>
	import tabbar from '../components/Tabbar';
    import Vue from 'vue';
    import { Cell, CellGroup, Switch, Button } from 'vant';
    Vue.use(Cell).use(CellGroup).use(Switch).use(Button);
    export default {
		name:'user',
        components: {
            tabbar
        },
        data() {
            return {
                checked: true,
                images: [
                    {
                        id: 1,
                        pic: require('../assets/icon/表情.png'),
                        val: '孩子'
                    },
                    {
                        id: 2,
                        pic: require('../assets/icon/喜欢.png'),
                        val: '收藏夹'
                    },
                    {
                        id: 3,
                        pic: require('../assets/icon/云盘.png'),
                        val: '云盘'
                    },
                    {
                        id: 4,
                        pic: require('../assets/icon/解释.png'),
                        val: '常见问题'
                    }
                ]
            };
        },
        methods: {},
    };
</script>
<style>
    @import "../style/user/index.css";
</style>