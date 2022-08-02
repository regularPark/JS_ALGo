function stringifyNumbers(obj) {
    var new_obj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            new_obj[key] = stringifyNumbers(obj[key]);
        } else if (typeof obj[key] === 'number') {
            new_obj[key] = String(obj[key]);
        } else {
            new_obj[key] = obj[key]
        }
    }
    return new_obj
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)


// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }


console.log(typeof [1, 2])