/*
 * @Author: zs.duan
 * @Date: 2022-11-23 12:39:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-14 17:59:03
 * @FilePath: \vue2+js+eui+template\src\utils\canvas-back.js
 */
/*
 * @name 绘制动效
 * @parame canvasId 需要绘制的canvasId string  
 * @parame columnWidth 列宽 Number 
 * @parame showWord 需要显示的文字 string
*/ 
export const drawCanvasBack = (...arg) =>{
    let options = {
        canvasId : "",
        showWord : "",
        columnWidth : 20,
        success : (reslut) =>{},
        fail : (err) =>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.canvasId){
        options.fail({
            code : -1,
            msg : "canvasId must be not null"
        })
        return 
    }
    if((typeof options.canvasId !== 'string' || (!Object.prototype.toString.call(options.canvasId) === "[object String]")) && showWord){
        options.fail({
            code : -1,
            msg : "canvasId must be string"
        })
        return 
    }
    if(typeof options.showWord !== 'string' || (!Object.prototype.toString.call(options.showWord) === "[object String]")){
        options.fail({
            code : -1,
            msg : "showWord must be string"
        })
        return 
    }
    let columnWidth = options.columnWidth ?  Number(options.columnWidth) : 20;
    if(!isFinite(columnWidth)){
        options.fail({
            code : -1,
            msg : "columnWidth must be Number or String Number"
        })
        return 
    }
    const canvas = document.querySelector("#" + options.canvasId);
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
      draw(ctx , options.showWord , columnCount , columnWidth , columnNextIndexes);  
    },50)
    options.success("success")
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