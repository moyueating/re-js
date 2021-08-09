// function quickSort(arr, left, right){
// 	if(left > right) return;
// 	// 选取最左边的为基准值
// 	const partition = arr[left];
// 	let i = left;
// 	let j = right;

// 	while(i < j){
// 		// 从右边开始找小于基准值的位置
// 		while(arr[j] > partition && i < j){
// 			j--
// 		}
// 		// 从左边开始找大于基准值的位置
// 		while(arr[i] <= partition && i < j){
// 			i++
// 		}
// 		// 交换两者
// 		const temp = arr[i]
// 		arr[i] = arr[j];
// 		arr[j] = temp;
// 	}
// 	arr[left] = arr[i];
// 	arr[i] = partition;
// 	quickSort(arr, left, i - 1);
// 	quickSort(arr, i + 1, right);
// 	return arr;
// }

function partition(arr, left, right){
	let pivot = arr[left];
	while(left < right){
		while(left < right && arr[right] > pivot){
			right--;
		}
		arr[left] = arr[right];
		while(left < right && arr[left] <= pivot){
			left++
		}
		arr[right] = arr[left];
	}
	arr[left] = pivot;
	return left;
}
function quickSort(arr, left, right){
	if(left <= right){
		let pivot = partition(arr, left, right);
		quickSort(arr, left, pivot - 1);
		quickSort(arr, pivot + 1, right);
	}
	return arr;
}

const origin = [1, 12, 23, 45, 12, 4, 67, 34, 5, 24, 12, 11,1,1,11]
console.log(quickSort(origin, 0, origin.length - 1))
