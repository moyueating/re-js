
// 时间流派
function intersect(arr1, arr2){
    let ret = [];
    if(arr1.length > arr2.length){
        return intersect(arr2, arr1);
    }
    for(let i = 0; i < arr1.length; i++){
        let value = arr1[i];
        if(arr2.includes(value)){
            arr2.splice(arr2.indexOf(value), 1);
            ret.push(value);
        }
    }
    return ret;
}

// console.log(intersect([1,2,2,3,,4,5], [12,2,2]));
// console.log(intersect([1,1], [1]));
// console.log(intersect([3,1,2], [1, 1]));

// 空间流派
function intersect(arr1, arr2){
    let map = {}
    let ret = [];
    if(arr1.length > arr2.length){
        return intersect(arr2, arr1);
    }
    for(let value of arr1){
        if(map[value]){
            map[value] += 1
        }else{
            map[value] = 1;
        }
    }
    let result = [];
    for(let v of arr2){
        if(map[v] > 0){
            result.push(v);
            map[v] -= 1;
        }
    }
    return result;
}

console.log(intersect([3,1,2], [1, 1]));