export const code1 = `
// 滚动条宽度
&::-webkit-scrollbar {
    width: 4px;
    height: 6px;
    background-color: #fff;
    cursor: pointer;
}

    // 滚动条轨道
&::-webkit-scrollbar-track {
    background-color: transparent;
    webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}

// 滚动条背景
&::-webkit-scrollbar-track-piece {
    background-color: transparent;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}

// 滚动条滑块
&::-webkit-scrollbar-thumb {
    background-color: #4a9d9f;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}
`

export const code2 = `
// 隐藏滚动条
-ms-overflow-style: none;
/* IE 10+ */
scrollbar-width: none;

/* Firefox */
&::-webkit-scrollbar {
/* Chrome Safari */
    display: none;
}
`

export const code3 = `
// 单行文本溢出显示省略号
.elli1 {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.elli2 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.elli3 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
`