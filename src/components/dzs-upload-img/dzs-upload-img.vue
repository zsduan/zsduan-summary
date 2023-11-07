<!--
 * @Author: zs.duan
 * @Date: 2022-09-27 13:52:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 16:38:49
 * @FilePath: \vue2+js+eui+template\src\components\dzs-upload-img\dzs-upload-img.vue
-->
<template>
    <div class="upload-img-box">
        <div class="show-img-box" v-if="fileList.length" :style="imgStyle">
            <div v-for="(item,index) in fileList" :key="index">
                <img class="el-upload-list__item-thumbnail" :src="item.url" alt :style="imgStyle" />
                <div class="el-upload-list__item-actions" :style="imgStyle">
                    <div class="el-upload-actions">
                        <i class="el-icon-zoom-in" @click="handlePictureCardPreview(item)"></i>
                        <i class="el-icon-delete"  @click="handleRemove(index)"></i>
                    </div>
                </div>
            </div>
        </div>
        <div :style="imgStyle">
            <el-upload
                class="avatar-uploader"
                :action="upFile"
                :show-file-list="false"
                list-type="picture-card"
                :file-list="fileList"
                :limit="limit"
                :before-upload="beforeUpload"
                :on-success="handleSuccess"
                :on-exceed="handleExceed"
                :auto-upload="autoUpload"
                :on-change="changeFile"
            >
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <!-- 预览 -->
        <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
            <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
    </div>
</template>
<script>

/*
 *
 *@props : upFile 上传地址 string
 *@props : limit 上传数量 number 默认1
 *@props : value/v-model 值 array
 *@props : imgStyle 图片样式 string 默认'width: 80px;height: 80px;'
 *@props : maxSize 最大上传大小 默认3M number
 *@props : imgType 图片类型 string 以逗号分隔
 * 
 *
 * @methods : change 改变 function 返回所以图片list array
 * @methods : upload-success 上传成功 function 返回当前图片信息 object
 * @methods : upload-remove 删除 function 返回所以图片list array
 * 
 * 
*/ 
export default {
    name: "dzs-upload-img",
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        upFile: {
            type: String,
            default: () => {
                return "#";
            },
        },
        value: {
            type: Array,
            default: () => {
                return [];
            },
        },
        imgStyle: {
            type: String,
            default: () => {
                return "width:80px;height:80px;";
            },
        },
        // 最大上传张数
        limit: {
            type: Number,
            default: () => {
                return 1;
            },
        },
        // 最大上传大小
        maxSize: {
            type: Number,
            default: () => {
                return 3;
            },
        },
        // 文件类型
        imgType: {
            type: String,
            default: () => {
                return "image/jpeg,image/png,image/gif";
            },
        },
        autoUpload : {
            type : Boolean,
            default : ()=>{
                return true
            }
        }
    },
    data() {
        return {
            fileList: [],
            dialogImageUrl: "",
            dialogVisible: false,
        };
    },
    watch: {
        value:{
            handler(val){
                this.fileList = val;
            },
            deep:true,
            immediate:true,
        }
    },
    methods: {
        beforeUpload(file) {
            let imgTypes = this.imgType.split(",");
            let index = imgTypes.indexOf(file.type);
            const isLt2M = file.size / 1024 / 1024 < this.maxSize;
            if (index == -1) {
                this.$message.error("请上传正确的图片格式");
            }
            if (!isLt2M) {
                this.$message.error(`上传图片大小不能超过 ${this.maxSize}MB!`);
            }
            return index != -1 && isLt2M;
        },
        // 上传成功
        handleSuccess(res, file) {
            let fileInfo = {
                name: file.name,
                path: res.path ? res.path : "",
                uploadUrl: res.url ? res.url : "",
                uid: file.uid,
                url: file.url,
                status: "success",
                fromItem: "upload-img",
                data : res,
                file : file,
            };
            this.fileList.push(fileInfo);
            this.$emit("update:value", this.fileList);
            this.$emit("upload-success", fileInfo);
            this.$emit("change", this.fileList);
        },
        // 文件改变
        changeFile(files){
            if(!this.autoUpload){
                let fileInfo = {
                    name: files.name,
                    path: files.url,
                    uploadUrl: files.url,
                    uid: files.uid,
                    url: files.url,
                    status: "success",
                    fromItem: "upload-img",
                    data : files.raw,
                    file : files.raw,
                };
                this.fileList.push(fileInfo);
                this.$emit("update:value", this.fileList);
                this.$emit("upload-success", fileInfo);
                this.$emit("change", this.fileList);
            }
            console.log(files);
        },
        // 超出限制
        handleExceed(files, fileList) {
            this.$message.warning(`当前上传图片数量已达上限${this.limit}张`);
        },
        // 预览
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        // 删除
        handleRemove(index) {
            this.fileList.splice(index, 1);
            this.$emit("change",this.fileList);
            this.$emit("update:value", this.fileList);
            this.$emit("upload-remove", this.fileList);
        },
    },
};
</script>
<style lang="less" scoped>

.upload-img-box {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .show-img-box{
        margin-right: 10px;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        .el-upload-list__item-actions{
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            text-align: center;
            color: #fff;
            opacity: 0;
            background-color: rgba(0,0,0,.5);
            transition: opacity .3s;
            font-size: 24px;
            
            .el-upload-actions{
                display: flex;
                justify-content: center;
                align-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                i{
                    cursor: pointer;
                    display: inline-block;
                    margin-right: 5px;
                    &:last-child{
                        margin-right: 0;
                    }
                }
            }
            
            &:hover{
                opacity: 1;
            }
        }
    }
    .avatar-uploader {
        height: 100%;
        :deep(.el-upload--picture-card) {
            width: 100%;
            height: 100%;
            position: relative;
            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        /deep/.el-upload--picture-card{
            width: 100%;
            height: 100%;
            position: relative;
            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>