<!--
 * @Author: zs.duan
 * @Date: 2021-12-17 15:23:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-03-02 19:34:06
 * @FilePath: \vue2+elui+template\src\components\dzs-editor\index.vue
-->
<template>
    <div>
        <div class v-if="showEdit" :style="width">
            <div class="sava-box" v-if="show_save">
                <div class="item tips">
                    <span>实时保存仅限输入 其他操作组件不保证实时保存 请自行点击保存</span>
                </div>
                <div class="item">
                    <span>开启实时保存</span>：
                    <el-switch v-model="is_save_now"></el-switch>
                </div>
            </div>
            <editor :init="editConfig" v-model="editValue" />
        </div>
    </div>
</template>

<script>
/*
 * @name 富文本编辑组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height Number | String default 500 富文本高度 
 * @prop width string default 100% 富文本宽度
 * @porp show_save Boolean default false 是否显示实时保存
 * @porp placeholder string default "请输入类容" 默认提示文字
 * @porp production_url string default "/zsduan-summary" hash模式下 语言和样式的配置文件的前缀目录
 * @porp plugins string 菜单配置 支持菜单见文件
 * @porp toolbar Array 快捷键配置 支持菜单见文件
 * @method save 保存方法 返回 改变的value
*/ 
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/icons/default/icons.js"; // 引入图标包 icons.js
//  添加配置
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/code"; //生成html源码
import "tinymce/plugins/table"; //表格
import "tinymce/plugins/lists"; //列表对其
import "tinymce/plugins/contextmenu"; //字体菜单
import "tinymce/plugins/wordcount"; //字数统计
import "tinymce/plugins/image"; //插入图片
import "tinymce/plugins/media"; //插入媒体文件
import "tinymce/plugins/save"; //保存
import "tinymce/plugins/searchreplace"; //搜索替换
import "tinymce/plugins/insertdatetime"; //插入时间
import "tinymce/plugins/hr"; //水平分割线
import "tinymce/plugins/preview"; //预览
import "tinymce/plugins/help"; //帮助
import "tinymce/plugins/autosave"; //自动保存
import "tinymce/plugins/importword"; //导入word
import "tinymce/plugins/fullscreen"; //全屏
import "tinymce/plugins/print"; //打印

export default {
    name: "dzs-editors",
    model : {
        prop : "value",
        event : "update:value"
    },
    props: {
        height: {
            type: Number | String,
            default: () => {
                return 500;
            },
        },
        value: {
            type: String,
            default: () => {
                return "";
            },
        },
        width: {
            type: String,
            default: () => {
                return "100%";
            },
        },
        show_save: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        placeholder : {
            type: String,
            default: () => {
                return "请输入内容";
            },
        },
        // hash模式下打包的路径
        production_url : {
            type : String ,
            default : ()=>{
                return ""
            }
        },
        // 菜单配置
        plugins : {
            type : String,
            default : ()=>{
                return "copy cut paste print link code table lists wordcount image media save searchreplace insertdatetime hr preview importword autosave fullscreen print help"
            }
        },
        // 快捷键配置
        toolbar : {
            type : Array ,
            default : ()=>{
                return ["undo redo save| formatselect | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | lists image searchreplace | bullist numlist outdent indent |  media table insertdatetime | removeformat hr | importword autosave fullscreen print help"]
            }
        }
    },
    components: {
        editor: Editor,
    },
    data() {
        return {
            editConfig: {},
            editValue: "",
            is_save_now: true, //是否实时保存
            showEdit : false,
        };
    },
    created() {
        let _this = this;
        (this.editConfig = {
            language_url: process.env.NODE_ENV === 'production' ?  this.production_url + "/tinymce/langs/zh_CN.js" :  "/tinymce/langs/zh_CN.js", // 语言包的路径
            language: "zh_CN", //语言
            skin_url: process.env.NODE_ENV === 'production' ? this.production_url +  "/tinymce/skins/ui/oxide":"/tinymce/skins/ui/oxide", // skin路径
            browser_spellcheck: true, // 拼写检查
            branding: false, // 去水印
            height: this.height || 500, //编辑器高度
            branding: false, //  是否禁用 “Power by Tinymce”
            menubar: true, // 菜单栏显示(默认为true)
            file_picker_types: "image",
            images_upload_credentials: true,
            placeholder : this.placeholder,
            autosave_interval: "20s",
            fontsize_formats:
                "14px 16px 18px 20px 24px 26px 28px 30px 32px 36px", //字体大小
            font_formats:
                "微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times", //字体
            plugins:this.plugins,
            toolbar: this.toolbar,
            importword_handler: function(editor,files,next){
                var file_name = files[0].name
                if(file_name.substr(file_name.lastIndexOf(".")+1)=='docx'){
                    editor.notificationManager.open({
                        text: '正在转换中...',
                        type: 'info',
                        closeButton: false,
                    });
                     next(files);
                }else{
                    editor.notificationManager.open({
                        text: '目前仅支持docx文件格式，若为doc，请将扩展名改为docx',
                        type: 'warning',
                    });
                }
                // next(files);
            },
            urlconverter_callback: (url, node, onSave, name) => {
                if (node === "img" && url.startsWith("blob:")) {
                    // Do some custom URL conversion
                    tinymce.activeEditor && tinymce.activeEditor.uploadImages();
                }
                // Return new URL
                return url;
            },
            images_upload_handler: function (blobInfo, success, failure) {
                let formData = new FormData();
                formData.append("file", blobInfo.blob());
                // 需要自行修改上传api
                _this.$api
                    .editorProfileImg(formData)
                    .then((res) => {
                        success(res.path + res.url);
                    })
                    .catch((err) => {
                        editor(err);
                    });
            },
            save_onsavecallback: function () {
                _this.save();
            },
            init_instance_callback: (editor) => {
                editor.on("change", () => {
                    if (_this.is_save_now) {
                        _this.save();
                    }
                });
            },
        }),
        this.editValue = this.value;
        setTimeout(() => {
            this.showEdit = true;
        }, 50);
    },
    watch: {
        value: {
            handler(val) {
                this.editValue = val ? val : "";
                this.$nextTick(() => {
                    var ifra = document.querySelector(".tox-edit-area__iframe");
                    if (ifra) {
                        this.keepLastIndex(ifra.contentWindow.document.getElementById('tinymce'), ifra.contentWindow);
                    }
                });
            },
            immediate: true,
            deep: true,
        },
    },
    methods: {
        save() {
            this.$emit("update:value", this.editValue);
            this.$emit("save", this.editValue);
        },

        //获取焦点光标到最后面
        keepLastIndex(obj, window) {
            if (window.getSelection) {
                //ie11 10 9 ff safari
                obj.focus(); //解决ff不获取焦点无法定位问题
                var range = window.getSelection(); //创建range
                range.selectAllChildren(obj); //range 选择obj下所有子内容
                range.collapseToEnd(); //光标移至最后
            } else if (document.selection) {
                //ie10 9 8 7 6 5
                var range = document.selection.createRange(); //创建选择对象
                range.moveToElementText(obj); //range定位到obj
                range.collapse(false); //光标移至最后
                range.select();
            }
        },
    },
};
</script>

<style lang="less" scoped>
.sava-box {
    text-align: right;
    padding-bottom: 10px;
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    .tips{
        color: red;
    }
    .item {
        padding: 5px;
        padding-right: 10px;
    }
    .phone {
        display: flex;
        align-items: center;
        span {
            display: inline-block;
            padding: 0 8px;
        }
        .ipt {
            width: 100px;
        }
    }
}
</style>
