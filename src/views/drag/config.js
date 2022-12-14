/*
 * @Author: zs.duan
 * @Date: 2022-11-29 17:33:01
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 17:34:06
 * @FilePath: \vue2+elui+template\src\views\drag\config.js
 */

export const code1 = `
// html
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
// data
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
// js
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
`;