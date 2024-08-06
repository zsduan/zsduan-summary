
/**
 * 滚动到指定数字
 * @param {number} start 开始数字
 * @param {number} end 结束数字
 * @param {number} duration 结束时间
 * @param {string} el dom的id选择器
 * */ 
function scrollToNumber(start, end, duration, el) {  
    let startTime = null;  
  
    // 缓动函数，这里使用简单的二次缓动（先加速后减速）  
    function easeInOutQuad(t, b, c, d) {  
        t /= d / 2;  
        if (t < 1) return c / 2 * t * t + b;  
        t--;  
        return -c / 2 * (t * (t - 2) - 1) + b;  
    }  
  
    // 更新数值的函数  
    function updateNumber(number) {  
        const element = document.getElementById(el);  
        if (element) {  
            element.innerText = number;  
        }  
    }  
  
    // 动画函数  
    function animate() {  
        if (!startTime) {  
            startTime = Date.now();  
        }  
  
        const currentTime = Date.now() - startTime;  
        const progress = Math.min(currentTime / duration, 1); // 确保progress不会超过1  
        // 使用缓动函数计算当前值  
        const currentValue = easeInOutQuad(progress * duration, start, end - start, duration);  
  
        // 如果当前值已经等于或超过目标值（包括当目标值为1时），则立即显示目标值并停止动画  
        if (currentValue >= end) {  
            updateNumber(end);  
            return; // 停止进一步调用animate  
        }  
  
        // 更新DOM（如果当前值与上一次计算的值不同，但在本例中我们总是更新）  
        updateNumber(Math.round(currentValue)); // 如果需要，可以四舍五入到整数  
  
        // 如果动画没有完成，继续  
        if (progress < 1) {  
            requestAnimationFrame(animate);  
        }  
    }  
  
    // 开始动画  
    animate();  
}  

export default scrollToNumber;