// 堆是一种非线性结构，可以把堆看作一个数组，也可以被看作一个完全二叉树，通俗来讲堆其实就是利用完全二叉树的结构来维护的一维数组但堆并不一定是完全二叉树
// https://segmentfault.com/a/1190000015487916
// https://www.runoob.com/w3cnote/heap-sort.html
// 1、将数组转化模拟成大顶堆的二叉树
// 2、把堆首（最大值）和堆尾互换；
// 3、把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置
// 4、重复步骤 2，直到堆的尺寸为 1。
let len;
function buildMaxHeap(arr) {
    len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i)
    }
}

function heapify(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let larget = i;

    if (left < len && arr[left] > arr[larget]) {
        larget = left
    }

    if (right < len && arr[right] > arr[larget]) {
        larget = right
    }

    if (i !== larget) {
        swap(arr, i, larget);
        heapify(arr, larget);
    }

}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        // 每一轮找到的最大值在下一轮循环中需要提出掉
        len--;
        heapify(arr, 0);
    }

    return arr;
}

console.log(heapSort([11, 23, 45, 4, 67,34, 5, 24, 12]))