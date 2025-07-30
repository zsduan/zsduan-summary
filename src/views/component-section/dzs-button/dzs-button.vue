<template>
    <section>
        <public-item title="基本用法">
            <div class="flex-box">
                <dzs-button>默认按钮</dzs-button>
                <dzs-button type="primary">主要按钮</dzs-button>
                <dzs-button type="success">成功按钮</dzs-button>
                <dzs-button type="info">信息按钮</dzs-button>
                <dzs-button type="warning">警告按钮</dzs-button>
                <dzs-button type="danger">危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="朴素按钮">
            <div class="flex-box">
                <dzs-button plain>朴素按钮</dzs-button>
                <dzs-button type="primary" plain>主要按钮</dzs-button>
                <dzs-button type="success" plain>成功按钮</dzs-button>
                <dzs-button type="info" plain>信息按钮</dzs-button>
                <dzs-button type="warning" plain>警告按钮</dzs-button>
                <dzs-button type="danger" plain>危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="圆润按钮">
            <div class="flex-box">
                <dzs-button round>圆润按钮</dzs-button>
                <dzs-button type="primary" round>主要按钮</dzs-button>
                <dzs-button type="success" round>成功按钮</dzs-button>
                <dzs-button type="info" round>信息按钮</dzs-button>
                <dzs-button type="warning" round>警告按钮</dzs-button>
                <dzs-button type="danger" round>危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="圆形按钮">
            <div class="flex-box">
                <dzs-button circle>
                    <template #icon>
                        <i class="el-icon-setting"></i>
                    </template>
                </dzs-button>
                <dzs-button type="primary" circle icon="el-icon-edit">
                </dzs-button>
                <dzs-button type="success" circle icon="el-icon-edit">
                </dzs-button>
                <dzs-button type="info" circle icon="el-icon-edit">
                </dzs-button>
                <dzs-button type="warning" circle icon="el-icon-edit">
                </dzs-button>
                <dzs-button type="danger" circle icon="el-icon-edit">
                </dzs-button>
            </div>
        </public-item>
        <public-item title="带图标">
            <div class="flex-box" icon="el-icon-edit">
                <dzs-button icon="el-icon-edit">默认按钮</dzs-button>
                <dzs-button type="primary">
                    <template #icon-right>
                        <i class="el-icon-edit"></i>
                    </template>
                    图标在右边按钮
                </dzs-button>
                <dzs-button type="success" icon="el-icon-edit">成功按钮</dzs-button>
                <dzs-button type="info" icon="el-icon-edit">信息按钮</dzs-button>
                <dzs-button type="warning" icon="el-icon-edit">警告按钮</dzs-button>
                <dzs-button type="danger" icon="el-icon-edit">危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="自定义颜色">
            <div class="flex-box">
                <dzs-button className="my-button">默认按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="按钮大小">
            <div class="flex-box">
                <dzs-button>默认按钮</dzs-button>
                <dzs-button size="medium">medium按钮</dzs-button>
                <dzs-button size="small">small按钮</dzs-button>
                <dzs-button size="mini">mini按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="文字按钮">
            <div class="flex-box">
                <dzs-button text>默认按钮</dzs-button>
                <dzs-button type="primary" text>主要按钮</dzs-button>
                <dzs-button type="success" text>成功按钮</dzs-button>
                <dzs-button type="info" text>信息按钮</dzs-button>
                <dzs-button type="warning" text>警告按钮</dzs-button>
                <dzs-button type="danger" text>危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="禁用按钮" :code="code1">
            <div class="flex-box">
                <dzs-button disabled>默认按钮</dzs-button>
                <dzs-button type="primary" disabled>主要按钮</dzs-button>
                <dzs-button type="success" disabled>成功按钮</dzs-button>
                <dzs-button type="info" disabled>信息按钮</dzs-button>
                <dzs-button type="warning" disabled>警告按钮</dzs-button>
                <dzs-button type="danger" disabled>危险按钮</dzs-button>
            </div>
            <div class="flex-box" >
                <dzs-button disabled plain>默认按钮</dzs-button>
                <dzs-button type="primary" disabled plain>主要按钮</dzs-button>
                <dzs-button type="success" disabled plain>成功按钮</dzs-button>
                <dzs-button type="info" disabled plain>信息按钮</dzs-button>
                <dzs-button type="warning" disabled plain>警告按钮</dzs-button>
                <dzs-button type="danger" disabled plain>危险按钮</dzs-button>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
// import dzsButton from "@/components/dzs-button";

import { code1 } from "./config";
import { descData } from "./desc";
export default {
    components: {
        // dzsButton
    },
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-button/dzs-button.vue",
                title: "组件源码"
            },
            tableData: descData,
        }
    }
}
</script>
<style lang="scss" scoped>
.flex-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    align-items: center;
}

.my-button {
    background: red;
    border: 1px solid red;
    color: #fff;
    &:hover {
        background: red;
        opacity: 0.8;
        color: #fff;
        span{
            color: #fff;
        }
    }

    &:active {
        background-color: red;
        color: #fff;
        border: 1px solid red;
        span {
            color: #fff;
        }
    }
}
</style>