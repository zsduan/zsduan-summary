<template>
    <div>
        <div class="page">
            <h2>效果展示</h2>
            <div class="item">
                <div class="tips-box">仅支持电脑端 手机端 请使用 vue-draggable</div>
                <ul class="my-list" ref="myList">
                    <li
                        @dragover="Mydragover($event)"
                        @dragenter="Mydragenter($event , index)"
                        @dragstart="MyDragstart($event , index)"
                        @dragend="Mydragend"
                        draggable="true"
                        :class="item.active ? 'moving' :''"
                        class="list-item"
                        v-for="(item , index) in list"
                        :key="index"
                    >{{index + 1}} {{item.name}}</li>
                </ul>
                <dzs-code title="代码" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/views/drag.vue">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import {code1} from "./config"
export default {
    data() {
        return {
            code1 : code1,
            list: [
                {
                    name: "张珊",
                    active: false,
                },
                {
                    name: "张三",
                    active: false,
                },
                {
                    name: "李四",
                    active: false,
                },
                {
                    name: "王五",
                    active: false,
                },
                {
                    name: "李二狗",
                    active: false,
                },
                {
                    name: "王麻子",
                    active: false,
                },
            ],
            sourceNode: null, //当前正在拖动的元素
            newList: [],
        };
    },
    mounted() {},
    methods: {
        MyDragstart(e, index) {
            setTimeout(() => {
                this.list[index].active = true;
            }, 10);
            this.sourceNode = e.target;
            e.dataTransfer.effectAllowed = "move";
            if (!this.newList.length) {
                this.newList = JSON.parse(JSON.stringify(this.list));
            }
        },
        Mydragend() {
            this.list.forEach((v) => {
                v.active = false;
            });
        },
        Mydragenter(e, index) {
            e.preventDefault();
            if (e.target == this.sourceNode) {
                return;
            }
            const listNode = this.$refs.myList;
            const children = Array.from(this.$refs.myList.children);
            const sourceIndex = children.indexOf(this.sourceNode);
            const targetIndex = children.indexOf(e.target);
            const move = JSON.parse(JSON.stringify(this.list[sourceIndex]));
            const target = JSON.parse(JSON.stringify(this.list[targetIndex]));
            this.newList[targetIndex] = move;
            this.newList[sourceIndex] = target;
            if (sourceIndex < targetIndex) {
                listNode.insertBefore(
                    this.sourceNode,
                    e.target.nextElementSibling
                );
            } else {
                listNode.insertBefore(this.sourceNode, e.target);
            }
        },
        Mydragover(e) {
            e.preventDefault();
        },
    },
};
</script>
<style lang="less" scoped>
.my-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item {
        margin-top: 15px;
        padding: 5px;
        background: var(--ThemeColor);
        border-radius: 5px;
        height: 40px;
        cursor: pointer;
        color: #fff;
        line-height: 30px;
        width: 49%;
    }
    .moving {
        background: transparent;
        color: transparent;
        border: 1px dashed #ccc;
    }
}
</style>