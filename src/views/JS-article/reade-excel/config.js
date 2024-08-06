export const code1 = `
<template>
    <section>
        <input type="file" ref="myfile" accept=".xls,.xlsx" @change="changeFile" />
        <div>
            <div v-for="(item, index) in xlsxInfo.html" :key="index">
                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>
                <div class="views-box" v-html="item"></div>
            </div>
        </div>
    </section>
</template>
<script>
import readeExcel from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
        };
    },
    methods: {
        changeFile() {
            readeExcel({
                file: "myfile",
                Vue: this,
                success: (res) => {
                    this.xlsxInfo = res;
                },
            })
        },
    }
};
</script>
`

export const code2 = `
<template>
    <section>
        <input type="file" id="myfile" accept=".xls,.xlsx" @change="changeFile" />
        <div>
            <div v-for="(item, index) in xlsxInfo.html" :key="index">
                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>
                <div class="views-box" v-html="item"></div>
            </div>
        </div>
    </section>
</template>
<script>
import readeExcel from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
        };
    },
    methods: {
        changeFile() {
            readeExcel({
                file: "myfile",
                Vue: this,
                success: (res) => {
                    this.xlsxInfo = res;
                },
            })
        },
    }
};
</script>
`

export const code3 = `
<template>
    <section>
        <input type="file" accept=".xls,.xlsx" @change="changeFile" />
        <div>
            <div v-for="(item, index) in xlsxInfo.html" :key="index">
                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>
                <div class="views-box" v-html="item"></div>
            </div>
        </div>
    </section>
</template>
<script>
import readeExcel from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
        };
    },
    methods: {
        changeFile(e) {
            let file = e.target.files[0];
            readeExcel({
                file: "myfile",
                Vue: this,
                success: (res) => {
                    this.xlsxInfo = res;
                },
            })
        },
    }
};
</script>
`

export const code4 = `
<template>
    <section>
        <div class="ipt-box">
            <el-input v-model="httpUrl" placeholder="请输入网络地址"></el-input>
            <el-button @click="changeFile">读取</el-button>
        </div>
        <div>
            <div v-for="(item, index) in xlsxInfo.html" :key="index">
                <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>
                <div class="views-box" v-html="item"></div>
            </div>
        </div>
    </section>
</template>
<script>
import readeExcel from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
            httpUrl : "",
        };
    },
    methods: {
        changeFile() {
            readeExcel({
                url: httpUrl,
                Vue: this,
                success: (res) => {
                    this.xlsxInfo = res;
                },
            })
        },
    }
};
</script>
`

export const code5 = `
<template>
    <section>
        <input type="file" accept=".xls,.xlsx" @change="changeFile" />
        <div class="button-box">
            <el-button @click="outCvs">导出为 cvs</el-button>
            <el-button @click="outXls">导出为 xls</el-button>
            <el-button @click="outXlsx">导出为 xlsx</el-button>
        </div>
    </section>
</template>
<script>
import readeExcel from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
        };
    },
    methods: {
        changeFile(e) {
            readeExcel({
                file: e.target.files[0],
                Vue: this,
                success: (res) => {
                    this.xlsxInfo = res;
                },
            })
        },
        /**导出为 cvs*/
        outCvs() {
            if(!this.xlsxInfo.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfo.outCvs();
        },
        /**导出为 xls*/
        outXls() {
            if(!this.xlsxInfo.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfo.outXls();
        },
        /**导出为 xlsx*/
        outXlsx() {
            if(!this.xlsxInfo.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfo.outXlsx();
        }
    }
};
</script>
`

export const code6 = `
<template>
    <section>
        <input type="file" accept=".xls,.xlsx" @change="changeFile" />
        <div class="button-box">
            <el-button @click="outCvs">导出为 cvs</el-button>
            <el-button @click="outXls">导出为 xls</el-button>
            <el-button @click="outXlsx">导出为 xlsx</el-button>
        </div>
    </section>
</template>
<script>
import {asyncReadeExcel} from "@/tool/readeExcel";
export default {
    data() {
        return {
            xlsxInfo: {},
        };
    },
    methods: {
        changeFile(e) {
            asyncReadeExcel({
                file: e.target.files[0],
            }).then((res) => {
                this.xlsxInfoByPromise = res;
            })
        },
    }
};
</script>
`