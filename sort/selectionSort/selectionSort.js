function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var tmp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = tmp;
        }

    }
    console.log(arr)
    return arr;
}

selectionSort([5, 3, 1, 2, 4])


// O(n^2)