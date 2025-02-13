<template>
    <section>
        <public-item v-for="(item, index) in list" :key="index" :title="item.title" :code="item.code">
        </public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1, code2, code3 , code4 , code5 , code6 , code7 , code8} from './config';
import { code9, code10} from './config';
export default {
    data() {
        return {
            list : [
                {
                    title : "深拷贝1",
                    code : {
                        title : "代码示例",
                        code : code1,
                        lang : "js"
                    },
                },
                {
                    title : "深拷贝2",
                    code : {
                        title : "代码示例",
                        code : code9,
                        lang : "js"
                    },
                },
                {
                    title : "睡眠",
                    code : {
                        title : "代码示例",
                        code : code2,
                        lang : "js"
                    },
                },
                {
                    title : "多为数组拉平",
                    code : {
                        title : "代码示例",
                        code : code3,
                        lang : "js"
                    },
                },
                {
                    title : "升序",
                    code : {
                        title : "代码示例",
                        code : code4,
                        lang : "js"
                    },
                },
                {
                    title : "降序",
                    code : {
                        title : "代码示例",
                        code : code5,
                        lang : "js"
                    },
                },
                {
                    title : "反转字符串",
                    code : {
                        title : "代码示例",
                        code : code6,
                        lang : "js"
                    },
                },
                {
                    title : "将url参数转换为对象",
                    code : {
                        title : "代码示例",
                        code : code7,
                        lang : "js"
                    },
                },
                {
                    title : "将对象转换为url参数",
                    code : {
                        title : "代码示例",
                        code : code8,
                        lang : "js"
                    },
                },
                {
                    title : "随机数",
                    code : {
                        title : "代码示例",
                        code : code10,
                        lang : "js"
                    },
                }
            ]
        }
    }
}
</script>