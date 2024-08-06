<template>
    <div>
        <div class="entryPrice-box">
            <el-radio-group class="radio-group" v-model="radio">
                <el-radio-button label="收入"></el-radio-button>
                <el-radio-button label="支出"></el-radio-button>
            </el-radio-group>

            <el-card class="item" v-if="radio == '收入'">
                <h1>人情钱 收入一览表</h1>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="weixinPrice"
                                title="微信收入"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="notWeixinPrice"
                                title="普通人情收入"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="1000" title="旷大唢呐"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="2000" title="旷二唢呐"></el-statistic>
                        </div>
                    </el-col>
                </el-row>
                <div class="search_box_top">
                    <div></div>
                    <div class="search_box" :class="is_focus_en ? 'search_focus' : ''">
                        <div class="input_box">
                            <el-input v-model="searchValueEn" @input="inputValue('en')" class="input"
                                placeholder="Search" clearable @focus="is_focus_en = true" @blur="inputBlur('en')">
                                <el-select slot="prepend" :disabled="is_focus_en" v-model="EnSelect"
                                    placeholder="请选择搜索方式" @change="inputValue('en')">
                                    <el-option key="name" label="送情人姓名" value="name"></el-option>
                                    <el-option key="price" label="送情价格" value="price"></el-option>
                                </el-select>
                            </el-input>
                        </div>
                        <i class="el-icon-search"></i>
                    </div>
                </div>
                <el-table height="600" show-summary border :data="entryPriceData" stripe style="width: 100%">
                    <el-table-column prop="name" label="送情人姓名" width="180"></el-table-column>
                    <el-table-column prop="price" sortable label="送情价格" width="180"></el-table-column>
                    <el-table-column prop="is_weixin" sortable label="是否为微信" width="180">
                        <template slot-scope="scope">
                            <el-tag v-if="scope.row.is_weixin" type="success">是</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="is_special" sortable label="是否特殊备注" width="180">
                        <template slot-scope="scope">
                            <el-tag v-if="scope.row.is_special" type="success">是</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
            </el-card>
            <el-card class="item" v-else>
                <h1>支出 一览表</h1>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="outAllPrice"
                                title="共计花费"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="12800" title="酒席"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="3000" title="小嬢单独"></el-statistic>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-statistic group-separator="," :precision="2" :value="1000" title="后妈 单独"></el-statistic>
                        </div>
                    </el-col>
                </el-row>
                <div class="search_box_top">
                    <div></div>
                    <div class="search_box" :class="is_focus_out ? 'search_focus' : ''">
                        <div class="input_box">
                            <el-input v-model="searchValueOut" @input="inputValue('out')" class="input"
                                placeholder="Search" clearable @focus="is_focus_out = true" @blur="inputBlur('out')">
                                <el-select slot="prepend" :disabled="is_focus_out" v-model="OutSelect"
                                    placeholder="请选择搜索方式" @change="inputValue('out')">
                                    <el-option key="name" label="事件名称/人物名称" value="name"></el-option>
                                    <el-option key="price" label="支出价格" value="price"></el-option>
                                </el-select>
                            </el-input>
                        </div>
                        <i class="el-icon-search"></i>
                    </div>
                </div>
                <el-table height="600" show-summary border :data="OutPriceData" stripe style="width: 100%">
                    <el-table-column prop="name" label="事件名称/人物名称" width="180"></el-table-column>
                    <el-table-column prop="price" sortable label="支出价格" width="180"></el-table-column>
                    <el-table-column prop="num" label="数量和单位" width="180"></el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
            </el-card>
        </div>
    </div>
</template>
<script>
import entryPrice from "./entry_price.json";
import OutPrice from "./out_price.json";
import Search from "@/tool/fuzzySearch.js";
export default {
    data() {
        return {
            entryPriceData: entryPrice,
            OutPriceData: OutPrice,
            is_focus_en: false,
            searchValueEn: "",
            is_focus_out: false,
            searchValueOut: "",
            EnSelect: "name",
            OutSelect: "name",
            radio: "收入",
            weixinPrice: 0,
            notWeixinPrice: 0,
            outAllPrice: 0,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        inputBlur() {
            this.is_focus_en = false;
            this.is_focus_out = false;
        },
        inputValue(type) {
            if (type == "en") {
                Search({
                    list: entryPrice,
                    searValue: this.searchValueEn,
                    key: this.EnSelect,
                    success: (res) => {
                        this.entryPriceData = res;
                    },
                });
            } else {
                Search({
                    list: OutPrice,
                    searValue: this.searchValueOut,
                    key: this.OutSelect,
                    success: (res) => {
                        this.OutPriceData = res;
                    },
                });
            }
        },
        init() {
            let weixin = entryPrice.filter(item => { return item.is_weixin });
            this.weixinPrice = 0;
            weixin.forEach(element => {
                this.weixinPrice += element.price;
            });
            let NotWeixin = entryPrice.filter(item => { return !item.is_weixin });
            this.notWeixinPrice = 0;
            NotWeixin.forEach(element => {
                this.notWeixinPrice += element.price;
            });
            this.outAllPrice = 0;
            OutPrice.forEach(element => {
                this.outAllPrice += element.price;
            });
        }
    },
};
</script>
<style lang="scss" scoped>
.entryPrice-box {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 30px;

    .radio-group {
        padding-top: 30px;
    }

    h1 {
        font-size: 30px;
        padding: 10px 0;
        text-align: center;
    }

    .item {
        margin-top: 40px;
    }

    .search_box {
        background-color: #d1d0d06b;
        border-radius: 20px;
        width: 340px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        padding-right: 10px;
        transition: all 0.3s;
        margin-left: 20px;

        /deep/.el-select {
            width: 160px;
        }

        /deep/.el-input-group__prepend {
            border: 0;
            background: transparent;
        }

        /deep/.el-input__suffix {
            // top: 50%;
            display: none;
        }

        .input {
            width: 80%;
            height: 36px;

            /deep/ input {
                height: 100%;
                border: 0;
                border-radius: 20px;
                background-color: transparent;
            }
        }
    }

    .search_focus {
        background-color: #f9f9f9;
        border: 1px solid #b1a8a86b;
        width: 500px;
        padding-right: 20px;
    }

    .search_box_top {
        padding: 10px 0;
        display: flex;
        justify-content: right;
    }
}
</style>