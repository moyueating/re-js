function quickSort(arr, left, right){

	if(left > right) return;

	// 选取最左边的为基准值
	const partition = arr[left];
	let i = left;
	let j = right;

	while(i !== j){
		// 从右边开始找小于基准值的位置
		while(arr[j] > partition && i < j){
			j--
		}
		// 从左边开始找大于基准值的位置
		while(arr[i] <= partition && i<j){
			i++
		}
		// 交换两者
		const temp = arr[i]
		arr[i] = arr[j];
		arr[j] = temp;
	}
	arr[left] = arr[i];
	arr[i] = partition;
	quickSort(arr, left, i - 1);
	quickSort(arr, i + 1, right);
	return arr;
}

const origin = [23, 45, 12, 4, 67, 34, 5, 24, 12]
console.log(quickSort(origin, 0, origin.length - 1))
