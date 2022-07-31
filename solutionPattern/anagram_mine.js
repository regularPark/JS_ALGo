function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter = {};
    for (var char of str1) {
        counter[char] = (counter[char] || 0) + 1;
    }

    for (var i = 0; i < str2.length; i++) {
        let checkChar = str2[i];
        if (!counter[checkChar]) {
            return false;
        } else {
            counter[checkChar] -= 1
        }

    }
    return true;
}


validAnagram('aaz', 'zza')