<template>
    <div class="tabel-sider-box" v-if="showSiders.length">
        <el-popover :offset="80" placement="left-start" width="80%" trigger="click" v-if="showSiders.includes('search')">
            <div class="title" :style="{...titleStyle}">搜索</div>
            <div class="ipt-box">
                <el-input placeholder="请输入内容" v-model="searchValue" @input="changeSearch">
                    <el-select v-model="searchSelect" slot="prepend" placeholder="请选择">
                        <el-option :label="item.label" :value="item.key" v-for="(item,index) in columnList" :key="index"></el-option>
                    </el-select>
                </el-input>
            </div>
            <div slot="reference" class="el-icon">
                <i class="el-icon-search"></i>
            </div>
        </el-popover>
        <el-popover :offset="60" placement="left-start" width="80%" trigger="click" v-if="showSiders.includes('column')">
            <div :style="{...titleStyle}">列设置</div>
            <el-checkbox-group v-model="goupList">
                <el-checkbox v-for="(item,index) in columnList" :checked="item.isShow" :key="index" :label="item" @change="changeCheckbox(index)">{{item.label}}</el-checkbox>
            </el-checkbox-group>
            <div slot="reference" class="el-icon">
                <i class="el-icon-setting"></i>
            </div>
        </el-popover>
        <el-popover :offset="30" placement="left-start" width="80%" trigger="click" v-if="showSiders.includes('height')">
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
import deepCopy from '../deepCopy';
import blurSearch from './blurSearch';
export default {
    name: "dzs-tabel-sider",
    props: {
        column: {
            type: Array,
            default: () => {
                return [];
            },
        },
        list : {
            type : Array,
            default : ()=>{
                return []
            }
        },
        forceSearch: {
            type: Boolean,
            default: false,
        },
        'show-siders' : {
            type : Array,
            default : () =>{
                return ['search','column','height']
            }
        }
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
            searchValue : '',
            searchSelect : "",
            tableData : [],
        };
    },
    watch: {
        column: {
            handler(val) {
                if (!val.length) return;
                this.columnList = JSON.parse(JSON.stringify(val));
                this.columnList.forEach((item) => {
                    item.isShow = true;
                });
                let tableHeight = window.localStorage.getItem("dzs-table-height");
                this.radio = tableHeight ? tableHeight : '';
                this.searchSelect = this.columnList[0].key;
                this.changeHeight();
            },
            deep: true,
            immediate: true,
        },
        list : {
            handler(val){
                if(this.tableData.length) return;
                const list = deepCopy(val);
                // 拉平数据
                let tableData = [];
                const setData = (list) =>{
                    list.forEach((item)=>{
                        if(item.children && item.children.length){
                            setData(item.children);
                            tableData.push(item);
                        }else{
                            tableData.push(item);
                        }
                    });
                }
                setData(list);
                this.tableData = tableData;
            },
            deep : true,
            immediate : true,
        }
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
            window.localStorage.setItem("dzs-table-height", this.widthList[index].value);
            this.$emit("changeHeight", this.widthList[index].value);
        },
        /**搜索*/
        changeSearch(){
            if(this.tableData.length > 200 && !this.forceSearch){
                this.$message({
                    message : "数据量过大，搜索可能会影响性能，已经关闭该功能 如果需要可以使用强制搜索功能！",
                    type : "warning"
                });
                return;
            }
            blurSearch({
                list : this.tableData,
                key : this.searchSelect,
                searValue : this.searchValue,
                success : (list)=>{
                    this.$emit("search",list);
                }
            })
        } 
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
:deep(.el-select .el-input) {
    width: 100px;
}
</style>