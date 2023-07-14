export const code1 = `
/**
 * 自定义组件弹窗 可以拖动 可以控制大小
 * @props : title 弹窗标题
 * @props : isShow  是否显示
 * @props : width 宽度
 * @props : options 饿了吗ui原生属性
 *
 * @method close 关闭弹窗
 * @method open 打开弹窗
 * @method opened 打开弹窗后
 * @method closed 关闭弹窗后
 *
 */
<dzs-popup :isShow.sync="defaultIsShow">
    <div>我是一个默认的弹窗</div>
</dzs-popup>
`

export const code2 = `
/**
 * 自定义组件弹窗 可以拖动 可以控制大小
 * @props : title 弹窗标题
 * @props : isShow  是否显示
 * @props : width 宽度
 * @props : options 饿了吗ui原生属性
 *
 * @method close 关闭弹窗
 * @method open 打开弹窗
 * @method opened 打开弹窗后
 * @method closed 关闭弹窗后
 *
 */
<dzs-popup :isShow.sync="defaultBottomIsShow">
    <div>我是一个有底部的弹窗</div>
    <template slot="footer">
        <el-button>提交</el-button>
    </template>
</dzs-popup>
`