const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    var new_obj = [];

    function innerCollectStrings(obj_) {
        for (var key in obj_) {
            if (typeof obj_[key] === "object") {
                innerCollectStrings(obj_[key])
            } else if (typeof obj_[key] === "string") {
                new_obj.push(obj_[key])
            } else return;
        }
    }
    innerCollectStrings(obj)

    return new_obj;
}

collectStrings(obj) // ["foo", "bar", "baz"])



// pure recursion

function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}