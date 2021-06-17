let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]


// 递归，函数的重复调用
// function flatten(arr){
//     let result = [];
//     arr.forEach(data => {
//         data = Array.isArray(data) ? flatten(data) : [data];
//         result = [...result, ...data]
//     })
//     return result;
// }
// console.log(flatten(arr));


// 迭代，输出作为输入，重复执行代码块
function flatten(arr){
    let result = [];
    while(arr.length){
        let first = arr.shift();
        if(Array.isArray(first)){
            arr = first.concat(arr);
        }else{
            result.push(first);
        }
    }
    return result;
}
console.log(flatten(arr));