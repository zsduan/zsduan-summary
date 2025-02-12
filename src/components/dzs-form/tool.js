
/**生成 hash 值*/ 
export function simpleHash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char; // 简单的位操作和字符编码加法
        hash |= 0; // 确保hash是一个32位整数
    }
    return hash.toString(16); // 将哈希值转换为十六进制字符串
}

/**复制到剪贴板*/ 
export function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}