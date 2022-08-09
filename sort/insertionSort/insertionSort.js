function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            console.log(arr)

        }
        arr[j + 1] = currentVal;
        console.log("---s--")
        console.log(arr)
        console.log("---e--")

    }

}


insertionSort([5, 4, 1, 3, 2])


// O(n^2)