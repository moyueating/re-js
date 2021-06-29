// 插入排序
// 算法步骤
// 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
// 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

function insertSort(arr){
	let preIndex, current;
	for(let i = 1; i < arr.length; i++){
		preIndex = i - 1;
		current = arr[i];
		while(current < arr[preIndex] && preIndex >= 0){
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current
	}

	return arr;
}

console.log(insertSort([23,4,12,56,78, 34]));