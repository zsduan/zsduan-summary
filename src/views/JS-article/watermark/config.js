export const code1 = `
import watermark from "./tool/watermark.js";
watermark({
    watermark_txt : "zsduan",
})
`

export const code2 = `
import watermark , {clearWatermark} from "@/tool/watermark.js";
watermark({
    watermark_txt : "<p>zsduan的个人总结</p>",
    isHtml : true,
    watermark_color : "rgba(0,0,0,0.2)",
})
`

export const code3 = `
import {clearWatermark} from "@/tool/watermark.js";
clearWatermark()
`