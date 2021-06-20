//  如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。


function format1(str){
    let result = '';
    for(let s of str){
        result += s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()
    }
    return result;
}

console.log(format1('AbC'))


function format2(str){
    return str.replace(/[a-zA-Z]/g, function(match){
        return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
    })
}

console.log(format2('sLIIJsk'))