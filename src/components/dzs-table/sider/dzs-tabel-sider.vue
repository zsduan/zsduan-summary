<template>
    <div class="tabel-sider-box">
        <el-popover :offset="60" placement="left-start" width="80%" trigger="click">
            <div :style="{...titleStyle}">列设置</div>
            <el-checkbox-group v-model="goupList">
                <el-checkbox v-for="(item,index) in columnList" :checked="item.isShow" :key="index" :label="item" @change="changeCheckbox(index)">{{item.lable}}</el-checkbox>
            </el-checkbox-group>
            <div slot="reference" class="el-icon">
                <i class="el-icon-setting"></i>
            </div>
        </el-popover>
        <el-popover :offset="30" placement="left-start" width="80%" trigger="click">
            <div class="title" :style="{...titleStyle}">表格栏高度设置</div>
            <el-radio-group v-model="radio" @change="changeHeight">
                <el-radio-button v-for="(item,index) in widthList" :key="index" :label="item.value">{{item.label}}</el-radio-button>
            </el-radio-group>
            <div slot="reference" class="el-icon">
                <i class="el-icon-s-operation"></i>
            </div>
        </el-popover>
    </div>
</template>
<script>
export default {
    name: "dzs-tabel-sider",
    props: {
        list: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    computed: {
        returnList() {
            return this.columnList.filter((item) => {
                return item.isShow;
            });
        },
    },
    data() {
        return {
            columnList: [],
            goupList: [],
            widthList : [
                {
                    label : '自动',
                    value : '',
                },
                {
                    label : '小',
                    value : 'mini',
                },
                {
                    label : '中',
                    value : 'middle',
                },
                {
                    label : '大',
                    value : 'max',
                },
            ],
            radio : '',
            titleStyle : {
                padding: '5px 0',
                'border-bottom': '1px solid #ebeef5',
                'font-size': '14px',
                color: '#606266',
                'margin-bottom': '10px',
            },
        };
    },
    watch: {
        list: {
            handler(val) {
                if (!val.length) return;
                this.columnList = JSON.parse(JSON.stringify(val));
                this.columnList.forEach((item) => {
                    item.isShow = true;
                });
            },
            deep: true,
            immediate: true,
        },
    },
    methods : {
        changeCheckbox(index) {
            this.columnList[index].isShow = !this.columnList[index].isShow;
            this.$set(this.columnList, index, this.columnList[index]);
            this.$emit("change", this.returnList);
        },
        /**改变高度*/
        changeHeight() {
            let index = this.widthList.findIndex((item) => {
                return item.value === this.radio;
            });
            window.localStorage.setItem("tableHeight", this.widthList[index].value);
            this.$emit("changeHeight", this.widthList[index].value);
        }, 
    }
};
</script>
<style lang="less" scoped>
.tabel-sider-box {
    width: 30px;
    height: 100%;
    background-color: var(--ThemeColor01);
    .el-icon {
        padding: 10px 0;
        text-align: center;
    }
    .el-icon-s-operation,.el-icon-setting {
        color: rgb(124, 124, 124);
        font-size: 20px;
        cursor: pointer;
    }
}
</style>