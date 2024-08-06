export const code1 = `
import setRouter from '@/router/setRouter'
const menus = [
    {
        path: '/about-component',
        component: "Layout",
        redirect: '/dzs-dialog',
        name: "aboutcComponent",
        meta: {
            title: "组件篇"
        },
        children: [
            {
                path: '/dzs-dialog',
                component: "component-section/dzs-dialog/index",
                name: 'dzsDialog',
                meta: { title: '弹窗组件' }
            },
        ]
    }
]

setRouter(menus)
`