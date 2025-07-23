<template>
    <div>
        <el-upload :class="{ 'upload-dzs': true, 'upload-dzs-phone': isPhone }" :drag="!isButton" :action="action"
            :multiple="multiple" :file-list="fileList" :limit="limit" :before-upload="beforeUpload"
            :on-success="handleSuccess" :on-exceed="handleExceed" :auto-upload="autoUpload" :on-change="changeFile"
            :show-file-list="true">
            <div v-if="!isButton">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text" v-if="!isPhone">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__text" v-else><em>点击上传文件</em></div>
            </div>
            <el-button type="primary" v-if="isButton">点击上传</el-button>
            <div v-if="isOpenTip" class="el-upload__tip" slot="tip">
                <div>只能上传不超过 {{ maxSize / 1024 / 1024 }}M 的{{ fileType.join("、") }}文件</div>
                <div v-if="limit > 1">最多上传 {{ limit }} 个文件</div>
            </div>
        </el-upload>
    </div>
</template>
<script>
/**
 * 文件上传组件
 * @props : action 上传地址 string
 * @props : limit 上传数量 number 默认1
 * @props : maxSize 最大上传大小 默认5M number
 * @props : fileType 文件类型 array 默认["doc", "docx", "ppt", "pptx", "zip", "rar", "pdf", "xls", "xlsx", "txt", "jpg", "png", "jpeg"]
 * @props : value/v-model 值 array
 * @props : autoUpload 是否自动上传 默认true
 * 
 * @methods : change 改变 function 返回所以文件list array
 * */
export default {
    name: "dzsUploadFile",
    model: {
        prop: "value",
        event: "update:value"
    },
    props: {
        action: {
            type: String,
            default: () => {
                return "#"
            }
        },
        /**最多上传文件*/
        limit: {
            type: Number,
            default: () => {
                return 1
            }
        },
        /**最大上传大小*/
        maxSize: {
            type: Number,
            default: () => {
                return 5 * 1024 * 1024
            }
        },
        /**上传文件类型*/
        fileType: {
            type: Array,
            default: () => {
                return ["doc", "docx", "ppt", "pptx", "zip", "rar", "pdf", "xls", "xlsx", "txt", "jpg", "png", "jpeg"]
            }
        },
        /**原始文件列表*/
        value: {
            type: Array,
            default: () => {
                return []
            }
        },
        /**是否自动上传*/
        autoUpload: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        /**是否手机端*/
        isPhone: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        uploadFun: {
            type: Function | null,
            default: () => {
                return null
            }
        },
        /**是否为按钮模式*/ 
        isButton: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        /**是否显示提示*/ 
        isOpenTip : {
            type: Boolean,
            default: () => {
                return true
            }
        }
    },
    data() {
        return {
            multiple: false,
            fileList: []
        }
    },
    watch: {
        limit: {
            handler(val) {
                if (val == 1) {
                    this.multiple = false
                } else {
                    this.multiple = true
                }
            },
            immediate: true,
        },
        /**处理原始文件*/
        value: {
            handler(val) {
                if (val.length > 0) {
                    this.fileList = val.map((item) => {
                        return {
                            name: item.name,
                            url: item.url,
                            uid: item.uid,
                            status: "success"
                        }
                    })
                }
            },
            immediate: true,
        }
    },
    methods: {
        /**上传之前*/
        beforeUpload(file) {
            let fileType = file.name.split(".")[1];
            if (this.fileType.indexOf(fileType) == -1) {
                this.$message.error(`上传文件格式不正确`);
                return false;
            }
            if (file.size > this.maxSize) {
                this.$message.error(`上传文件大小不能超过 ${this.maxSize / 1024 / 1024}MB!`);
                return false;
            }
            return true;
        },
        /**上传成功*/
        handleSuccess(res, file) {
            let fileInfo = {
                name: file.name,
                path: res.path ? res.path : "",
                uploadUrl: res.url ? res.url : "",
                uid: file.uid,
                type: file.type,
                formItem: "upload-file",
                status: "success",
            };
            this.fileList.push(fileInfo);
            this.$emit("update:value", this.fileList);
            this.$emit("change", this.fileList);
        },
        /**文件改变*/
        changeFile(files) {
            if (!files.raw && this.limit == 1) return;
            if (!this.autoUpload && !this.beforeUpload(files)) {
                this.fileList.splice(this.fileList.length - 1, 1);
                this.$emit("update:value", this.fileList);
                this.$emit("change", this.fileList);
                return;
            }
            this.uploadFun(files, this.handleSuccess);
            if (this.autoUpload || this.uploadFun) return;
            let fileInfo = {
                name: files.name,
                path: files.url,
                uploadUrl: files.url,
                uid: files.uid,
                type: files.type,
                status: "success",
                fromItem: "upload-file",
                file: files.raw
            };
            this.fileList.push(fileInfo);
            this.$emit("update:value", this.fileList);
            this.$emit("change", this.fileList);
        },
        /**超出文件个数限制时的钩子*/
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }
    }
}
</script>
<style lang="scss" scoped>
.upload-dzs-phone {
    width: 100%;

    :deep(.el-upload) {
        width: 100%;

        .el-upload-dragger {
            width: 100%;
        }
    }
}
</style>./index.vue