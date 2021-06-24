// 正则表达式中，\代表转义字符，通常是转义一些特殊字符，比如
// \f 换页
// \n 换行
// \r 回车
// \s 空白字符：空格、制表符、换页符
// \S 非空白字符
// \t 制表符
// \d 一个数字字符0-9
// \D 非数字字符
// \w 匹配字母数字下划线，相当于[A-Za-z0-9_]
// \W匹配非字母数字下划线。相当于[^A-Za-z0-9_]
// \b 匹配单词边界，即单词与空格间的位置
// \B 非单词边界匹配

// 而\1\2指的是反向引用，这里要正确理解，理清楚。
// 我们以一个查找重复单词的例子来解释，主要的代码如下：
// var str = “Is is the cost of of gasoline going up up”;
// var patt1 = /\b([a-z]+) \b\1/ig;
// document.write(str.match(patt1));
// \b([a-z]+)是该表达式的第一个分组，\1是匹配第一个分组匹配到的内容，也就是所谓的\1引用了第一个()匹配到的内容。
// 具体到这个例子，\b([a-z]+)是匹配一个单词，\b\1是匹配与\b([a-z]+)完全相同的单词。

// 同理，如果是\2，就是匹配第二个()匹配到的内容，再用一个稍微简单的例子理解一下：
// (x)(y)\2 该正则是想匹配到第一个字符是x,第二个字符是y，第三个字符也是y的内容，比如xyy能够被匹配到，但是xya、xyb就不能被匹配到。

// 再往后推\3\4等，是同样的道理。
// ————————————————



// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/220
// 找出字符串中连续出现最多的字符和个数 
// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}

function getMaxSeries(str){
    let match = str.match(/(\w)\1*/g);
    let maxLen = Math.max(...match.map(s => s.length));
    let result = {}
    match.reduce((pre, current) => {
        if(current.length === maxLen){
            result[current[0]] = maxLen
        }
        return result;
    }, result)
    return result
}

console.log(getMaxSeries('abcaakjbb'))
console.log(getMaxSeries('abbkejsbcccwqaa'))