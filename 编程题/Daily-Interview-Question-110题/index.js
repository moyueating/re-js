// 输入: 1,2,3,5,7,8,10
// 输出 1~3,5,7~8,10

function format(str){
    let result = [];
    let arr = str.split(',');
    let level = '';
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) + 1 == Number(arr[i+1])){
            level = level ? level : `${arr[i]}~`;
        }else{
            level = `${level}${arr[i]}`
            result.push(level);
            level = '';
        }
    }

    return result;
}

console.log(format('1,2,3,5,7,8,10'))