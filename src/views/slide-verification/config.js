/*
 * @Author: zs.duan
 * @Date: 2022-12-28 13:36:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-28 13:39:15
 * @FilePath: \vue2+js+eui+template\src\views\slide-verification\config.js
 */

export const code1 = `
/*
 * @name 滑动验证
 * @prop ErrorRange 误差范围 number 默认10
 * @prop isShow 是否显示
 * @method success 成功返回
 * @method fail 失败返回
 */
// html
<dzs-slide-verification :isShow.sync="isShow" @success="isShow = false"></dzs-slide-verification>
// js
import dzsSlideVerification from "@/components/dzs-slide-verification/index.vue"

`