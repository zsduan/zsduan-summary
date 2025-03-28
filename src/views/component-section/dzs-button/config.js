export const code1 = `
<template>
    div class="flex-box">
        <dzs-button>默认按钮</dzs-button>
        <dzs-button type="primary">主要按钮</dzs-button>
        <dzs-button type="success">成功按钮</dzs-button>
        <dzs-button type="info">信息按钮</dzs-button>
        <dzs-button type="warning">警告按钮</dzs-button>
        <dzs-button type="danger">危险按钮</dzs-button>
    </div>
</template>
import dzsButton from "@/components/dzs-button"
export default {
    components: {
        dzsButton
    },
    data(){
        return {
            
        }
    }
}
`

