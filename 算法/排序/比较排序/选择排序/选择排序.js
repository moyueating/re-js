// 算法步骤
// 1、首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
// 2、再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 3、重复第二步，直到所有元素均排序完毕。

function selectSort(arr){
	const len = arr.length;
	let minIndex, temp;
	for(let i = 0; i < len; i++){
		minIndex = i;
		temp = arr[i]		
		for (let j = i + 1; j < len; j++) {
			if(arr[j] < arr[minIndex]){
				minIndex = j
			}
		}
		arr[i] = arr[minIndex];
		arr[minIndex] = temp
	}
	return arr;
}

console.log(selectSort([23, 3, 12, 4, 67, 34, 5, 24, 123]))
