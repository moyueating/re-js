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


function flatten2(arr, level) {
	function walk(arr, currLevel) {
		let res = [];
		for (let item of arr) {
			if (Array.isArray(item) && currLevel < level) {
				res = res.concat(walk(item, currLevel + 1));
			} else {
				res.push(item)
			}
		}
		return res;
	}
	return walk(arr, 0);
}

let arr2 = [1, [2, [3, [4, 5]]]]
var res = flatten2(arr2, 1);
console.log(res);
