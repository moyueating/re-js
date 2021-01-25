
// 暴力解法
var longestPalindrome = function(s) {

    function isPalindrome(str) {
        var len  = str.length
        var middle = parseInt(len/2)
        for(var i = 0;i<middle;i++){
            if(str[i] != str[len-i-1]){
                return false
            }
        }
        return true
    }

    const len = s.length;
    let max = 0;
    let ret = '';
    for(let i = 0; i < len; i++){
        for(let j = i+1; j<=len; j++){
            const subStr = s.substring(i, j);
            if(isPalindrome(subStr) && subStr.length > max){
                max = subStr.length;
                ret = subStr
            }
        }
    }
    return ret
};

console.log(longestPalindrome('abcacb'))
