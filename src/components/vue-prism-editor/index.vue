<template>
    <div >
        <prism-editor class="my-editor" :readonly="true" v-model="value" :highlight="highlighter"
                line-numbers></prism-editor>
    </div>
</template>
<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library  (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
export default {
    name: "vuePrismEditor",
    components: {
        PrismEditor
    },
    props: {
        value: {
            type: String,
            default: () => {
                return ''
            }
        },
        fontSize : {
            type: String,
            default: ()=>{
                return '16px'
            }
        }
    },
    data(){
        return {
            
        }
    },
    methods: {
        highlighter(code) {
            return highlight(code, languages.js); 
        },
    }
}
</script>
<style lang="scss" scoped>
/* required class */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    /deep/pre{
        font-size:v-bind(fontSize);
        span{
            font-size:v-bind(fontSize);
        }
    }
    /deep/textarea{
        font-size:v-bind(fontSize);
    }
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}
</style>