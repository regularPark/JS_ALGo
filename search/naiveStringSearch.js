function naiveStringSearch(str, word) {
    var cnt = 0;
    var len = str.length - word.length
    for (var i = 0; i <= len; i++) {
        if (str[i] === word[0]) {
            var j = 1;
            var k = i + 1;
            while (j <= word.length - 1) {
                if (word[j] === str[k]) {
                    j++;
                    k++;
                } else {
                    j--;
                    break;
                }
            }
            j === word.length ? cnt++ : cnt += 0;
        }
    }
    console.log(cnt)
}


// naiveStringSearch("womwomgsemomg", "omg")
naiveStringSearch("lorie loled", "lo")