

/**
 * 滚动到指定数字
 * @param {Object} options 配置信息
 * @param {number} [options.start] 开始数字 默认0
 * @param {number} [options.end] 结束数字
 * @param {number} [options.duration] 结束时间 默认1s
 * @param {string} [options.el] dom的id选择器
 * @param {Function} [options.dom] dom元素
 * @param {string} [options.ref]  vue的ref选择器
 * @param {boolean} [options._inside] 是否为内部调用 默认false
 * @param {Function} [options.success] 成功返回
 * @param {Function} [options.fail] 错误返回
 * */
function scrollToNumber(options) {
    options = options || {};
    let { start = 0, end, duration = 1000, el, dom, ref, _inside = false } = options;
    let startTime = null;
    const attrs = document.querySelectorAll('[data-number]');
    let attrNumbers = Array.from(attrs).map(attr => {
        return {
            el: attr,
            number: parseInt(attr.getAttribute('data-number'))
        };
    });
    _inside ? attrNumbers = [] : null;
    if (attrNumbers.length > 0) {
        attrNumbers.forEach((attrNumber, index) => {
            scrollToNumber({
                start: parseInt(attrNumber.el.innerText) || 0,
                end: attrNumber.number,
                duration: 1000,
                dom: attrNumber.el,
                _inside: true
            })
        });
    }
    if (!el && !dom && !ref && !_inside && !attrNumbers.length) {
        let message = '请传入el/dom/ref 其中一个参数/ 找到 data-number 的元素';
        !_inside && console.warn(message);
        options.fail && options.fail({ code: -1, message });
        return;
    }


    // 缓动函数，这里使用简单的二次缓动（先加速后减速）  
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // 更新数值的函数  
    function updateNumber(number) {
        let element = null;
        if (el) {
            element = document.getElementById(el);
        } else{
            element = dom || ref;
        }
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
            options.success && options.success({ code: 200, message: 'success' });
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