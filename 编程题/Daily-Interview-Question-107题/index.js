// 考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素
// 比如有个数组有10W个元素，从中不重复随机选取1W个元素。


// 大概的思路都是将已经选中过的从元素池子中剔除掉


/* 洗牌算法：
    1.生成一个0 - arr.length 的随机数
    2.交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.生成一个0 - arr.length - 1 的随机数
    4.交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
    依次类推，直至取完所需的10k个元素
*/

function shuffle(arr, size){
    let result = [];
    for(let i = 0; i < size; i++){
        let randomIndex = Math.floor(Math.random() * (arr.length - 1));
        let temp = arr[randomIndex];
        result.push(temp);
        arr[randomIndex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return result;
}

console.log(shuffle([1,2,3,3,4,5,5,5,5,5], 4))