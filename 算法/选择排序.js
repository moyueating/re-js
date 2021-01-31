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
