function isSubsequence(a, b) {
    var i = 0;
    var j = 0;
    if (!a) return true;
    while (j < b.length) {
        if (a[i] === b[j]) i++;
        if (i === a.length) {
            console.log(true);
            return true;
        }
        j++;
    }
    console.log(false);
    return false;
}


isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)