function countUniqueValues(nums) {
    var i = 0;
    var j = 1;
    if (nums.length === 0) return 0;

    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
            j++;
        } else {
            j++;
        }
    }
    return i + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);