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
// console.log(flatten(arr));


function flatten2(arr, n){
    function loop(arr, level){
        let ret = [];
       for(let item of arr){
           if(Array.isArray(item) && level < n){
               ret = ret.concat(loop(item, level+1))
           }else{
               ret.push(item);
           }
       }
       return ret;
    }
    return loop(arr, 0)
}

let arr2 = [1,[2,[3,[4,5]]],6];
// console.log(flatten2(arr2, 1));


const flatten3 = (arr, deep) => {

    deep = deep ? deep : Infinity;
    while(deep && arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
        deep --;
    }
    return arr;
}

let arr3 = [1,[2,[3,[4,5]]],6];
console.log(2222222222222,flatten3(arr3, 1));
