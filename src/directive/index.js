/**防抖*/
export const debounce = (Vue) => {
    Vue.directive('dzs-debounce', {
        bind(el, binding) {
            let debounceTime = 500; // 防抖时间
            if (typeof binding.value === 'number') {
                debounceTime = binding.value;
            }
            let obj = {}
            if (typeof binding.value == 'object') {
                obj = binding.value;
                throttleTime = obj.time || 500;
            }
            let timer = null;
            // 判断是否是input
            if (el.tagName === 'INPUT' || obj.type === 'input') {
                el.addEventListener('keyup', () => {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        if (binding.value instanceof Function) {
                            binding.value();
                        }
                        if (obj.callback && obj.callback instanceof Function) {
                            obj.callback();
                        }
                    }, debounceTime);
                });
            } else {
                el.addEventListener('click', (event) => {
                    if (!timer) {
                        el.disabled = true;
                        timer = setTimeout(() => {
                            if (binding.value instanceof Function) {
                                binding.value();
                            }
                            if (obj.callback && obj.callback instanceof Function) {
                                obj.callback();
                            }
                            el.disabled = false;
                            clearTimeout(timer);
                            timer = null;
                        }, debounceTime)
                    } else {
                        clearTimeout(timer);
                        el.disabled = false;
                        event && event.stopImmediatePropagation()
                    }
                })
            }
        }
    });
}

/**节流*/
export const throttle = (Vue) => {
    Vue.directive('dzs-throttle', {
        bind(el, binding) {
            let throttleTime = 500; // 节流时间
            if (typeof binding.value === 'number') {
                throttleTime = binding.value;
            }
            let obj = {}
            if (typeof binding.value == 'object') {
                obj = binding.value;
                throttleTime = obj.time || 500;
            }
            let timer = null;
            if (el.tagName === 'BUTTON' || obj.type === 'button') {
                el.addEventListener('click', (event) => {
                    if (timer) return;
                    el.disabled = true;
                    timer = setTimeout(() => {
                        el.disabled = false;
                        if (binding.value instanceof Function) {
                            binding.value();
                        }
                        if (obj.callback && obj.callback instanceof Function) {
                            obj.callback();
                        }
                        clearTimeout(timer);
                        timer = null;
                    }, throttleTime);
                });
            } else {
                el.addEventListener('keyup', () => {
                    if (timer) return;
                    timer = setTimeout(() => {
                        if (binding.value instanceof Function) {
                            binding.value();
                        }
                        if (obj.callback && obj.callback instanceof Function) {
                            obj.callback();
                        }
                        clearTimeout(timer);
                        timer = null;
                    }, throttleTime);
                });

            }
        }
    })
}

/**列表自动展开*/
export const autoExpand = (Vue) => {
    Vue.directive('dzs-autoExpand', {
        componentUpdated(el, binding) {
            openStyle(binding.value, el)
        },
        inserted: function (el, binding, vnode) {
            vnode.context.$nextTick(() => {
                openStyle(binding.value, el)
            });
        }
    })
}

/**
 * 设置高度
 * @param {Boolean} type true 展开 false 收起
 * @param {Element} el 
 * */
const openStyle = (type, el) => {
    !el.style.visibility ? el.style.visibility = "hidden" : null;
    !el.style.overflow ? el.style.overflow = "hidden" : null;
    !el.style.transition ? el.style.transition = "0.3s height ease-in-out" : null;
    el.style.visibility = "visible";
    let height = el.offsetHeight;
    if (!el.getAttribute("data-height")) el.setAttribute("data-height", height);
    if (!type) {
        el.style.height = height + 'px';
        el.style.height = '0px';
        return;
    }
    height = el.getAttribute("data-height") || height;
    el.style.height = '0px';
    el.style.height = height + 'px';
};

export default function install(Vue) {
    debounce(Vue)
    throttle(Vue)
    autoExpand(Vue)
}