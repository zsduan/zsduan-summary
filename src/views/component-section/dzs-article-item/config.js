export const code1 = `
<template>
    <dzs-article-item :item="item"></dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: [
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg',
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg',
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg',
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22'
            },
        }
    }
}
`

export const code2 = `
<template>
    <dzs-article-item :item="item" placement="left"></dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: ['https://anran233.com/img/file-1725068462037.png'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22'
            },
        }
    }
}
`

export const code3 = `
<template>
    <dzs-article-item :item="item"></dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: ['https://anran233.com/img/file-1725068462037.png'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22',
                isVideo: true
            },
        }
    }
}
`

export const code4 = `
<template>
    <dzs-article-item :item="item" :scroll="true"></dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: ['https://anran233.com/img/file-1725068462037.png'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22'
            },
        }
    }
}
`

export const code5 = `
<template>
    <dzs-article-item :item="item" :show-footer="false"></dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: ['https://anran233.com/img/file-1725068462037.png'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22'
            },
        }
    }
}
`

export const code6 = `
<template>
    <dzs-article-item :item="item" :show-footer="false">
        <template v-slot:header>
            div class="header-box">
                <div class="header-item" style="color : red ;">自定义顶部 {{item.title}}</div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="footer-box">
                <div class="footer-item" style="color : red ;">自定义底部 {{item.time}}</div>
            </div>
        </template>
    </dzs-article-item>
</template>
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: {
        dzsArticleItem
    },
    data(){
        return {
            {
                title: '几种常见的前端攻击',
                desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                img: [
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg',
                    'https://anran233.com/img/file-1725068462037.png',
                    'https://anran233.com/img/file-1709257810697.jpg'],
                time: '2025-03-26 12:00:00',
                author: 'zsduan',
                href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                tag: ['javaScript', 'html'],
                star: '22'
            },
        }
    }
}
`