function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                noSwaps = false; // Optimization
            }
        }
        if (noSwaps) break;
    }
    return arr
}

bubbleSort([37, 47, 26, 9])

// O(n^2)