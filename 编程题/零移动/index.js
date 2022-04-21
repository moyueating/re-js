// splice的时间复杂度是O(n),所以整个算法的时间复杂度是O(n^2)
function zeroMove(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] == 0){
            arr.splice(i, 1);
            arr.push(0);
            i--;
            len--;
        }
    }
    return arr;
}

console.log(zeroMove([0,1,0,3,12]))


// 双指针 时间复杂度是O(n),每个元素最多遍历两次
function zeroMove2(arr){
    let right = 0;
    let left = 0;
    while(right < arr.length){
        if(arr[right] != 0){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
        }
        right++;
    }
    return arr;
}

console.log(zeroMove2([0,0,1,0,3,12]))