function bubbleSort(arr){
    const len = arr.length;
    let count = 0;
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - 1 - i; j++){
            count++;
            if(arr[j] > arr[j+1]){
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log('执行了'+ count + '次')
    return arr
}

console.log(bubbleSort([4,3,2,1]))

// 改进型冒泡
// 虽然时间复杂度依然是n2，但是可以减少循环次数
function bubbleSort2(arr){
    let i = arr.length - 1;
    let count = 0;
    while(i > 0){
        let pos = 0;
        for(let j = 0; j < i; j++){
            count++;
            if(arr[j] > arr[j+1]){
                pos = j;
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        i = pos;
    }
    console.log('执行了'+ count + '次')
    return arr;
}
console.log(bubbleSort2([4,3,2,1]))