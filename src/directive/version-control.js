// version-control.js
// 作者：Qwen
// 功能：Vue 指令 + 原生 data-version 控制，一文件双模式

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
            ? define(factory)
            : (global.VersionControl = factory());
}(typeof self !== 'undefined' ? self : this, function () {

    // ======================
    // 🔧 公共解析逻辑
    // ======================

    function parseVersion(version, rules) {
        if (typeof version !== 'string') version = String(version).trim();
        let clean = version.replace(/^v/i, ''); // 移除 v/V 前缀

        // 提取主版本（如 1.2.3）
        const mainMatch = clean.match(/^(\d+(\.\d+)*)/);
        const mainStr = mainMatch ? mainMatch[1] : '0';
        const main = mainStr.split('.').map(n => parseInt(n, 10) || 0);
        while (main.length < 3) main.push(0); // 补全为 x.y.z

        // 匹配后缀规则（dev / beta / rc 等）
        let matchedRule = null;
        for (const rule of rules) {
            const escapedName = rule.name.replace(/[-\/\\^ $ *+?.()|[ $  {}]/g, '\\ $ &');
            const pattern = new RegExp(`[._\\-]?${escapedName}`, 'i');
            if (pattern.test(clean)) {
                matchedRule = rule;
                break;
            }
        }

        return { main, matchedRule };
    }

    function compareMainVersion(v1, v2, rules) {
        const a = parseVersion(v1, rules).main;
        const b = parseVersion(v2, rules).main;
        for (let i = 0; i < Math.max(a.length, b.length); i++) {
            const numA = a[i] ?? 0;
            const numB = b[i] ?? 0;
            if (numA > numB) return 1;
            if (numA < numB) return -1;
        }
        return 0;
    }

    function handleElement(el, requiredVersion, config) {
        console.log(config);
        if(config.isDev){
            config.debug && console.log("开发模式下，已全部展示");
            return;
        }
        if (!requiredVersion) return;
        const parsed = parseVersion(requiredVersion, config.suffixRules);
        // 如果匹配到 isHide=true 的规则 → 删除
        if (parsed.matchedRule && parsed.matchedRule.isHide) {
            config.debug && console.log(`[VersionControl] 删除元素:`, el.outerHTML);
            el.remove();
            return;
        }
        // 比较主版本
        if (compareMainVersion(config.currentVersion, requiredVersion, config.suffixRules) < 0) {
            config.debug && console.log(`[VersionControl] 隐藏元素:`, el.outerHTML);
            el.remove();
        } else if (config.debug) {
            console.log(`[VersionControl] 保留元素:`, el.outerHTML);
        }
    }

    // ======================
    // ⚙️ 默认配置
    // ======================

    const DEFAULT_RULES = [
        { name: 'dev', desc: '开发版', isHide: true },
        { name: 'alpha', desc: '内测版', isHide: true },
        { name: 'beta', desc: '测试版', isHide: false },
        { name: 'rc', desc: '预发布', isHide: false }
    ];

    // ======================
    // 🌐 原生 JS 初始化函数（可手动调用）
    // ======================

    function initNative(userOptions = {}) {
        if (typeof document === 'undefined') return;

        const config = {
            currentVersion: userOptions.currentVersion || '1.0.0',
            suffixRules: userOptions.suffixRules || DEFAULT_RULES,
            debug: !!userOptions.debug,
            isDev : !!userOptions.isDev
        };


        const process = () => {
            document.querySelectorAll('[data-version]').forEach(el => {
                // 防止重复处理（加标记）
                if (el.hasAttribute('data-version-checked')) return;
                el.setAttribute('data-version-checked', 'true');
                console.log(`[VersionControl] 初始化：`, config);
                handleElement(el, el.getAttribute('data-version'), config);
            });
        };
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', process);
        } else {
            process();
        }
    }

    // ======================
    // Vue 指令（兼容 Vue 2 & 3）
    // ======================

    function createDirective(config) {
        return {
            // Vue 2
            inserted(el, binding) { handleElement(el, binding.value, config); },
            update(el, binding) {
                if (binding.value !== binding.oldValue) {
                    handleElement(el, binding.value, config);
                }
            },
            // Vue 3
            mounted(el, binding) { handleElement(el, binding.value, config); },
            updated(el, binding) {
                if (binding.value !== binding.oldValue) {
                    handleElement(el, binding.value, config);
                }
            }
        };
    }

    // ======================
    // 🧩 插件主对象
    // ======================

    const VersionControl = {
        // 暴露原生初始化方法（供手动调用）
        initNative,

        // Vue 插件入口
        install(appOrVue, options = {}) {
            VersionControl.__usedByVue__ = true; // 标记：已被 Vue 使用

            const config = {
                currentVersion: options.currentVersion || '1.0.0',
                suffixRules: options.suffixRules || DEFAULT_RULES,
                debug: !!options.debug,
                isDev : !!options.isDev
            };

            const directive = createDirective(config);

            // 判断 Vue 3 (app 对象)
            if (
                appOrVue &&
                typeof appOrVue === 'object' &&
                typeof appOrVue.directive === 'function' &&
                !appOrVue.prototype // Vue 3 的 app 没有 prototype
            ) {
                appOrVue.directive('version', directive);
                return;
            }

            // 判断 Vue 2 (构造函数)
            if (
                typeof appOrVue === 'function' &&
                appOrVue.options
            ) {
                appOrVue.directive('version', directive);
                return;
            }

            console.warn('[VersionControl] 无法识别 Vue 版本，指令注册失败');
        }
    };

    // ======================
    // 🚀 自动原生初始化（仅当未被 Vue 使用时）
    // ======================
    console.log(`[VersionControl] 自动初始化`, VersionControl.__usedByVue__);
    setTimeout(() => {
        if (
            typeof window !== 'undefined' &&
            !VersionControl.__usedByVue__ &&
            typeof document !== 'undefined'
        ) {
            const autoConfig = {
                currentVersion: window.VERSION_CONTROL_CURRENT_VERSION || '1.0.0',
                suffixRules: window.VERSION_CONTROL_SUFFIX_RULES || DEFAULT_RULES,
                debug: !!window.VERSION_CONTROL_DEBUG,
                isDev : window.VERSION_CONTROL_IS_DEV || false
            };
            initNative(autoConfig);
        }
    }, 200);
    window.VersionControl = VersionControl;
    return VersionControl;
}));