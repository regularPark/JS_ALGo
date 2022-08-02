function capitalizeFirst(arr) {
    let new_arr = [];

    function innerCapitalizeFirst(arr_str) {
        if (arr_str.length === 0) return;
        new_arr.push(arr_str[0].charAt(0).toUpperCase() + arr_str[0].slice(1));
        innerCapitalizeFirst(arr_str.slice(1))
    }

    innerCapitalizeFirst(arr)

    return new_arr;
}

capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']