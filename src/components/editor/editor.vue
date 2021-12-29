<!--
 * @Author: zs.duan
 * @Date: 2021-12-17 15:23:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-29 17:50:51
 * @FilePath: \adminBlogf:\模板\template\src\components\editor\editor.vue
-->
<template>
    <div>
        <div class="" v-if="is_show_edit">
            <editor :api-key="apiKey" :init="editConfig" v-model="content_edit" />
        </div>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce';
    import Editor from '@tinymce/tinymce-vue';
    import 'tinymce/themes/silver';
    import 'tinymce/icons/default/icons.js'; // 引入图标包 icons.js
    //  添加配置
    import 'tinymce/plugins/link'; //超链接
    import 'tinymce/plugins/code'; //生成html源码
    import 'tinymce/plugins/table'; //表格
    import 'tinymce/plugins/lists'; //列表对其
    import 'tinymce/plugins/contextmenu'; //字体菜单
    import 'tinymce/plugins/wordcount'; //字数统计
    import 'tinymce/plugins/image'; //插入图片
    import 'tinymce/plugins/media'; //插入媒体文件
    import 'tinymce/plugins/save'; //保存
    import 'tinymce/plugins/searchreplace'; //搜索替换
    import 'tinymce/plugins/insertdatetime'; //插入时间
    import 'tinymce/plugins/hr'; //水平分割线
    import 'tinymce/plugins/preview'; //预览

    export default {
        name: "Editors",
        props: {
            editHeight: {
                type: Number,
                default: () => {
                    return 500
                }
            },
            content: {
                type: String,
                default: () => {
                    return ""
                }
            }
        },
        components: {
            'editor': Editor
        },
        data() {
            return {
                apiKey: "fmpe10wgtn5cy4tq0quwhxd21a2mb6z7pwuf0zsut09xk039", //key值从官网注册申请来的
                editConfig: {},
                is_show_edit: false,
                content_edit: ""
            }
        },
        created() {
            let _this = this;
            this.editConfig = {
                    language_url: '/tinymce/langs/zh_CN.js', // 语言包的路径
                    language: 'zh_CN', //语言
                    skin_url: '/tinymce/skins/ui/oxide', // skin路径
                    browser_spellcheck: true, // 拼写检查
                    branding: true, // 去水印
                    height: this.editHeight || 500, //编辑器高度
                    branding: false, //  是否禁用 “Power by Tinymce”
                    menubar: true, // 菜单栏显示(默认为true)
                    file_picker_types: 'image',
                    images_upload_credentials: true,
                    fontsize_formats: '14px 16px 18px 20px 24px 26px 28px 30px 32px 36px', //字体大小
                    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue;PingFang SC;sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun;serifsans-serif;Terminal=terminal;monaco;Times New Roman=times new roman;times', //字体
                    plugins: 'link code table lists wordcount image media save searchreplace insertdatetime hr  preview',
                    toolbar: [
                        'undo redo save| formatselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | lists image searchreplace | preview',
                        'bullist numlist outdent indent |  media table insertdatetime | removeformat hr '
                    ],
                    images_upload_handler: function(blobInfo, success, failure) {
                        let formdata = new FormData();
                        formdata.append("file", blobInfo.blob());
                        _this.$api.profileImg(formData).then(res =>{
                            success(imgurl + res.url);
                        });
                    },
                    save_onsavecallback: function() {
                        _this.save();
                    }
                },
                this.is_show_edit = true;
            this.content_edit = this.content;
        },
        methods: {
            save() {
                this.$emit("save", this.content_edit);
            },
        }
    }
</script>

<style lang="less" scoped>
</style>
