function areThereDuplicates() {
    const var_li = [];
    const freqCounter = {};
    for (var i = 0; i < arguments.length; i++) {
        var_li.push(arguments[i]);
    }
    for (var j = 0; j < var_li.length; j++) {
        if (freqCounter[var_li[j]] > 0) {
            console.log(true)
            return true;
        }
        freqCounter[var_li[j]] = (freqCounter[var_li[j]] || 0) + 1;
    }
    console.log(false)

    return false;

}


areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true