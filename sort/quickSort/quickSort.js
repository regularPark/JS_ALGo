function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    var pivot = arr[start];
    var swapIdx = start;
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1); // except pivot
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    console.log(arr)
    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3])


// Best-> O(n log n)
// Worst(이미 정렬된 배열을 정렬할 경우 &
// pivot을 최댓값 or 최솟값으로 정하고 정렬하려 할때)-> O(n^2)