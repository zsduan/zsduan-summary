/*
 * @Author: zs.duan
 * @Date: 2022-11-23 12:39:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:15:28
 * @FilePath: \vue2+elui+template\src\utils\canvas-back.js
 */
/*
 * @name 绘制动效
 * @parame canvasId 需要绘制的canvasId string  
 * @parame columnWidth 列宽 Number 
 * @parame showWord 需要显示的文字 string
*/ 
export const drawCanvasBack = (...arg) =>{
    let data = arg[0];
    if(!data.canvasId){
        throw new Error("canvasId must be not null")
    }
    if((typeof data.canvasId !== 'string' || (!Object.prototype.toString.call(data.canvasId) === "[object String]")) && showWord){
        throw new Error("canvasId must be string")
    }
    if(typeof data.showWord !== 'string' || (!Object.prototype.toString.call(data.showWord) === "[object String]")){
        throw new Error("showWord must be string")
    }
    let columnWidth = data.columnWidth ?  Number(data.columnWidth) : 20;
    if(!isFinite(columnWidth)){
        throw new Error("columnWidth must be Number or String Number");
    }
    const canvas = document.querySelector("#" + data.canvasId);
    const canvasWidth = window.innerWidth - 20;
    const canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // 获取上下文
    const ctx = canvas.getContext("2d");
    // 获取列数
    const columnCount = Math.floor(canvasWidth / columnWidth);
    // 记录写到了第几个字
    let columnNextIndexes = new Array(columnCount);
    columnNextIndexes.fill(1);
    setInterval(()=>{
      draw(ctx , data.showWord , columnCount , columnWidth , columnNextIndexes);  
    },50)
}

// 绘制
const draw = (ctx , showWord , columnCount , columnWidth , columnNextIndexes) =>{
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    const fonSize = 20;
    ctx.fillStyle = getColor();
    ctx.font = `${fonSize}px 'Roboto Mono'`;
    for(let i = 0 ; i < columnCount ; i ++){
        let x = i * columnWidth;
        let y = fonSize * columnNextIndexes[i];
        ctx.fillText(getText(showWord),x , y);
        if(y > window.innerHeight && Math.random() > 0.95){
            columnNextIndexes[i] = 0;
        }else{
            columnNextIndexes[i] ++ ;
        }
        
    }
    
}

// 获取颜色
const getColor = () =>{
    const fontColor = [
        "#33B5E5",
        "#0099CC",
        "#AA66CC",
        "#9933CC",
        "#669900",
        "#FFBB33",
        "#FF8800",
        "#FF4444",
    ]
    return fontColor[Math.floor(Math.random() * fontColor.length)]
}

// 获取随机的文字
const getText = (showWord) =>{
    showWord = showWord ? showWord : "Hello Word";
    if(typeof showWord !== 'string' || (!Object.prototype.toString.call(showWord) === "[object String]")){
        throw new Error("showWord must be not string")
    }
    return showWord[Math.floor(Math.random() * showWord.length)]
}