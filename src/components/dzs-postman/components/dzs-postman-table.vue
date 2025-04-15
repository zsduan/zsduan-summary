<template>
    <div class="dzs-postman-table">
        <div class="el-table">
            <el-table :data="tableData" style="width: 100%" :border="true">
                <el-table-column prop="name" label="参数名" :width="nameWidth">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.name" @input="inputValue"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="value" label="参数值">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.value" @input="inputValue"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作" :width="nameWidth">
                    <template slot-scope="scope">
                        <dzs-button type="danger" text @click="delTableList(scope.$index)">删除</dzs-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="dzs-postman-table-btn">
                <dzs-button type="primary" text @click="addTableList">添加一行</dzs-button>
            </div>
        </div>
        <div class="input-box">
            <div v-if="isShowError" class="error-text">JSON数据格式错误</div>
            <el-input type="textarea" v-model="tableInput" placeholder="请输入" rows="8"
                @input="tableListInput"></el-input>
        </div>
    </div>
</template>
<script>
/**
 * @name 请求参数配置表格
 * @param {String} type json/Array 输入类型
 * @event change 输入值改变时触发
 * */ 
 import dzsButton from "../../dzs-button";
export default {
    name: 'dzsPostmanTable',
    components: {
        dzsButton
    },
    props: {
        type: {
            type: String,
            default: () => {
                return "json"
            }
        },
        value: {
            type: String,
            default: () => {
                return ""
            }
        }
    },
    model: {
        prop: 'value',
        event: 'update:value'
    },
    watch: {
        value(newVal) {
            if(!JSON.parse(newVal)){
                return
            }
            this.tableInput = newVal;
            this.tableListInput();
        }
    },
    data() {
        return {
            tableData: [],
            tableInput: "",
            nameWidth: "200",
            isShowError: false
        }
    },
    methods: {
        /**删除一行*/
        delTableList(index) {
            this.tableData.splice(index, 1);
            let str = JSON.stringify(this.tableData);
            this.setValue()
        },
        /**添加一行*/
        addTableList() {
            this.tableData.push({
                name: '',
                value: '',
            })
            this.setValue()
        },
        /**处理数据*/
        setValue() {
            if (this.type == 'json') {
                let myJoson = {};
                for (let i = 0; i < this.tableData.length; i++) {
                    myJoson[this.tableData[i].name] = this.tableData[i].value;
                }
                let str = JSON.stringify(myJoson);
                // 逗号换行
                str = str.replace(/},/g, "},\n");
                this.tableInput = str;
                return;
            }
            let str = JSON.stringify(this.tableData);
            // 逗号换行
            str = str.replace(/},/g, "},\n");
            // [] 换行
            str = str.replace(/\[/g, "[\n");
            str = str.replace(/\]/g, "\n]");
            this.tableInput = str;
        },
        tableListInput() {
            try {
                if(this.type == 'json'){
                    let arr = [];
                    for (const key in JSON.parse(this.tableInput)) {
                        arr.push({
                            name: key,
                            value: JSON.parse(this.tableInput)[key]
                        })
                    }
                    this.tableData = arr;
                }else{
                    this.tableData = JSON.parse(this.tableInput);
                }
                this.isShowError = false;
                this.inputValue();
            } catch (e) {
                this.isShowError = true;
            }
        },
        inputValue() {
            this.setValue()
            this.$emit("change", this.tableData);
            this.$emit("update:value", this.tableInput)
        }
    }
}
</script>
<style lang="scss" scoped>
.dzs-postman-table {
    display: flex;

    .dzs-postman-table-btn {
        margin-top: 10px;
    }

    .input-box {
        width: 300px;
        margin-left: 10px;

        .error-text {
            color: red;
            padding-bottom: 5px;
        }
    }
}
</style>