function binarySearch(arr, num) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var mid = Math.ceil((left + right) / 2);
        if (num > arr[mid]) {
            left = mid;
        } else if (num < arr[mid]) {
            right = mid;
        } else return mid;
    }
    return -1;
}

// binarySearch([1, 2, 3, 4, 5], 2) // 1
// binarySearch([1, 2, 3, 4, 5], 3) // 2
binarySearch([1, 2, 3, 4, 5], 5) // 4
// binarySearch([1, 2, 3, 4, 5], 6) // -1


// new one
function binarySearch(arr, num) {
    var left = 0;
    var right = arr.length - 1;
    var mid = Math.floor((left + right) / 2);
    while (arr[mid] !== num && left <= right) {
        if (num > arr[mid]) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }
    if (arr[mid] === num) return mid;
    return -1;
}