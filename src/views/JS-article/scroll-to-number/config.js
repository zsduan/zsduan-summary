
export const code1 = `
<div id="number">0</div>
// 使用
import scrollToNumber from "@/utils/scrollToNumber.js";
scrollToNumber({
    start : 0,
    end :new Date().getFullYear(),
    duration : 2000,
    el : 'number',
})
`

export const code2 = `
<div class="show-number number-box" >0</div>
// 使用
import scrollToNumber from "@/utils/scrollToNumber.js";
scrollToNumber({
    start : 0,
    end :new Date().getFullYear(),
    duration : 2000,
    dom : document.querySelector('.show-number'),
})
`


export const code3 = `
<div class="number-box" ref="showNumber">0</div>
// 使用
import scrollToNumber from "@/utils/scrollToNumber.js";
scrollToNumber({
    start : 0,
    end :new Date().getFullYear(),
    duration : 2000,
    ref : this.$refs.showNumber,
})
`

export const code4 = `
<div class="number-box" :data-number="new Date().getFullYear()">0</div>
// 使用
import scrollToNumber from "@/utils/scrollToNumber.js";
scrollToNumber()
`