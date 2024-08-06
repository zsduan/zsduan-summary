<template>
    <div>
        <div :id="fileId" class="ppt-box"></div>
    </div>
</template>
<script>
import JSZip from "./js/jszip.min.js";
import { FileReaderJS } from "./js/filereader.js";
import "./js/d3.min.js";
import "./js/nv.d3.min.js";
import "./js/divs2slides.min.js";
export default {
    props: {
        src: {
            type: String,
            default: () => {
                return ""
            }
        }
    },
    data() {
        return {
            fileId: `pptId${new Date().getTime()}`
        }
    },
    watch: {
        src: {
            handler(val) {
                if(!val) return ;
                this.$nextTick(()=>{
                    this.getPPt();
                })
            },
            immediate: true
        }
    },
    methods: {
        getPPt() {
            window.FileReaderJS = FileReaderJS;
            window.JSZip = JSZip;
            $(`#${this.fileId}`).pptxToHtml({
                pptxFileUrl: this.src,
                slideMode: false,
                keyBoardShortCut: false,
                slideModeConfig: {  //on slide mode (slideMode: true)
                    first: 1,
                    nav: false, /** true,false : show or not nav buttons*/
                    navTxtColor: "white", /** color */
                    navNextTxt: "&#8250;", //">"
                    navPrevTxt: "&#8249;", //"<"
                    showPlayPauseBtn: false,/** true,false */
                    keyBoardShortCut: false, /** true,false */
                    showSlideNum: false, /** true,false */
                    showTotalSlideNum: false, /** true,false */
                    autoSlide: false, /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
                    randomAutoSlide: false, /** true,false ,autoSlide:true */
                    loop: false,  /** true,false */
                    background: "black", /** false or color*/
                    transition: "default", /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
                    transitionTime: 1 /** transition time in seconds */
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
@import url("./css/nv.d3.min.css");
@import url("./css/pptxjs.css");

.ppt-box {
    max-height: 720px;
    overflow-y: auto;
}
</style>