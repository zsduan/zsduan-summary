/*
 * @Author: zs.duan
 * @Date: 2022-11-23 14:05:48
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:03:01
 * @FilePath: \vue2+elui+template\src\utils\instructions.js
 */

// 防抖
export const debounce = (_this) =>{
    _this.directive("dzs-debounce",{
        bind(el , binding){
            let debounceTime = binding.value; // 防抖时间
            if (!debounceTime) debounceTime = 500;  // ⽤户若不设置防抖时间，则默认.5s
            let timer = null;
            el.addEventListener("click",(event) =>{
                // 第一次执行
                if(!timer){
                    timer = setTimeout(()=>{
                        timer = null;
                    },debounceTime)
                }else{
                    event && event.stopImmediatePropagation()
                }
            },true)
        }
        
    })
}

// 节流 input 传入方法名称
export const inputThrottle = (_this) =>{
    _this.directive("dzs-input-throttle",{
        inserted(el , binding){
            let timer = null;
            el.addEventListener("keyup",()=>{
                if(!timer){
                    timer = setTimeout(() => {
                        if(binding.value){
                            binding.value();
                        }
                    }, 500);
                }else{
                    timer = null;
                }
            })
        }
    })
}

// 节流按钮 传入节流时间
export  const btnThrottle = (_this) =>{
    _this.directive("dzs-btn-throttle",{
        inserted(el , binding){
            let throttleTime = binding.value; // 节流时间
            if (!throttleTime) throttleTime = 500;  // ⽤户若不设置节流时间，则默认.5s
            el.addEventListener("click",()=>{
                if(!el.disabled){
                    el.disabled = true;
                    setTimeout(() => {
                        el.disabled  = false;
                    }, 500);
                }else{
                    el.disabled  = true;
                }
            })
        }
    })
}

// 列表自动展开
export const listOpen = (_this) =>{
    _this.directive("dzs-list-open",{
        componentUpdated(el,binding){
            initOpenStyle(binding.value , el)
        },
        bind(el , binding){
            initOpenStyle(binding.value , el)
        }
    })
}

export const initOpenStyle = (type , el) =>{
    if(!type){
        if(!el.getAttribute("data-height")){
            el.style.transition =  "0.3s height ease-in-out";
            el.style.display = "none";
            return ;
        }
        if(!el.style.transition){
            el.style.transition =  "0.3s height ease-in-out";
        }
        el.style.overflow = "hidden";
        let height = el.getAttribute("data-height") ? el.getAttribute("data-height") : el.offsetHeight;
        el.style.height = height + 'px';
        setTimeout(() => {
            el.style.height = '0px';
        }, 10);
        setTimeout(() => {
            el.style.display = "none";
            el.style.height = "";
            el.style.overflow = "";
            el.style.transition = "";
        }, 300);
        return ;
    }
    el.style.display = "";
    el.style.transition =  "0.3s height ease-in-out";
    let height = el.getAttribute("data-height") ? el.getAttribute("data-height") : el.offsetHeight;
    if(height != 0 && height){
        el.setAttribute("data-height",height)
    }
    el.style.height = 0 + 'px';
    el.style.overflow = "hidden";
    setTimeout(()=>{
        el.style.height = height + 'px';
    },10)
    setTimeout(() => {
        el.style.height = "";
        el.style.overflow = "";
        el.style.transition = "";
    }, 310);
}

export const initDirective = (_this) =>{
    listOpen(_this);
    debounce(_this);
    inputThrottle(_this);
    btnThrottle(_this);
}