/*
 * @Author: zs.duan
 * @Date: 2022-11-29 16:24:54
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 16:30:19
 * @FilePath: \vue2+elui+template\src\views\button-border\config.js
 */

export const code1 = `
@keyframes rotate {
    to{
        transform: rotate(1turn);
    }
}
`;

export const code2 = `
.btn{
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    position: relative;
    z-index: 3;
    overflow: hidden;
    background: #fff;
    &::before{
        content: " ";
        position: absolute;
        background: var(--ThemeColor);
        width: 200%;
        height: 200%;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform-origin: 0 0 ;
        animation: rotate 3s infinite linear;
    }
    &::after{
        content:"";
        width: calc(150px - 5px);
        height: calc(50px - 5px);
        position: absolute;
        left: 2.5px;
        top: 2.5px;
        z-index: -1;
        background: #fff;
        border-radius: 5px;
    }
}
`;

export const code3 = `
.circular{
    width: 150px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    overflow: hidden;
    background: #fff;
     &::before{
        content: " ";
        position: absolute;
        background: var(--ThemeColor);
        width: 200%;
        height: 200%;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform-origin: 0 0 ;
        animation: rotate 2s infinite linear;
    }
    &::after{
        content:"";
        width: calc(150px - 5px);
        height: calc(150px - 5px);
        position: absolute;
        left: 2.5px;
        top: 2.5px;
        z-index: -1;
        background: #fff;
        border-radius: 50%;
    }
}
`;

export const code4 = `
// html
<div class="taiji">
    <div class="top"></div>
    <div class="bottom"></div>
</div>

// less
.taiji{
    width: 200px;
    height: 200px;
    outline: 3px solid #000;
    border-radius: 50%;
    background: linear-gradient(to right,#fff 50%,#000 50%);
    position: relative;
    z-index: 2;
    animation: rotate 2s infinite linear;
    .top{
        width: calc(200px / 2);
        height: calc(200px / 2);
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 25%;
        top: 0;
        z-index: -1;
        &::after{
            content: "";
            display: block;
            width: calc(200px / 6);
            height: calc(200px / 6);
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }
    }
    .bottom{
        width: calc(200px / 2);
        height: calc(200px / 2);
        background: #000;
        border-radius: 50%;
        position: absolute;
        left: 25%;
        bottom: 0;
        z-index: -1;
        &::after{
            content: "";
            display: block;
            width: calc(200px / 6);
            height: calc(200px / 6);
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
        }
    }
    
}
`;