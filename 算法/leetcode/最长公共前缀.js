
// strs = ["dog","racecar","car"] ''
// strs = ["flower","flow","flight"] fl
// 水平扫描，依次比较相邻的两项的最小前缀，然后和下一项比较
function longestCommonPrefix(strs){
    if(strs.length === 0) return '';
    
    let result = strs[0]
    for(let i = 0; i< strs.length; i++){
        while(strs[i].indexOf(result) === -1){
            if(!result.length){
                return ''
            }
            result = result.substring(0, result.length - 1)
        }
    }
    return result
}

console.log(longestCommonPrefix(['fsf',"flower","flow","flight"]))