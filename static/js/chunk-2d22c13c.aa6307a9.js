(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c13c"],{f260:function(n,e,t){"use strict";t.r(e),t.d(e,"code1",(function(){return s})),t.d(e,"code2",(function(){return l})),t.d(e,"code3",(function(){return i})),t.d(e,"code4",(function(){return o})),t.d(e,"code5",(function(){return x})),t.d(e,"code6",(function(){return c}));const s='\n<template>\n    <section>\n        <input type="file" ref="myfile" accept=".xls,.xlsx" @change="changeFile" />\n        <div>\n            <div v-for="(item, index) in xlsxInfo.html" :key="index">\n                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>\n                <div class="views-box" v-html="item"></div>\n            </div>\n        </div>\n    </section>\n</template>\n<script>\nimport readeExcel from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n        };\n    },\n    methods: {\n        changeFile() {\n            readeExcel({\n                file: "myfile",\n                Vue: this,\n                success: (res) => {\n                    this.xlsxInfo = res;\n                },\n            })\n        },\n    }\n};\n<\/script>\n',l='\n<template>\n    <section>\n        <input type="file" id="myfile" accept=".xls,.xlsx" @change="changeFile" />\n        <div>\n            <div v-for="(item, index) in xlsxInfo.html" :key="index">\n                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>\n                <div class="views-box" v-html="item"></div>\n            </div>\n        </div>\n    </section>\n</template>\n<script>\nimport readeExcel from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n        };\n    },\n    methods: {\n        changeFile() {\n            readeExcel({\n                file: "myfile",\n                Vue: this,\n                success: (res) => {\n                    this.xlsxInfo = res;\n                },\n            })\n        },\n    }\n};\n<\/script>\n',i='\n<template>\n    <section>\n        <input type="file" accept=".xls,.xlsx" @change="changeFile" />\n        <div>\n            <div v-for="(item, index) in xlsxInfo.html" :key="index">\n                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>\n                <div class="views-box" v-html="item"></div>\n            </div>\n        </div>\n    </section>\n</template>\n<script>\nimport readeExcel from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n        };\n    },\n    methods: {\n        changeFile(e) {\n            let file = e.target.files[0];\n            readeExcel({\n                file: "myfile",\n                Vue: this,\n                success: (res) => {\n                    this.xlsxInfo = res;\n                },\n            })\n        },\n    }\n};\n<\/script>\n',o='\n<template>\n    <section>\n        <div class="ipt-box">\n            <el-input v-model="httpUrl" placeholder="请输入网络地址"></el-input>\n            <el-button @click="changeFile">读取</el-button>\n        </div>\n        <div>\n            <div v-for="(item, index) in xlsxInfo.html" :key="index">\n                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>\n                <div class="views-box" v-html="item"></div>\n            </div>\n        </div>\n    </section>\n</template>\n<script>\nimport readeExcel from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n            httpUrl : "",\n        };\n    },\n    methods: {\n        changeFile() {\n            readeExcel({\n                url: httpUrl,\n                Vue: this,\n                success: (res) => {\n                    this.xlsxInfo = res;\n                },\n            })\n        },\n    }\n};\n<\/script>\n',x='\n<template>\n    <section>\n        <input type="file" accept=".xls,.xlsx" @change="changeFile" />\n        <div class="button-box">\n            <el-button @click="outCvs">导出为 cvs</el-button>\n            <el-button @click="outXls">导出为 xls</el-button>\n            <el-button @click="outXlsx">导出为 xlsx</el-button>\n        </div>\n    </section>\n</template>\n<script>\nimport readeExcel from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n        };\n    },\n    methods: {\n        changeFile(e) {\n            readeExcel({\n                file: e.target.files[0],\n                Vue: this,\n                success: (res) => {\n                    this.xlsxInfo = res;\n                },\n            })\n        },\n        /**导出为 cvs*/\n        outCvs() {\n            if(!this.xlsxInfo.xlsxname) {\n                this.$message.error("请先选择文件");\n                return;\n            }\n            this.xlsxInfo.outCvs();\n        },\n        /**导出为 xls*/\n        outXls() {\n            if(!this.xlsxInfo.xlsxname) {\n                this.$message.error("请先选择文件");\n                return;\n            }\n            this.xlsxInfo.outXls();\n        },\n        /**导出为 xlsx*/\n        outXlsx() {\n            if(!this.xlsxInfo.xlsxname) {\n                this.$message.error("请先选择文件");\n                return;\n            }\n            this.xlsxInfo.outXlsx();\n        }\n    }\n};\n<\/script>\n',c='\n<template>\n    <section>\n        <input type="file" accept=".xls,.xlsx" @change="changeFile" />\n        <div class="button-box">\n            <el-button @click="outCvs">导出为 cvs</el-button>\n            <el-button @click="outXls">导出为 xls</el-button>\n            <el-button @click="outXlsx">导出为 xlsx</el-button>\n        </div>\n    </section>\n</template>\n<script>\nimport {asyncReadeExcel} from "@/tool/readeExcel";\nexport default {\n    data() {\n        return {\n            xlsxInfo: {},\n        };\n    },\n    methods: {\n        changeFile(e) {\n            asyncReadeExcel({\n                file: e.target.files[0],\n            }).then((res) => {\n                this.xlsxInfoByPromise = res;\n            })\n        },\n    }\n};\n<\/script>\n'}}]);
//# sourceMappingURL=chunk-2d22c13c.aa6307a9.js.map