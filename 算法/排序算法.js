// 插入排序
// 算法步骤
// 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
// 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

function insertSort(arr){
	let preIndex, curren;
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
