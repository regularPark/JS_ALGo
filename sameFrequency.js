function sameFrequency(a, b) {
    var s_a = a.toString();
    var s_b = b.toString();

    if (s_a.length !== s_b.length) {
        return false;
    }
    let freqCounter = {};
    for (var i = 0; i < s_a.length; i++) {
        freqCounter[s_a[i]] = (freqCounter[s_a[i]] || 0) + 1
    }
    for (var j = 0; j < s_b.length; j++) {
        if (!freqCounter[s_b[j]]) {
            return false;

        } else {
            freqCounter[s_b[j]] -= 1;
        }
    }
    return true;
}



sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false