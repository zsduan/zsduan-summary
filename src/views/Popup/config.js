export const code1 = `
<dzs-popup :isShow.sync="defaultIsShow">
    <div>我是一个默认的弹窗</div>
</dzs-popup>
`

export const code2 = `
<dzs-popup :isShow.sync="defaultBottomIsShow">
    <div>我是一个有底部的弹窗</div>
    <template slot="footer">
        <el-button>提交</el-button>
    </template>
</dzs-popup>
`