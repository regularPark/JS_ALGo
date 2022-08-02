function flatten(arr) {
    return (arr.reduce((result, x) => result.concat(Array.isArray(x) ? flatten(x) : x), []))
}

flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]