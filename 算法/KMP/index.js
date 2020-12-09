// 字符串朴素模式匹配法
function match(source, target) {
    let i = 0, j = 0;
    while (i < source.length && j < target.length) {
        if (source[i] === target[j]) {
            i++;
            j++;
        } else {
            i = i - j + 1
            j = 0;
        }
        if (j === target.length) return i - j
    }
    return -1
}
console.log(match('qeeabacbacdef', 'abac'))

// kmp算法优化
function getNext(str) {
    let next = [];
    next[0] = -1;
    let i = 0, j = -1;
    while (i < str.length - 1) {
        if (j === -1 || str[i] === str[j]) {
            ++i;
            ++j;
            next[i] = j;
        } else {
            j = next[j]
        }
    }
    return next
}

let next = getNext('abababca')

function kmp(source, target) {
    let i = 0, j = 0;
    while (i < source.length && j < target.length) {
        if (j == -1 || source[i] === target[j]) {
            i++;
            j++;
        } else {
            j = next[j]
        }
    }
    if (j === target.length) return i - j
    return -1
}

console.log(kmp('ababababca', 'abababca'))