<!--
 * @Author: zs.duan
 * @Date: 2023-01-23 17:52:47
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-23 18:14:36
 * @FilePath: \vue2+elui+template\src\views\about-father\about-father.vue
-->

<template>
    <div>
        <div class="entryPrice-box">
            <div class="item">
                <h1>人情钱 收</h1>
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
            </div>
            <div class="item">
                <h1>支出 一览表</h1>
                <el-table height="600" show-summary border :data="OutPriceData" stripe style="width: 100%">
                    <el-table-column prop="name" label="事件名称/任务名称" width="180"></el-table-column>
                    <el-table-column prop="price" sortable label="支出价格" width="180"></el-table-column>
                    <el-table-column prop="num" label="数量和单位" width="180"></el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import entryPrice from "../../assets/data/entry_price.json";
import OutPrice from "../../assets/data/out_price.json";
export default {
    data() {
        return {
            entryPriceData: entryPrice,
            OutPriceData: OutPrice,
        };
    },
    mounted() {
        console.log("入账 ==>", entryPrice);
        console.log("出账 ==>", OutPrice);
    },
};
</script>
<style lang="less" scoped>
.entryPrice-box {
    width: 1200px;
    margin: 0 auto;
    h1 {
        font-size: 30px;
        padding: 10px 0;
        text-align: center;
    }
    .item {
        margin-top: 40px;
    }
}
</style>