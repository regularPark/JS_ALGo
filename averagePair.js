function averagePair(nums, avg) {
    const numbers = [];
    if (nums.length === 0) {
        console.log(false)
        return false;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) / 2 === avg) {
                console.log(true)
                return true
            }
            numbers.push((nums[i] + nums[j]) / 2);
        }
    }
    console.log(false)
    return false;
}



averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false