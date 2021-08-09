// 归并排序
// 算法步骤
// 1、申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
// 2、设定两个指针，最初位置分别为两个已经排序序列的起始位置；
// 3、比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
// 4、重复步骤 3 直到某一指针达到序列尾；
// 5、将另一序列剩下的所有元素直接复制到合并序列尾。
function mergeSort(arr){
	if(arr.length < 2){
		return arr;
	}
	let mid = Math.floor(arr.length / 2)
	let left = arr.slice(0, mid);
	let right = arr.slice(mid)
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
	let result = []
	while(left.length && right.length){
		if(left[0] < right[0]){
			result.push(left.shift())
		}else{
			result.push(right.shift())
		}
	}
	while(left.length){
		result.push(left.shift())
	}
	while(right.length){
		result.push(right.shift())
	}
	return result
}

console.log(mergeSort([34, 13, 45, 12, 6, 4, 23, 76]))
