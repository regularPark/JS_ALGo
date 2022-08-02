function power(b, e) {
    if (e === 0) return 1;
    return b * power(b, e - 1);
}

function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1)
}

function productOfArray(nums) {
    if (nums.length === 0) return 1;
    return nums[0] * (productOfArray(nums.slice(1)))
}

function recursiveRange(n) {
    if (n === 1) return 1;
    return n + recursiveRange(n - 1);
}

function fib(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}